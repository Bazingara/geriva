import Image from "next/image"
import Link from "next/link"

import clsx from "clsx"
import { Table } from "flowbite-react"

import { Menu as MenuInterface } from "@/data/types"
import logo from "@/public/images/graphics/logo.png"

export interface MenuProps {
  menu: MenuInterface
  className?: string
}

export const Menu = ({ menu, className }: MenuProps) => {
  return (
    <div className={clsx("grid gap-8", className)}>
      <div className="mx-auto grid gap-4 text-center">
        <Link href="/">
          <Image
            alt="Gerivá Park Hotel"
            className="mx-auto -mt-4 mb-4"
            height={0}
            src={logo}
            width={240}
          />
        </Link>
        <div className="overflow-x-auto border shadow-md sm:rounded-lg">
          {menu.items.map(section => (
            <Table
              key={section.name}
              striped
              theme={{ root: { wrapper: "rounded-none" } }}
            >
              <caption className="bg-slate-700 px-6 py-4 text-left text-lg font-extrabold uppercase text-slate-300">
                {section.name}
              </caption>
              <Table.Head className="border-b bg-slate-100 text-slate-500">
                <Table.HeadCell>Item</Table.HeadCell>
                <Table.HeadCell className="text-right">Preço</Table.HeadCell>
              </Table.Head>
              <Table.Body>
                {section.items.map(item => (
                  <Table.Row
                    key={item.name}
                    className={`border-b font-semibold uppercase`}
                  >
                    <Table.Cell>
                      <div className="grid">
                        <span className="text-sm sm:text-base">
                          {item.name}
                        </span>
                        {item.description && (
                          <span className="text-xs font-medium text-slate-400 sm:text-sm">
                            {item.description}
                          </span>
                        )}
                      </div>
                    </Table.Cell>
                    <Table.Cell className="text-right text-base text-slate-900 sm:text-lg">
                      R${item.price.toFixed(2)}
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          ))}
        </div>
      </div>
    </div>
  )
}
