import Head from 'next/head'
import db from '../../../../db.json'

export default function Cabecalho() {
  return (
    <Head>
      <title>{db.title}</title>

      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:locale" content="pt_BR" />

      <meta property="og:description" content={db.description} />
      <meta property="og:image" content={db.imageThumb} />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="og:image:width" content="500" />
      <meta property="og:image:height" content="500" />
      <meta property="og:type" content="website" />
      
    </Head>
  )
}