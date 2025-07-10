'use client'
import type { TextareaHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

import { cn } from '../../lib'

type Message = 'error' | 'hint'

type Props = {
  section: string
  label: string
  hint?: string
  className?: string
} & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'name' | 'id'>

const messageColor: Record<Message, string> = {
  error: 'text-primary',
  hint: 'text-darkgrey',
}

/**
 * react-hook-form과 연동된 Textarea 필드 컴포넌트
 */
export const Textarea = ({ section, label, hint, className, ...rest }: Props) => {
  const { formState, register } = useFormContext()
  const errorMessage = formState.errors[section]?.message?.toString()
  const message = errorMessage || hint

  return (
    <div className={cn('flex-column gap-5', className)}>
      <div className="flex-align-center items-end gap-4">
        <label htmlFor={section} className="font-input-label">
          {label}
        </label>

        {message && <p className={messageColor[errorMessage ? 'error' : 'hint']}>* {message}</p>}
      </div>
      <textarea id={section} rows={3} {...register(section)} {...rest} />
    </div>
  )
}
