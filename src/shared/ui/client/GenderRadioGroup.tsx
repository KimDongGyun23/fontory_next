'use client'
import type { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

import { genderConfig } from '@/src/entity/user'

import { cn } from '../../lib'

type Props = {
  section: string
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'name' | 'value'>

/**
 * 성별 선택 라디오 버튼 그룹 컴포넌트
 */
export const GenderRadioGroup = ({ section, ...rest }: Props) => {
  const { register, watch } = useFormContext()
  const selected = watch(section)
  const genderOptions = Object.values(genderConfig)

  return (
    <div className="flex flex-col gap-3">
      <label className="font-input-label">성별</label>
      <div className="grid grid-cols-2 gap-3">
        {genderOptions.map(({ label, value }) => {
          const isSelected = selected === value

          return (
            <label
              key={value}
              htmlFor={label}
              className={cn(
                'rounded-small cursor-pointer border px-6 py-5 text-center transition-colors',
                isSelected ? 'bg-primary border-primary text-white' : 'text-darkgrey border-grey bg-white',
              )}
            >
              <input
                id={label}
                type="radio"
                value={value}
                className="absolute h-0 w-0 opacity-0"
                {...register(section, { required: true })}
                {...rest}
              />
              <span className="font-secondary-button">{label}</span>
            </label>
          )
        })}
      </div>
    </div>
  )
}
