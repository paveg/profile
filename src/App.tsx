import { ThemeProvider } from "./components/theme-provider"
import { Button } from "./components/ui/button"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background">
        <div className="container mx-auto py-8">
          <h1 className="text-4xl font-bold mb-8">Ryota's Portfolio</h1>
          <div className="space-y-4">
            <section className="space-y-2">
              <h2 className="text-2xl font-semibold">Welcome</h2>
              <p className="text-muted-foreground">
                Software Engineer based in Japan.
              </p>
              <Button>Contact Me</Button>
            </section>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
