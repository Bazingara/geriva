import { ImageProps } from "next/image"

export interface PricingItem {
  name: string
  description?: string
  price: number
}

export interface MenuSection {
  name: string
  items: PricingItem[]
}

export interface Accomodation {
  name: string
  description: string
  images: ImageProps[]
  pricing: PricingItem[]
}

export interface Menu {
  name: string
  items: MenuSection[]
}
