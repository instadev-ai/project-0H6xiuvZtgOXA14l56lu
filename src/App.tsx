import { ThemeProvider } from "@/components/theme-provider"
import LandingPage from "./components/landing-page"

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <LandingPage />
    </ThemeProvider>
  )
}

export default App