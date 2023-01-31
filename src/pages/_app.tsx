import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { store } from "@/redux/store";
import { GlobalStyle } from "@/styles/global";
import { defaultTheme } from "@/styles/themes/default";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </ThemeProvider>
  );
}
