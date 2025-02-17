'use client'

import { twMerge } from 'tailwind-merge'

export default function ErrorPage() {
  return (
    <main className="mt-20 text-center">
      <h1
        className={twMerge(
          'text-7xl m-0 uppercase text-transparent bg-cover font-montserrat bg-center',
          'bg-gradient-to-r from-orange-600 to-amber-400 bg-clip-text',
          'font-bold'
        )}
      >
        An error occurred!
      </h1>
      <p className="text-2xl font-medium mt-15 text-neutral-300">
        Failed to fetch meal data. Please try again
      </p>
    </main>
  )
}
