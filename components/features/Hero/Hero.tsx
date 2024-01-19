import Image, { ImageProps } from "next/image"

import clsx from "clsx"

import { Gallery } from "@/components/features/Gallery"
import Img01 from "@/public/images/aereo/01.jpg"
import Img02 from "@/public/images/aereo/02.jpg"
import Img03 from "@/public/images/aereo/03.jpg"
import logo from "@/public/images/graphics/logo.png"

const images: ImageProps[] = [
  { alt: "Vista aérea do Gerivá Park Hotel", src: Img01 },
  { alt: "Vista aérea do Pier de Chaveslândia", src: Img02 },
  { alt: "Vista aérea do Rio Paranaíba", src: Img03 },
]

export interface HeroProps {
  className?: string
}

export const Hero = ({ className }: HeroProps) => {
  return (
    <div
      className={clsx("mx-auto grid max-w-5xl gap-8 py-4 lg:py-16", className)}
    >
      <div className="mx-auto grid max-w-lg items-center gap-4 px-6 text-center sm:px-0">
        <Image
          alt="Gerivá Park Hotel"
          className="mx-auto w-64 sm:w-80"
          src={logo}
        />
        <p className="text-slate-500 sm:text-xl">
          Localizado no coração do Brasil na Divisa de Minas Gerais com Goiás, a
          Pousada Gerivá oferece o que há de melhor no turismo regional.
        </p>
      </div>
      <Gallery className="overflow-hidden md:rounded-lg" images={images} />
    </div>
  )
}
