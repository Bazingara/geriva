import { NextPage } from "next"
import { NextSeo } from "next-seo"

import { Accomodation } from "@/components/features/Accomodation"
import { accomodations } from "@/data/accomodations"

const metadata = {
  canonical: "https://geriva.com.br/acomodacoes",
  title: "Acomodações | Gerivá Park Hotel",
}

const PageAcomodacoes: NextPage = () => {
  return (
    <>
      <NextSeo {...metadata} />
      <div className="mx-auto grid items-center">
        {accomodations.map((accomodation, index) => (
          <>
            <Accomodation
              key={accomodation.name}
              {...accomodation}
              className={index % 2 === 0 ? "bg-slate-50" : "bg-white"}
            />
            {index < accomodations.length - 1 && (
              <hr className="hidden sm:flex" />
            )}
          </>
        ))}
      </div>
    </>
  )
}

export default PageAcomodacoes
