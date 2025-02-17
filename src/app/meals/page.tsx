import Link from 'next/link'

import MealsGrid from './components/meals-grid'

export default function Meal() {
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
            className="inline-block mt-4 px-4 py-2 rounded-lg text-white font-bold no-underline bg-linear-to-r from-orange-600 to-yellow-300"
            href="/meals/share"
          >
            Share your favorite Recipe
          </Link>
        </p>
      </header>
      <main>
        <MealsGrid meals={[]} />
      </main>
    </>
  )
}
