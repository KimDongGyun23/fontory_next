type Message = 'noFont' | 'noSearchData' | 'noBookmark'

type Props = {
  messageType: Message
}

const emptyFontMessage: Record<Message, string> = {
  noFont: '아직 제작된 폰트가 없습니다.',
  noSearchData: '검색 결과가 존재하지 않습니다.',
  noBookmark: '아직 저장한 폰트가 없습니다.',
}

/**
 * 폰트 목록이 없을 때 메시지를 보여줄 컴포넌트
 */
export const EmptyFontListMessage = ({ messageType }: Props) => {
  return <p className="text-darkgrey py-20 text-center text-4xl font-bold">{emptyFontMessage[messageType]}</p>
}
