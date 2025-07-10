type FnType = (fontUrl: string, fontId: string | number) => Promise<string | null>

/**
 * 폰트 URL과 ID로 웹폰트를 동적으로 로드하고 fontFamily 이름을 반환하는 유틸 함수
 */
export const loadFont: FnType = async (fontUrl, fontId) => {
  const fontFamily = `font-${fontId}`
  const fontFace = new FontFace(fontFamily, `url(${fontUrl})`, {
    style: 'normal',
    weight: '400',
  })

  try {
    const loadedFace = await fontFace.load()
    document.fonts.add(loadedFace)

    return fontFamily
  } catch (err) {
    console.error(`${fontFamily} 폰트 로드 실패;`, err)

    return null
  }
}
