import type { SVGProps } from 'react'

import { type IconComponent, iconMap, type IconName } from './iconMap'

type IconProps = {
  name: IconName
  size?: number | string
  className?: string
} & SVGProps<SVGSVGElement>

/**
 * `iconMap`에서 `name`에 해당하는 SVG 컴포넌트를 렌더링하는 컴포넌트
 */

export const Icon = ({ name, size, className = '', ...props }: IconProps) => {
  const SvgIcon: IconComponent | undefined = iconMap[name]

  if (!SvgIcon) {
    console.error(`"${name}" 아이콘은 등록되어있지 않습니다.`)
    return null
  }

  return <SvgIcon width={size} height={size} className={className} {...props} />
}
