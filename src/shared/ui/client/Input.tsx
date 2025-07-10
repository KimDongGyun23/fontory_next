'use client'
import type { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

import { cn } from '../lib'

type Message = 'success' | 'error' | 'hint'

type Props = {
  section: string
  label: string
  hint?: string
  successMessage?: string
  className?: string
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'name' | 'id'>

const messageColor: Record<Message, string> = {
  success: 'text-success',
  error: 'text-primary',
  hint: 'text-darkgrey',
}

/**
 * react-hook-form과 연동된 Input 필드 컴포넌트
 */
export const Input = ({ section, label, hint, successMessage, className, ...rest }: Props) => {
  const { formState, register } = useFormContext()
  const errorMessage = formState.errors[section]?.message?.toString()
  const message = errorMessage || successMessage || hint

  return (
    <div className={cn('flex-column gap-5', className)}>
      <div className="flex-align-center items-end gap-4">
        <label htmlFor={section} className="font-input-label">
          {label}
        </label>

        {message && (
          <p className={messageColor[errorMessage ? 'error' : successMessage ? 'success' : 'hint']}>
            * {message}
          </p>
        )}
      </div>
      <input id={section} {...register(section)} {...rest} />
    </div>
  )
}
