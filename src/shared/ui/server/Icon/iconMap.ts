// 아이콘 파일
import mainCardBell from '@/src/shared/assets/main-card/bell.svg?react'
import mainCardChair from '@/src/shared/assets/main-card/chair.svg?react'
import mainCardClock from '@/src/shared/assets/main-card/clock.svg?react'
import mainCardWebcam from '@/src/shared/assets/main-card/webcam.svg?react'
import shapeArrowRight from '@/src/shared/assets/shape/arrow-right.svg?react'
import shapeCaretRight from '@/src/shared/assets/shape/caret-right.svg?react'
import shapeCheckBox from '@/src/shared/assets/shape/check-box.svg?react'
import shapeDownload from '@/src/shared/assets/shape/download.svg?react'
import shapeFilledBookmark from '@/src/shared/assets/shape/filled-bookmark.svg?react'
import shapeSearch from '@/src/shared/assets/shape/search.svg?react'
import shapeTrash from '@/src/shared/assets/shape/trash.svg?react'
import shapeUnfilledBookmark from '@/src/shared/assets/shape/unfilled-bookmark.svg?react'

import type { ComponentType, SVGProps } from 'react'

export const iconMap = {
  'bell': mainCardBell,
  'chair': mainCardChair,
  'clock': mainCardClock,
  'webcam': mainCardWebcam,
  'arrow-right': shapeArrowRight,
  'caret-right': shapeCaretRight,
  'check-box': shapeCheckBox,
  'download': shapeDownload,
  'filled-bookmark': shapeFilledBookmark,
  'search': shapeSearch,
  'trash': shapeTrash,
  'unfilled-bookmark': shapeUnfilledBookmark,
}

export type IconName = keyof typeof iconMap
export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>
