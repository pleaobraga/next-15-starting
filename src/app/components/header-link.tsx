'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

type Props = {
  href: string
  name: string
}

export default function HeaderLink({ href, name }: Props) {
  const path = usePathname()

  return (
    <Link
      className={link({ isActive: path.includes(href) })}
      href={href}
    >
      {name}
    </Link>
  )
}

const link = tv({
  base: twMerge(
    'no-underline font-bold py-2 px-4 rounded-lg',
    'hover:bg-clip-text hover:text-transparent hover:[text-shadow:0_0_18px_rgba(248,190,42,0.8)]',
    'hover:bg-linear-to-r hover:from-orange-400 hover:to-yellow-200'
  ),
  variants: {
    isActive: {
      true: 'bg-clip-text text-transparent bg-linear-to-r from-orange-400 to-yellow-200 text-shadow:0_0_18px_rgba(248,190,42,0.8)',
    },
  },
})
