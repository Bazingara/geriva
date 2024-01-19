import { NextPage } from "next"
import { NextSeo } from "next-seo"

import { Menu } from "@/components/features/Menu"
import { menu } from "@/data/bar"

const metadata = {
  canonical: "https://geriva.com.br/bar",
  title: "Bar | Gerivá Park Hotel",
}

const PageBar: NextPage = () => {
  return (
    <>
      <NextSeo {...metadata} />
      <div className="my-8 sm:my-16">
        <Menu menu={menu} />
      </div>
    </>
  )
}

export default PageBar
