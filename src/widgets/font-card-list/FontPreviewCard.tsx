import type { PropsWithChildren } from 'react'
import Link from 'next/link'

import { ROUTES } from '@/src/app/router'
import { pretendard } from '@/src/app/styles/font'
import type { Font } from '@/src/entity/font'
import { loadFont } from '@/src/shared/lib'

/**
 * 폰트 정보를 카드 형태로 표시하고, children으로 액션 버튼(북마크, 다운로드)을 전달받아 표시하는 컴포넌트
 */
export const FontPreviewCard = async ({
  id,
  name,
  example,
  woff,
  writerName,
  children,
}: PropsWithChildren<Font>) => {
  const fontFamily = (await loadFont(woff, id)) ?? pretendard.style.fontFamily

  return (
    <Link href={ROUTES.DETAIL(id)} className="group flex-column gap-8 px-4 py-10 hover:bg-gray-100">
      <p className="font-preview" style={{ fontFamily }}>
        {example}
      </p>

      <div className="max-h-0 scale-y-0 overflow-hidden opacity-0 transition-all duration-300 ease-in-out group-hover:max-h-20 group-hover:scale-y-100 group-hover:opacity-100">
        <div className="flex items-center justify-between p-1">
          <p className="font-preview-metadata text-darkgrey grow">
            {name} / {writerName}
          </p>
          <div className="flex gap-[0.83rem]">{children}</div>
        </div>
      </div>
    </Link>
  )
}
