export type Font = {
  id: number
  name: string
  example: string
  bookmarked: boolean
  woff: string
  writerName: string
}

export type FontMetadata = {
  downloadCount: number
  bookmarkCount: number
}

export type FontDetail = Font & FontMetadata
