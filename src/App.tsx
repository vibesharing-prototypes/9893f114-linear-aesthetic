import { BrowserRouter, Routes, Route } from "react-router"
import { TooltipProvider } from "@/components/ui/tooltip"
import { DemoProvider, useDemo } from "@/contexts/DemoContext"
import { DemoControlsFab } from "@/components/DemoControlsFab"
import { GlobalHeader } from "@/components/GlobalHeader"
import { CommandCenterPage } from "@/pages/CommandCenterPage"
import { SettingsPage } from "@/pages/SettingsPage"
import { IncidentInvestigationPage } from "@/pages/IncidentInvestigationPage"

/** Fills viewport under AppShell; main scrolls so fixed FAB does not trap overflow. */
function CenteredLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
      <GlobalHeader />
      <main className="mx-auto min-h-0 w-full max-w-[980px] flex-1 overflow-y-auto overscroll-contain px-4">
        {children}
      </main>
      <DemoControlsFab />
    </div>
  )
}

function AppShell() {
  const { themeMode } = useDemo()

  return (
    <div className={themeMode === "dark" ? "dark" : ""}>
      <div className="flex h-dvh min-h-0 flex-col overflow-hidden bg-background text-foreground">
        <Routes>
          <Route
            path="/"
            element={
              <CenteredLayout>
                <CommandCenterPage />
              </CenteredLayout>
            }
          />
          <Route
            path="/settings"
            element={
              <CenteredLayout>
                <SettingsPage />
              </CenteredLayout>
            }
          />
          <Route
            path="/investigate/:incidentId"
            element={
              <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
                <IncidentInvestigationPage />
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <DemoProvider>
        <TooltipProvider>
          <AppShell />
        </TooltipProvider>
      </DemoProvider>
    </BrowserRouter>
  )
}
