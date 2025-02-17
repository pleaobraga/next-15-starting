import Link from 'next/link'

import { getMeals } from '@/lib/meals'
import { twMerge } from 'tailwind-merge'
import { Suspense } from 'react'
import MealsGrid from './components/meals-grid'
import MealsLoading from './components/meals-loading'
import { Meal } from './types'

async function Meals() {
  const meals = (await getMeals()) as Meal[]

  return <MealsGrid meals={meals} />
}

export default function MealPage() {
  return (
    <>
      <header className="gap-12 mx-auto mt-12 mb-20 max-w-[75rem] text-2xl">
        <h1 className="font-montserrat text-5xl font-bold">
          Delicious meals, created{' '}
          <span className="font-montserrat text-5xl font-bold bg-clip-text bg-linear-to-r from-orange-400 to-yellow-200 text-transparent">
            {' '}
            by you
          </span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun
        </p>
        <p>
          <Link
            className={twMerge(
              'inline-block mt-4 px-4 py-2 rounded-lg text-white font-bold no-underline',
              'bg-linear-to-r from-orange-600 to-yellow-300',
              'hover:from-orange-700 hover:to-yellow-400 '
            )}
            href="/meals/share"
          >
            Share your favorite Recipe
          </Link>
        </p>
      </header>
      <main>
        <Suspense fallback={<MealsLoading />}>
          <Meals />
        </Suspense>
      </main>
    </>
  )
}
