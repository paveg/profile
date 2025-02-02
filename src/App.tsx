import { ThemeProvider } from "./components/theme-provider"
import { Button } from "./components/ui/button"
import { useTranslation } from "react-i18next"
import { LanguageSwitcher } from "./components/language-switcher"

function App() {
  const { t } = useTranslation()
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background">
        <div className="container mx-auto py-8">
          <h1 className="text-4xl font-bold mb-8">{t('title')}</h1>
          <div className="space-y-4">
            <section className="space-y-2">
              <h2 className="text-2xl font-semibold">{t('description')}</h2>
              <p className="text-muted-foreground">
                Software Engineer based in Japan.
              </p>
              <Button>Contact Me</Button>
              <LanguageSwitcher />
            </section>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
