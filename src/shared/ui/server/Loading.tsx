import { SyncLoader } from 'react-spinners'

export const Loading = () => {
  return (
    <div className="flex-center h-screen w-screen">
      <SyncLoader color={`#fd9d6`} />
    </div>
  )
}
