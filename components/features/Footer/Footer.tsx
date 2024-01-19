import clsx from "clsx"
import { Footer as FlowbiteFooter } from "flowbite-react"
import {
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa"

export interface FooterProps {
  className?: string
  hasSeparator?: boolean
}

export const Footer = ({ className, hasSeparator = false }: FooterProps) => {
  return (
    <FlowbiteFooter
      className={clsx(
        "!bg-transparent p-6 !shadow-transparent sm:border-t",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-5xl">
        {hasSeparator && <FlowbiteFooter.Divider />}
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <FlowbiteFooter.Copyright
            by="Gerivá Park Hotel"
            className="text-slate-500"
            href="/"
            year={new Date().getFullYear()}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FlowbiteFooter.Icon
              className="hover:text-blue-900"
              href="https://www.facebook.com/pousadageriva"
              icon={FaFacebook}
              target="_blank"
            />
            <FlowbiteFooter.Icon
              className="hover:text-pink-500"
              href="https://www.instagram.com/pousada_geriva"
              icon={FaInstagram}
              target="_blank"
            />
            <FlowbiteFooter.Icon
              className="hover:text-red-500"
              href="https://goo.gl/maps/rVSxjH3SSamEzxhi6"
              icon={FaMapMarkerAlt}
              target="_blank"
            />
            <FlowbiteFooter.Icon
              className="hover:text-green-500"
              href="https://wa.me/553432518332"
              icon={FaWhatsapp}
            />
          </div>
        </div>
      </div>
    </FlowbiteFooter>
  )
}
