import { type ReactNode } from 'react'

import { pretendard } from '@/src/app/styles/font'

import '../src/app/styles/index.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="ko" className={pretendard.className}>
      <body>
        <div className="text-red-500">hi</div>
        {children}
      </body>
    </html>
  )
}
