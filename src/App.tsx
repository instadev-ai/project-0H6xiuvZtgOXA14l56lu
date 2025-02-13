import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/components/theme-provider";
import LandingPage from "@/components/landing-page";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <div dir="rtl" className="min-h-screen bg-background">
          <LandingPage />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;