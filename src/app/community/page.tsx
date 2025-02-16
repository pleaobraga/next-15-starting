import Image from 'next/image'

import mealIcon from '@/assets/icons/meal.png'
import communityIcon from '@/assets/icons/community.png'
import eventsIcon from '@/assets/icons/events.png'

export default function CommunityPage() {
  return (
    <>
      <header className="gap-12 mx-auto mt-12 mb-20 w-[90%] max-w-[75rem] text-2xl text-center">
        <h1 className="font-montserrat text-5xl font-bold my-10">
          One shared passion:{' '}
          <span className="text-amber-400 font-bold">Food</span>
        </h1>
        <p>Join our community and share your favorite recipes!</p>
      </header>
      <main className="w-[90%] max-w-[40rem] my-0 mx-auto text-center">
        <h2 className="font-montserrat text-4xl mb-12 font-bold my-10 mx-auto">
          Community Perks
        </h2>

        <ul className=" list-none my-12 mx-0 p-0">
          <li className="flex flex-col items-center gap-8">
            <Image
              src={mealIcon}
              alt="A delicious meal"
              className="w-32 h-32 object-contain"
            />
            <p className="font-montserrat text-2xl font-bold m-0">
              Share & discover recipes
            </p>
          </li>
          <li className="flex flex-col items-center gap-8">
            <Image
              src={communityIcon}
              alt="A crowd of people, cooking"
              className="w-32 h-32 object-contain"
            />
            <p className="font-montserrat text-2xl font-bold m-0">
              Find new friends & like-minded people
            </p>
          </li>
          <li className="flex flex-col items-center gap-8">
            <Image
              src={eventsIcon}
              alt="A crowd of people at a cooking event"
              className="w-32 h-32 object-contain"
            />
            <p className="font-montserrat text-2xl font-bold m-0">
              Participate in exclusive events
            </p>
          </li>
        </ul>
      </main>
    </>
  )
}
