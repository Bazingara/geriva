import { Head, Html, Main, NextScript } from "next/document"
import Script from "next/script"

const Document = () => {
  return (
    <Html lang="pt-BR">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
        <meta
          content="Localizado no coração do Brasil na Divisa de Minas Gerais com Goiás"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QSNMPQ66K0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-QSNMPQ66K0');
        `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
