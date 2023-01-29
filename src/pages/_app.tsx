import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { GlobalStyle } from '@/styles/global';
import { defaultTheme } from '@/styles/themes/default';
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}
