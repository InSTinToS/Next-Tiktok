import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyle from '../frontend/styles'
import theme from '../frontend/styles/theme'
import favicon from '../../public/favicon.ico'

import { ThemeProvider } from 'styled-components'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <link rel='icon' href={favicon} />
    </Head>

    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Component {...pageProps} />
    </ThemeProvider>
  </>
)

export default MyApp
