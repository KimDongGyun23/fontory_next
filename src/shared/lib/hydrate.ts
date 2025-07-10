import { cache } from 'react'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
  type QueryKey,
  type QueryState,
} from '@tanstack/react-query'

/**
 * 클라이언트 SSR 공유를 위한 QueryClient 싱글톤
 */
export const getQueryClient = cache(() => new QueryClient())

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T

type QueryProps<ResponseType = unknown> = {
  queryKey: QueryKey
  queryFn: () => Promise<ResponseType>
}

type DehydratedQueryExtended<TData = unknown, TError = unknown> = {
  state: QueryState<TData, TError>
}

/**
 * queryFn을 실행하고 해당 queryKey의 dehydrated 상태만 반환
 */
export async function getDehydratedQuery<Q extends QueryProps>({ queryKey, queryFn }: Q) {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery({ queryKey, queryFn })

  const { queries } = dehydrate(queryClient)
  const dehydratedQuery = queries.find((query) => isEqual(query.queryKey, queryKey))

  if (!dehydratedQuery) {
    throw new Error(`prefetch가 실패했거나 queryKey가 잘못됨; queryKey: ${JSON.stringify(queryKey)}`)
  }

  return dehydratedQuery as DehydratedQueryExtended<UnwrapPromise<ReturnType<Q['queryFn']>>>
}

/**
 * queryKey 비교 (얕은 배열 비교)
 */
function isEqual(a: QueryKey, b: QueryKey): boolean {
  if (a === b) return true
  if (!Array.isArray(a) || !Array.isArray(b)) return false
  if (a.length !== b.length) return false

  return a.every((val, i) => val === b[i])
}

/**
 * HydrationBoundary
 */
export const Hydrate = HydrationBoundary
