type Props = {
  title: string
}

/**
 * 섹션 제목을 표시하는 헤더 컴포넌트
 */
export const SectionHeader = ({ title }: Props) => {
  return (
    <h4 className="font-page-title text-primary border-b-primary mb-[6.25rem] border-b-[0.1875rem] pb-[0.75rem]">
      {title}
    </h4>
  )
}
