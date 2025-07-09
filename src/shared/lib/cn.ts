type FnType = (...classes: (string | undefined | null | false)[]) => string

/**
 * 여러 개의 클래스명을 받아 유효한 값만 공백으로 연결하여 반환하는 유틸 함수
 */
export const cn: FnType = (...args) => {
  return args.filter(Boolean).join(' ')
}
