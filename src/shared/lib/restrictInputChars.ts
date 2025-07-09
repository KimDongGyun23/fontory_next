type FilterType = 'english' | 'number' | 'korean' | 'alphanumeric' | 'custom'

const FILTER_PATTERNS: Record<Exclude<FilterType, 'custom'>, RegExp> = {
  english: /^[a-zA-Z]$/,
  number: /^[0-9]$/,
  korean: /^[가-힣]$/,
  alphanumeric: /^[a-zA-Z0-9]$/,
}

type FnType = (input: string, maxLength: number, type: FilterType, customPattern?: RegExp) => string
/**
 * 입력 문자열을 필터 타입에 맞게 필터링하고 최대 길이만큼 자르는 유틸 함수
 */
export const restrictInputChars: FnType = (input, maxLength, type = 'custom', customPattern) => {
  const pattern = type === 'custom' ? customPattern : FILTER_PATTERNS[type]

  if (!pattern) {
    console.warn(`restrictInputChars: 유효하지 않은 정규식; type=${type}`)
    return input.slice(0, maxLength)
  }

  const match = pattern.source.match(/\[([^\]]+)\]/)
  if (!match) {
    console.warn(`restrictInputChars: 문자셋 추출 실패; ${pattern}`)
    return input.slice(0, maxLength)
  }

  const allowed = match[1]
  const exclude = new RegExp(`[^${allowed}]`, 'g')
  return input.replace(exclude, '').slice(0, maxLength)
}
