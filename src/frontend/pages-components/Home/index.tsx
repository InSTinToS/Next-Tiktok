import Head from 'next/head'

import Style from './style'

import Feed from 'frontend/components/Feed'
import Layout from 'frontend/components/Layout'

const Home = ({ posts = [] }) => {
  return (
    <Style>
      <Head>
        <title>TikTok</title>
      </Head>

      <Layout>
        <Feed posts={posts} />
      </Layout>
    </Style>
  )
}

export default Home
