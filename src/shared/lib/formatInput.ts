type FnType = (raw: string) => string
/**
 * 숫자만 입력된 문자열을 YYYY-MM-DD 형식으로 변환하는 유틸 함수
 */
export const formatDateInput: FnType = (raw) => {
  const digits = raw.replace(/\D/g, '')

  if (digits.length <= 4) {
    return digits
  }

  if (digits.length <= 6) {
    return `${digits.slice(0, 4)}-${digits.slice(4)}`
  }

  return `${digits.slice(0, 4)}-${digits.slice(4, 6)}-${digits.slice(6, 8)}`
}

/**
 * 숫자만 입력된 문자열을 XXX-XXXX-XXXX 형식으로 변환하는 유틸 함수
 */
export const formatPhoneNumberInput: FnType = (raw) => {
  const digits = raw.replace(/\D/g, '')

  if (digits.length <= 3) {
    return digits
  }

  if (digits.length <= 7) {
    return `${digits.slice(0, 3)}-${digits.slice(3)}`
  }

  return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7, 11)}`
}
