import Head from 'next/head'

function Title() {
  return (
    <Head>
      <title>Tibians Quiz</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:image" content={"../../images/Thumbnail/TibiaDragonLogo_HighRes.png"} />
    </Head>
  )
}

export default Title