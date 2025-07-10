import { Bounce, ToastContainer } from 'react-toastify'

/**
 * toast 커스텀 컴포넌트
 */
export const CustomToast = () => {
  return (
    <ToastContainer
      position="top-right"
      closeButton
      autoClose={2000}
      closeOnClick
      pauseOnHover
      transition={Bounce}
      style={{ fontSize: '1.3rem' }}
    />
  )
}
