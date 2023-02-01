import { store } from "@/redux/store";
import { GlobalStyle } from "@/styles/global";
import { defaultTheme } from "@/styles/themes/default";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

export function renderWithProvider(children: React.ReactElement) {
  return {
    ...render(
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />

        <Provider store={store}>
          {children}  
        </Provider>
      </ThemeProvider>
    ),
    history,
  };
}
