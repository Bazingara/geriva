const metadata = {
  title: "Gerivá Park Hotel",
  description:
    "Localizado no coração do Brasil na Divisa de Minas Gerais com Goiás, a Pousada Gerivá oferece o que há de melhor no turismo regional.",
  url: "https://geriva.com.br",
}

export default {
  canonical: metadata.url,
  description: metadata.description,
  openGraph: {
    description: metadata.description,
    images: [
      {
        height: 650,
        url: `${metadata.url}/images/home/tile-01.png`,
        width: 650,
      },
    ],
    locale: "pt_BR",
    siteName: metadata.title,
    title: metadata.title,
    type: "website",
    url: metadata.url,
  },
  title: metadata.title,
}
