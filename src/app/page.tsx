import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

export default function Home() {
  return (
    <>
      <header className="flex gap-12 my-12 mx-auto w-[90%] max-w-[75rem]">
        <div className="w-160 h-100"></div>
        <div>
          <div className="text-2xl">
            <h1
              className={twMerge(
                'text-[2rem] font-bold font-montserrat text-transparent',
                'uppercase bg-linear-to-r from-orange-400 to-yellow-200 bg-clip-text'
              )}
            >
              NextLevel Food for NextLevel Foodies
            </h1>
            <p>Taste & share food from all over the world.</p>
          </div>
          <div className="text-2xl flex gap-4">
            <Link
              className={twMerge(
                'inline-block mt-4 py-2 px-4 rounded-lg text-white',
                'bg-transparent text-amber-400 pl-0',
                'hover:text-amber-600 active:text-amber-600'
              )}
              href="/community"
            >
              Join the Community
            </Link>
            <Link
              className={twMerge(
                'inline-block mt-4 py-2 px-4 rounded-lg text-white font-bold',
                'bg-linear-to-r from-orange-400 to-yellow-200',
                'hover:bg-linear-to-r hover:from-orange-600 hover:to-yellow-300',
                'active:bg-linear-to-r active:from-orange-600 active:to-yellow-300'
              )}
              href="/meals"
            >
              Explore Meals
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className="flex flex-col text-2xl max-w-[50rem] w-[90%] my-8 mx-auto text-center">
          <h2 className="text-4xl font-bold my-10 mx-auto">How it works</h2>
          <p className="my-5">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p className="my-5">
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className="flex flex-col text-2xl max-w-[50rem] w-[90%] my-8 mx-auto text-center">
          <h2 className="text-4xl font-bold my-10 mx-auto">
            Why NextLevel Food?
          </h2>
          <p className="my-5">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p className="my-5">
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  )
}
