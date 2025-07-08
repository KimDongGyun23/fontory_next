export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  SIGN_UP: '/signup',

  CREATE_FONT: '/create-font',
  EXPLORE: '/explore',
  DETAIL: (id: string | number = ':id') => `/detail/${id}`,

  ACCOUNT_INFO: '/mypage/account-info',
  ACCOUNT_EDIT: '/mypage/account-info/edit',
  MY_FONT: '/mypage/my-font',
  BOOKMARK: '/mypage/bookmark',

  NOT_FOUND: '/404',
} as const
