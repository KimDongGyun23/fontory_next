import localFont from 'next/font/local'

export const pretendard = localFont({
  src: [
    {
      path: '../../../public/fonts/Pretendard-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/Pretendard-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/Pretendard-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/Pretendard-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-pretendard',
})

export const okticon = localFont({
  src: '../../../public/fonts/okticon.ttf',
  display: 'swap',
  weight: '700',
  style: 'normal',
  variable: '--font-okticon',
})
