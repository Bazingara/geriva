import Link from "next/link"
import { useState } from "react"

import { Dialog } from "@headlessui/react"
import clsx from "clsx"
import { FaWhatsapp } from "react-icons/fa"
import { HiBars3, HiOutlineXMark } from "react-icons/hi2"

export interface NavigationItem {
  name: string
  href: string
}

export type Navigation = NavigationItem[]

const navigation: Navigation = [
  { name: "Acomodações", href: "/acomodacoes" },
  { name: "Bar", href: "bar" },
  { name: "Sobre", href: "/sobre" },
]

export interface NavigationProps {
  className?: string
}

export const Navigation = ({ className }: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header
      className={clsx(
        "sticky inset-x-0 top-0 z-50 border-b bg-slate-100 shadow-sm",
        className,
      )}
    >
      <div className="mx-auto max-w-5xl">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-4 xl:px-0"
        >
          <div className="flex lg:flex-1">
            <Link className="font-semibold" href="/">
              🌴 Gerivá Park Hotel
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              type="button"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Abrir menu</span>
              <HiBars3 aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map(item => (
              <Link
                key={item.name}
                className="font-semibold leading-6 text-gray-900"
                href={item.href}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              className="flex items-center gap-2 font-semibold leading-6 text-gray-900"
              href="https://wa.me/553432518332"
            >
              <FaWhatsapp className="h-5 w-5" />
              <span>(34) 3251-8332</span>
            </Link>
          </div>
        </nav>
      </div>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-slate-100 p-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="mb-4 flex items-center justify-between">
            <Link className="font-semibold" href="/">
              🌴 Gerivá Park Hotel
            </Link>
            <button
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              type="button"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Fechar menu</span>
              <HiOutlineXMark aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="flow-root border-t py-4">
            <div className="-my-4 divide-y divide-gray-500/10">
              <div className="space-y-2 py-4">
                {navigation.map(item => (
                  <a
                    key={item.name}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    href={item.href}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-4">
                <Link
                  className="-mx-3 flex items-center gap-2 rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  href="https://wa.me/553432518332"
                >
                  <FaWhatsapp className="h-5 w-5" />
                  <span>(34) 3251-8332</span>
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
