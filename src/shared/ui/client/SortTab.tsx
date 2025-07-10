'use client'
import { cn } from '../../lib'

type Props<T> = {
  value: T
  options: { label: string; value: T }[]
  onChange: (option: T) => void
}

/**
 * 정렬 방법 선택 탭 컴포넌트
 */
export const SortTab = <T,>({ value, options, onChange }: Props<T>) => {
  return (
    <div className="flex gap-6" role="tablist">
      {options.map(({ label, value: optionValue }) => {
        const isActive = optionValue === value
        return (
          <button
            key={label}
            type="button"
            className={cn(
              'font-filter px-2 py-[1.06]',
              isActive ? 'border-b-3 border-black text-black' : 'text-darkgrey',
            )}
            onClick={() => onChange(optionValue)}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}
