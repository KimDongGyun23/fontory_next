import type { FontDetail } from '@/src/entity/font'

import { EmptyFontListMessage } from './EmptyFontListMessage'
import { FontPreviewCard } from './FontPreviewCard'

type Props = {
  fontList: FontDetail[]
}

/**
 * 폰트 목록을 받아 각 항목을 FontPreviewCard로 렌더링하는 리스트 컴포넌트
 */
export const FontPreviewCardList = ({ fontList }: Props) => {
  if (!fontList || !fontList.length) {
    return <EmptyFontListMessage messageType="noFont" />
  }

  return (
    <div className="flex-column">
      {fontList.map((font) => (
        <FontPreviewCard key={font.id} {...font} />
      ))}
    </div>
  )
}
