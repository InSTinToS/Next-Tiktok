import Head from 'next/head'

import Style from './style'

const Home = () => {
  return (
    <Style>
      <Head>
        <title>Home page</title>
      </Head>

      <main>
        <h1>Hello World</h1>
      </main>
    </Style>
  )
}

export default Home
