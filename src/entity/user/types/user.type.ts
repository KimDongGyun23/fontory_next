import type z from 'zod'

import type { userConfig } from '../config/user.config'

export type GenderType = 'MALE' | 'FEMALE' | null

export type User = {
  nickname: string
  gender: GenderType
  birth: string
}

export type UserFormType = z.input<typeof userConfig.schema>
