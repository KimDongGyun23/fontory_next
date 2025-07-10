import { z } from 'zod'

import { formatDateInput, restrictInputChars } from '@/src/shared/lib'

export const userConfig = {
  attribute: {
    nickname: {
      section: 'nickname',
      label: '닉네임',
      placeholder: '닉네임을 입력해주세요.',
      hint: '최대 9글자까지 입력 가능',
      onInput: (e: React.FormEvent<HTMLInputElement>) => {
        const input = e.currentTarget
        input.value = restrictInputChars(input.value, 9)
      },
    },
    gender: {
      section: 'gender',
      label: '성별',
      hint: '성별을 선택해주세요.',
    },
    birth: {
      section: 'birth',
      label: '생년월일',
      type: 'text',
      inputMode: 'numeric',
      pattern: '\\d{4}-\\d{2}-\\d{2}',
      placeholder: '생년월일을 입력해주세요.',
      hint: '"-"를 제외한 숫자만 입력 가능',
      onInput: (e: React.FormEvent<HTMLInputElement>) => {
        const input = e.currentTarget
        input.value = formatDateInput(input.value)
      },
    },
    file: {
      section: 'file',
    },
  } as const,
  schema: z.object({
    nickname: z
      .string()
      .min(1, { message: '닉네임을 입력해주세요.' })
      .max(9, { message: '9글자까지 입력 가능합니다.' }),

    gender: z
      .enum(['MALE', 'FEMALE'])
      .nullable()
      .refine((val) => val !== null, { message: '성별을 선택해주세요.' }),

    birth: z
      .string()
      .min(10, { message: '생년월일을 모두 입력해주세요.' })
      .max(10, { message: '생년월일을 모두 입력해주세요.' }),
    file: z.custom<File | null>(),
  }),
  defaultValues: {
    nickname: '',
    gender: null,
    birth: '',
    file: null,
  },
}

export const userAttribute = {
  nickname: {
    section: 'nickname',
    label: '닉네임',
    placeholder: '닉네임을 입력해주세요.',
    hint: '최대 9글자까지 입력 가능',
    onInput: (e: React.FormEvent<HTMLInputElement>) => {
      const input = e.currentTarget
      input.value = restrictInputChars(input.value, 9)
    },
  },
  gender: {
    section: 'gender',
    label: '성별',
    hint: '성별을 선택해주세요.',
  },
  birth: {
    section: 'birth',
    label: '생년월일',
    type: 'text',
    inputMode: 'numeric',
    pattern: '\\d{4}-\\d{2}-\\d{2}',
    placeholder: '생년월일을 입력해주세요.',
    hint: '"-"를 제외한 숫자만 입력 가능',
    onInput: (e: React.FormEvent<HTMLInputElement>) => {
      const input = e.currentTarget
      input.value = formatDateInput(input.value)
    },
  },
  file: {
    section: 'file',
  },
} as const

export const userSchema = z.object({
  nickname: z
    .string()
    .min(1, { message: '닉네임을 입력해주세요.' })
    .max(9, { message: '9글자까지 입력 가능합니다.' }),

  gender: z
    .enum(['MALE', 'FEMALE'])
    .nullable()
    .refine((val) => val !== null, { message: '성별을 선택해주세요.' }),

  birth: z
    .string()
    .min(10, { message: '생년월일을 모두 입력해주세요.' })
    .max(10, { message: '생년월일을 모두 입력해주세요.' }),
})
