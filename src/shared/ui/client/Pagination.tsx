'use client'
import { type RefObject, useEffect } from 'react'

import { cn } from '../../lib'
import { PaginationManager } from '../../lib/paginationManager'
import { Icon } from '../server/Icon/Icon'

type Props = {
  currentPage: number
  totalPages: number
  scrollTargetRef: RefObject<HTMLElement | null>
  onPageChange: (page: number) => void
}

/**
 * 현재 페이지와 전체 페이지 수를 기반으로 한 페이지네이션
 */
export const Pagination = ({ currentPage, totalPages, scrollTargetRef, onPageChange }: Props) => {
  const manager = new PaginationManager(currentPage, totalPages)

  const handleGoToPrevGroup = () => {
    onPageChange(manager.prevGroupFirstPage)
  }

  const handleGoToNextGroup = () => {
    onPageChange(manager.nextGroupFirstPage)
  }

  const handleGoToSelectPage = (page: number) => {
    onPageChange(page)
  }

  useEffect(() => {
    scrollTargetRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [currentPage, scrollTargetRef])

  return (
    <div className="flex items-center justify-center gap-4">
      {manager.hasPrevGroup && (
        <button
          onClick={handleGoToPrevGroup}
          className="flex-center rounded-small border-grey h-20 w-20 border"
        >
          <Icon name="caret-right" size="2.25rem" className="text-primary rotate-180" />
        </button>
      )}

      {manager.visiblePages.map((page) => (
        <button
          key={page}
          onClick={() => handleGoToSelectPage(page)}
          className={cn(
            'rounded-small font-pagination border-grey h-20 w-20 border',
            page === currentPage ? 'bg-primary border-none text-white' : 'text-darkgrey',
          )}
        >
          {page}
        </button>
      ))}

      {manager.hasNextGroup && (
        <button
          onClick={handleGoToNextGroup}
          className="flex-center rounded-small border-grey h-20 w-20 border"
        >
          <Icon name="caret-right" size="2.25rem" className="text-primary" />
        </button>
      )}
    </div>
  )
}
