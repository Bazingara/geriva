import { NextPage } from "next"
import { NextSeo } from "next-seo"
import Image from "next/image"

import { Map } from "@/components/features/Map"
import Bar02 from "@/public/images/bar/02.jpg"
import Local01 from "@/public/images/local/01.jpg"
import Local02 from "@/public/images/local/02.jpg"
import Local05 from "@/public/images/local/05.jpg"

const metadata = {
  canonical: "https://geriva.com.br/sobre",
  title: "Sobre | Gerivá Park Hotel",
}

const PageSobre: NextPage = () => {
  const imgClassName = "!relative rounded-lg"

  return (
    <>
      <NextSeo {...metadata} />
      <div className="mx-auto grid max-w-5xl items-center justify-items-center gap-8 px-4 py-8 sm:gap-16 sm:px-0 sm:py-16">
        <div className="grid w-full place-items-center gap-6">
          <h1>História</h1>
          <Image
            fill
            alt="Entrada do Gerivá Park Hotel"
            className={imgClassName}
            src={Local01}
          />
          <p>
            <a
              href="https://pt.wikipedia.org/wiki/Jeriv%C3%A1"
              rel="noreferrer"
              target="_blank"
            >
              Jerivá (<em>Syagrus romanzoffiana</em>)
            </a>{" "}
            é uma palmeira solitária de até 30m, nativa do Paraguai, Uruguai,
            Argentina e Brasil (BA até MG, RS, GO).
          </p>
          <p>
            Em meados da decáda de 80, o Gerivá foi criado como uma clínica de
            fisioterapia pelo Dr. João Querubim, onde eram realizadas atividades
            voltadas principalmente para idosos, pacientes com lesões (em
            recuperação), atletas profissionais ou amadores e pessoas com
            problemas crônicos de postura. Entre os principais tratamentos
            fisioterápicos era utilizada a hidroterapia, motivo pelo qual forma
            construídas as piscinas com o sistema de hidromassagem.
          </p>
          <Image
            fill
            alt="Piscina do Gerivá Park Hotel"
            className={imgClassName}
            src={Local02}
          />
          <p>
            Hoje nós restauramos os chalés onde ficavam os pacientes do Dr.
            João; construímos apartamentos comfort para os novos hóspedes e
            temos o objetivo de levar aos nossos clientes a máxima experiência
            de conforto, com TVs led, ar-condicionado split, frigobar, Wi-Fi, e
            estacionamento, bem no meio do cerrado brasileiro, às margens do Rio
            Paranaíba.
          </p>
          <p>
            Venha conhecer esse cantinho de minas, paraíso natural, com uma
            paisagem de tirar o fôlego. Estamos aqui para recebê-los com todo
            carinho e hospitalidade já conhecidos do povo mineiro!
          </p>
        </div>
        <div className="grid w-full place-items-center gap-6">
          <h1>Serviços</h1>
          <p>
            Estamos localizados na divisa de MG-G0, a 200m da ponte que divide
            os estados e temos uma vasta experiência em atendimento empresarial
            para empreiteiras que estão realizando as obras ferroviárias e
            rodoviárias na proximidade.
          </p>
          <p>
            Temos um sistema de segurança com câmeras e portaria 24 horas.
            Disponibilizamos para os hóspedes o café da manhã, serviços de
            refeição e lavanderia. Possuímos um refeitório com a capacidade de
            até 60 pessoas e um auditório para reuniões com a mesma capacidade.
          </p>
          <Image
            fill
            alt="Salão de jogos do Gerivá Park Hotel"
            className={imgClassName}
            src={Local05}
          />
          <p>
            Possuímos um salão de jogos com TV e mesa de bilhar a disposição dos
            nosso hóspedes. Temos ainda um barzinho na beira do rio, onde
            servimos generosas porções de peixes pescados pelos nativos da
            região, dentre outras delícias disponíveis no nosso cardápio.
          </p>
          <Image
            fill
            alt="Vista do Barzinho Gerivá"
            className={imgClassName}
            src={Bar02}
          />
        </div>
      </div>
      <Map className="border-t" />
    </>
  )
}

export default PageSobre
