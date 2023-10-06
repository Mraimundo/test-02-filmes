import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { RoutePages } from "./routes";
import { RepositoryProvider } from "./hooks/repository";
import GlobalSstyles from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <RepositoryProvider>
        <BrowserRouter>
          <RoutePages />
        </BrowserRouter>
        <GlobalSstyles />
      </RepositoryProvider>
    </ThemeProvider>
  );
}
