import Link from 'next/link'

import logoImg from '@/assets/logo.png'
import Image from 'next/image'
import HeaderLink from './header-link'
import MainHeaderBackground from './main-header-background'

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className="flex justify-between items-center py-15 px-4 sm:px-[10%]">
        <Link
          className="flex items-center justify-center gap-8  no-underline font-bold font-montserrat text-2xl tracking-widest uppercase"
          href="/"
        >
          <Image
            src={logoImg}
            alt="A plate with food on it"
            className="w-20 h-auto object-contain drop-shadow-[0_0_0.75rem_rgba(0,0,0,0.5)]"
            priority
          />
          NextLevel Food
        </Link>

        <nav>
          <ul className="list-none m-0 p-0 flex gap-6 text-xl font-montserrat">
            <li>
              <HeaderLink
                href="/meals"
                name="Browse Meals"
              />
            </li>
            <li>
              <HeaderLink
                href="/community"
                name="Foodies Community"
              />
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
