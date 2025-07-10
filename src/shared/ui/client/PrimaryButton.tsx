'use client'
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

import { cn } from '../../lib'
import { Icon } from '../server/Icon/Icon'

type Direction = 'left' | 'right' | 'none'

type Props = {
  direction?: Direction
} & ButtonHTMLAttributes<HTMLButtonElement>

const styleByDirection: Record<Direction, string> = {
  right: 'flex-row py-5 pr-5 pl-8',
  left: 'flex-row-reverse py-5 pr-8 pl-5',
  none: 'p-5',
}

const PrimaryButtonIcon = ({ direction, disabled }: Props) => {
  if (direction === 'none') return null

  return (
    <Icon
      name="caret-right"
      size={32}
      className={cn(
        direction === 'left' ? 'rotate-180' : '',
        disabled ? 'text-darkgrey' : 'text-primary group-hover:text-white',
      )}
    />
  )
}

/**
 * 주황색 메인 버튼 컴포넌트
 */
export const PrimaryButton = ({
  className,
  disabled,
  children,
  type = 'button',
  direction = 'none',
  ...rest
}: PropsWithChildren<Props>) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        'group font-primary-button flex-align-center rounded-small gap-3 border transition-all',
        styleByDirection[direction],
        disabled
          ? 'border-darkgrey text-darkgrey'
          : 'border-primary text-primary hover:bg-primary hover:text-white',
        className,
      )}
      {...rest}
    >
      {children}
      <PrimaryButtonIcon direction={direction} disabled={disabled} />
    </button>
  )
}
