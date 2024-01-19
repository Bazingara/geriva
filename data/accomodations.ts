import Apartamento01 from "@/public/images/acomodacoes/apartamentos/01.jpg"
import Apartamento02 from "@/public/images/acomodacoes/apartamentos/02.jpg"
import Apartamento03 from "@/public/images/acomodacoes/apartamentos/03.jpg"
import Apartamento04 from "@/public/images/acomodacoes/apartamentos/04.jpg"
import Apartamento05 from "@/public/images/acomodacoes/apartamentos/05.jpg"
import Apartamento06 from "@/public/images/acomodacoes/apartamentos/06.jpg"
import Apartamento07 from "@/public/images/acomodacoes/apartamentos/07.jpg"
import Apartamento08 from "@/public/images/acomodacoes/apartamentos/08.jpg"
import Chale01 from "@/public/images/acomodacoes/chales/01.jpg"
import Chale02 from "@/public/images/acomodacoes/chales/02.jpg"
import Chale03 from "@/public/images/acomodacoes/chales/03.jpg"
import Chale04 from "@/public/images/acomodacoes/chales/04.jpg"
import Chale05 from "@/public/images/acomodacoes/chales/05.jpg"

import type { Accomodation } from "./types"

export const accomodations: Accomodation[] = [
  {
    name: "Apartamento",
    description:
      "Suíte com ar-condicionado, TV digital, Wi-Fi, frigobar e café da manhã incluso.",
    images: [
      {
        alt: "Apartamentos",
        src: Apartamento01,
      },
      {
        alt: "Entrada",
        src: Apartamento02,
      },
      {
        alt: "Camas",
        src: Apartamento03,
      },
      {
        alt: "Cama casal",
        src: Apartamento04,
      },
      {
        alt: "Ar-condicionado / TV",
        src: Apartamento05,
      },
      {
        alt: "Banheiro 01/02",
        src: Apartamento06,
      },
      {
        alt: "Banheiro 02/02",
        src: Apartamento07,
      },
      {
        alt: "Vista interna",
        src: Apartamento08,
      },
    ],
    pricing: [
      { name: "Individual", price: 120 },
      { name: "2 pessoas", price: 200 },
      { name: "3 pessoas", price: 270 },
      { name: "4 pessoas", price: 320 },
    ],
  },
  {
    name: "Chalé",
    description:
      "Suíte com ar-condicionado, TV digital, Wi-Fi, frigobar e café da manhã incluso.",
    images: [
      {
        alt: "Vista externa 01/02",
        src: Chale01,
      },
      {
        alt: "Vista externa 02/02",
        src: Chale02,
      },
      {
        alt: "Vista interna 01/03",
        src: Chale03,
      },
      {
        alt: "Vista interna 02/03",
        src: Chale04,
      },
      {
        alt: "Vista interna 03/03",
        src: Chale05,
      },
    ],
    pricing: [
      { name: "Individual", price: 120 },
      { name: "2 pessoas", price: 200 },
      { name: "3 pessoas", price: 270 },
      { name: "4 pessoas", price: 320 },
    ],
  },
]
