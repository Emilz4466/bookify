import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { MainLayout } from "@/components/Templates";
import { AppRoutes } from "@/pages";
import { ReactNode, Suspense } from "react";
import { CircularProgress, CssBaseline } from "@/components/Atoms";
import { ThemeContextProvider } from "@/theme/ThemeProvider";

const App: React.FC = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <MainLayout>
          <AppRoutes />
        </MainLayout>
      </BrowserRouter>
    </AppProvider>
  );
};

const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <ThemeContextProvider>
        <CssBaseline />
        {children}
      </ThemeContextProvider>
    </Suspense>
  );
};

export default App;
