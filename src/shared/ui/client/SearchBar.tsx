'use client'

import { useForm } from 'react-hook-form'

import { Icon } from '../server/Icon/Icon'

type Props = {
  placeholder: string
  defaultKeyword: string
  onSearch: (keyword: string) => void
}

type SearchForm = {
  keyword: string
}

/**
 * 검색 창 컴포넌트
 */
export const SearchBar = ({ placeholder, defaultKeyword, onSearch }: Props) => {
  const { register, handleSubmit } = useForm<SearchForm>({
    defaultValues: { keyword: defaultKeyword },
  })

  const onSubmit = (data: SearchForm) => {
    const trimmed = data.keyword.trim()
    if (trimmed) {
      onSearch(trimmed)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex-align-center border-b-secondary gap-3.5 border-b-3 px-6 py-5"
    >
      <input
        {...register('keyword')}
        className="font-search grow border-none p-0"
        placeholder={placeholder}
      />
      <button type="submit">
        <Icon name="search" size={'2rem'} className="text-secondary" />
      </button>
    </form>
  )
}
