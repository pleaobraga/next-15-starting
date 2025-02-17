import Link from 'next/link'
import Image from 'next/image'

import { twMerge } from 'tailwind-merge'
import { Meal } from '../types'

export type Props = Omit<Meal, 'id' | 'creator_email' | 'instructions'>

export default function MealItem({
  title,
  slug,
  image,
  summary,
  creator,
}: Props) {
  return (
    <article
      className={twMerge(
        'flex flex-col justify-between h-full rounded-sm',
        'shadow-[0_0_12px_rgba(0,0,0,0.3)] overflow-hidden',
        'bg-linear-to-r from-orange-950 to-amber-900',
        'transition-all duration-300 ease-in-out'
      )}
    >
      <header>
        <div className="relative h-60">
          <Image
            className="object-cover"
            src={image as string}
            alt={title}
            fill
          />
        </div>
        <div className="pt-2 pb-0 px-4">
          <h2 className="m-0 text-2xl font-bold font-montserrat">{title}</h2>
          <p className="text-sm italic">by {creator}</p>
        </div>
      </header>
      <div className="flex flex-col justify-between h-full">
        <p className="p-4 pb-0">{summary}</p>
        <div className="p-4 text-right">
          <Link
            className={twMerge(
              'inline-block mt-4 py-2 px-4 rounded-md text-white font-bold no-underline',
              'hover:shadow-[0_0_12px_rgba(242,100,18,0.8)] hover:bg-linear-to-r hover:from-orange-950 hover:to-amber-900'
            )}
            href={`/meals/${slug}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  )
}
