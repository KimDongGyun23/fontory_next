'use client'
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

import { cn } from '../../lib'

type Variant = 'filled' | 'outlined' | 'disabled'

type Props = {
  variant?: Variant
} & ButtonHTMLAttributes<HTMLButtonElement>

const variantClassMap: Record<Variant, string> = {
  filled: 'bg-secondary text-white hover:bg-secondary-hover',
  outlined: 'bg-white text-secondary border-2 border-secondary hover:bg-secondary hover:text-white',
  disabled: 'bg-grey text-darkgrey',
}

/**
 * 하늘색 서브 버튼 컴포넌트
 */
export const SecondaryButton = ({
  className,
  children,
  disabled = false,
  type = 'button',
  variant = 'filled',
  ...rest
}: PropsWithChildren<Props>) => {
  return (
    <button
      type={type}
      className={cn(
        'rounded-small font-secondary-button px-7 py-5 text-center transition-colors',
        disabled ? variantClassMap['disabled'] : variantClassMap[variant],
        className,
      )}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  )
}
