import { type ReactNode } from 'react'

import { TanstackQueryProvider } from '@/src/app/provider'
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
        <TanstackQueryProvider>{children}</TanstackQueryProvider>
      </body>
    </html>
  )
}
