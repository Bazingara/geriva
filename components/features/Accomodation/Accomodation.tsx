import { Table } from "flowbite-react"

import { Gallery } from "@/components/features/Gallery"
import { Accomodation as AccomodationType } from "@/data/types"

export interface AccomodationProps extends AccomodationType {
  className?: string
}

export const Accomodation = ({
  className,
  description,
  images,
  name,
  pricing,
}: AccomodationProps) => {
  return (
    <div className={className}>
      <div className="mx-auto my-8 grid max-w-3xl place-items-center gap-8 md:my-16">
        <div className="text-center sm:px-0">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {name}
          </h1>
          <p className="mt-4 max-w-md text-slate-500">{description}</p>
        </div>
        <div className="overflow-hidden border sm:rounded-lg">
          <Gallery images={images} slideClassName="sm:!max-h-[36rem]" />
          <Table striped theme={{ root: { wrapper: "rounded-none" } }}>
            <Table.Head className="hidden border-b bg-slate-700 text-slate-300">
              <Table.HeadCell>Tipo</Table.HeadCell>
              <Table.HeadCell className="text-right">Preço</Table.HeadCell>
            </Table.Head>
            <Table.Body>
              {pricing.map(item => (
                <Table.Row
                  key={item.name}
                  className={`border-b font-semibold uppercase`}
                >
                  <Table.Cell>
                    <div className="grid">
                      <span className="text-sm sm:text-base">{item.name}</span>
                      {item.description && (
                        <span className="text-xs font-medium text-slate-400 sm:text-sm">
                          {item.description}
                        </span>
                      )}
                    </div>
                  </Table.Cell>
                  <Table.Cell className="text-right text-sm text-slate-900 sm:text-lg">
                    R${item.price.toFixed(2)}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
        <p className="max-w-md italic text-slate-400">
          Os valores estão sujeitos a alterações
        </p>
      </div>
    </div>
  )
}
