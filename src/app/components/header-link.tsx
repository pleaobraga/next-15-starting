import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

type Props = {
  href: string
  name: string
}

export default function HeaderLink({ href, name }: Props) {
  return (
    <Link
      className={twMerge(
        'no-underline font-bold py-2 px-4 rounded-lg',
        'hover:bg-clip-text hover:text-transparent hover:bg-linear-to-r hover:from-orange-400 hover:to-yellow-200 hover:[text-shadow:0_0_18px_rgba(248,190,42,0.8)]',
        'active:bg-clip-text active:text-transparent active:bg-linear-to-r active:from-orange-400 active:to-yellow-200 active:[text-shadow:0_0_18px_rgba(248,190,42,0.8)]'
      )}
      href={href}
    >
      {name}
    </Link>
  )
}
