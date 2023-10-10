import { ThemeProvider } from "styled-components";
import { RoutePages } from "./routes";
import GlobalSstyles from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <RoutePages />
      <GlobalSstyles />
    </ThemeProvider>
  );
}
