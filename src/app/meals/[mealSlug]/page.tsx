import { getMeal } from '@/lib/meals'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

type Meal = {
  title: string
  summary: string
  creator_email: string
  creator: string
  instructions: string
  image: string
}

export default async function MealDetail({
  params,
}: {
  params: {
    mealSlug: string
  }
}) {
  const { mealSlug } = await params

  console.log('mealSlug', mealSlug)

  const meal = (await getMeal(mealSlug)) as Meal

  if (!meal) {
    return notFound()
  }

  const { summary, title, creator_email, creator, instructions, image } = meal

  const formatedInstructions = instructions?.replace(/\n/g, '<br />')

  return (
    <>
      <header className="flex py-8 px-4 gap-12 m-auto max-w-[80rem]">
        <div className="relative w-[30rem] h-[20rem]">
          <Image
            className="object-cover rounded-lg shadow-[0_0_0.5rem_rgba(0,0,0,0.5)] animate-fade-slide-in-from-left"
            src={image}
            alt={title}
            fill
          />
        </div>
        <div className="px-4 pt-2 pb-0 animate-fade-slide-in-from-right">
          <h1 className="text-6xl font-bold uppercase font-montserrat my-5">
            {title}
          </h1>
          <p className="text-2xl italic">
            by{' '}
            <a
              className={twMerge(
                'bg-linear-to-r from-orange-400 to-yellow-200 bg-clip-text text-transparent',
                'hover:bg-clip-text hover:text-transparent hover:[text-shadow:0_0_18px_rgba(248,190,42,0.8)]'
              )}
              href={`mailto:${creator_email}`}
            >
              {creator}
            </a>
          </p>
          <p className="text-2xl mt-5">{summary}</p>
        </div>
      </header>
      <main>
        <p
          className="text-2xl rounded-lg shadow-[0_0_0.5rem_rgba(0,0,0,0.5)] p-8 max-w-[60rem] my-8 mx-auto animate-fade-slide-in-from-bottom bg-zinc-800"
          dangerouslySetInnerHTML={{
            __html: formatedInstructions,
          }}
        />
      </main>
    </>
  )
}
