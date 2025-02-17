'use client'

import { useFormStatus } from 'react-dom'
import { twMerge } from 'tailwind-merge'

export default function FormSubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      className={twMerge(
        'border-0 py-2.5 px-8 border-none rounded-sm text-white cursor-pointer text-xl',
        'bg-linear-to-r from-orange-400 to-yellow-200 font-semibold',
        'hover:from-orange-600 hover:to-amber-400'
      )}
      type="submit"
      disabled={pending}
    >
      {pending ? 'Submitting...' : 'Share meal '}
    </button>
  )
}
