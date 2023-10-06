import { BrowserRouter } from "react-router-dom";
import { RoutePages } from "./routes";
import { RepositoryProvider } from "./hooks/repository";
import GlobalSstyles from "./styles/global";

export function App() {
  return (
    <RepositoryProvider>
      <BrowserRouter>
        <RoutePages />
      </BrowserRouter>
      <GlobalSstyles />
    </RepositoryProvider>
  );
}
