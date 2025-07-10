export class PaginationManager {
  private readonly maxVisible: number
  private readonly currentPage: number
  private readonly totalPages: number

  constructor(currentPage: number, totalPages: number, maxVisible = 4) {
    this.currentPage = currentPage
    this.totalPages = totalPages
    this.maxVisible = maxVisible
  }

  get currentGroup() {
    return Math.floor((this.currentPage - 1) / this.maxVisible)
  }

  get startPage() {
    return this.currentGroup * this.maxVisible + 1
  }

  get endPage() {
    return Math.min(this.startPage + this.maxVisible - 1, this.totalPages)
  }

  get visiblePages() {
    return Array.from({ length: this.endPage - this.startPage + 1 }, (_, i) => this.startPage + i)
  }

  get hasPrevGroup() {
    return this.startPage > 1
  }

  get hasNextGroup() {
    return this.endPage < this.totalPages
  }

  get prevGroupFirstPage() {
    return Math.max(1, this.startPage - this.maxVisible)
  }

  get nextGroupFirstPage() {
    return this.startPage + this.maxVisible
  }
}
