import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { MainLayout } from "@/components/Templates";
import { AppRoutes } from "@/pages";
import { ReactNode, Suspense } from "react";
import { CircularProgress, CssBaseline } from "@/components/Atoms";
import { ThemeContextProvider } from "@/theme/ThemeProvider";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";

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
      <QueryClientProvider client={queryClient}>
        <ThemeContextProvider>
          <CssBaseline />
          {children}
        </ThemeContextProvider>
      </QueryClientProvider>
    </Suspense>
  );
};

export default App;
