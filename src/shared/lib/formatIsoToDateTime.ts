type FnType = (isoString: string) => string

/**
 * isoString을 "YYYY-MM-DD HH:MM:SS" 형식으로 변환하는 유틸 함수
 */
export const formatIsoToDateTime: FnType = (isoString) => {
  if (!isoString) {
    console.error('formatIsoToDateTime: 입력값이 없습니다.')
    return ''
  }

  if (typeof isoString !== 'string') {
    console.error(`formatIsoToDateTime: 문자열이 아닌 값이 입력됨; ${typeof isoString}`)
    return ''
  }

  const [datePart, timePartWithMs] = isoString.split('T')
  if (!datePart || !timePartWithMs) {
    console.error(`formatIsoToDateTime: isoString 형식이 아님; ${isoString}`)
    return ''
  }

  const [timePart] = timePartWithMs.split('.')
  if (!timePart) {
    console.warn(`formatIsoToDateTime: 시간 정보가 없음, 날짜만 반환; ${datePart}`)
    return datePart
  }

  return `${datePart} ${timePart}`
}
