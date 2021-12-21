import Document, { Html, Head, Main, NextScript } from 'next/document'
import 'bootswatch/dist/cosmo/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../global.css'
import Head from "next/head"


class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
            <Head>
            <title>Mi Portfolio</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="Mi Portfolio - Ezequiel Ramirez" />
            <link rel="stylesheet" href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css'/>
            </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument