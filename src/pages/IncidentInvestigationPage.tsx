import { useCallback, useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, RotateCcw } from "lucide-react"

import { WorkflowSidebar } from "@/components/investigation/WorkflowSidebar"
import { TriageReportPanel } from "@/components/investigation/TriageReportPanel"
import { NotificationPanel } from "@/components/investigation/NotificationPanel"
import { RemediationPanel } from "@/components/investigation/RemediationPanel"
import { ThirdPartyPanel } from "@/components/investigation/ThirdPartyPanel"
import { ResolutionPanel } from "@/components/investigation/ResolutionPanel"
import { BoardBriefingPanel } from "@/components/investigation/BoardBriefingPanel"
import { ChatPanel } from "@/components/investigation/ChatPanel"

const STORAGE_KEY = "incident-investigation-state"

interface PersistedState {
  currentStep: number
  completedSteps: number[]
}

function loadState(): PersistedState {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw)
  } catch {
    // ignore parse errors
  }
  return { currentStep: 1, completedSteps: [] }
}

function saveState(state: PersistedState) {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

export function IncidentInvestigationPage() {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(() => loadState().currentStep)
  const [completedSteps, setCompletedSteps] = useState<number[]>(
    () => loadState().completedSteps
  )

  useEffect(() => {
    saveState({ currentStep, completedSteps })
  }, [currentStep, completedSteps])

  const advanceStep = useCallback(
    (fromStep: number) => {
      setCompletedSteps((prev) =>
        prev.includes(fromStep) ? prev : [...prev, fromStep]
      )
      if (fromStep < 6) {
        setCurrentStep(fromStep + 1)
      }
    },
    []
  )

  const handleReset = useCallback(() => {
    setCurrentStep(1)
    setCompletedSteps([])
    sessionStorage.removeItem(STORAGE_KEY)
  }, [])

  const handleStepClick = useCallback(
    (step: number) => {
      if (step <= currentStep || completedSteps.includes(step)) {
        setCurrentStep(step)
      }
    },
    [currentStep, completedSteps]
  )

  function renderPanel() {
    switch (currentStep) {
      case 1:
        return (
          <TriageReportPanel
            completed={completedSteps.includes(1)}
            onProceed={() => advanceStep(1)}
          />
        )
      case 2:
        return <NotificationPanel onProceed={() => advanceStep(2)} />
      case 3:
        return <RemediationPanel onProceed={() => advanceStep(3)} />
      case 4:
        return <ThirdPartyPanel onProceed={() => advanceStep(4)} />
      case 5:
        return <ResolutionPanel onProceed={() => advanceStep(5)} />
      case 6:
        return <BoardBriefingPanel onComplete={() => advanceStep(6)} />
      default:
        return null
    }
  }

  return (
    <div className="flex h-full min-h-0 flex-1 flex-col bg-background">
      {/* Top bar */}
      <header className="flex h-12 shrink-0 items-center gap-3 border-b px-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate("/")}
          className="gap-1.5"
        >
          <ArrowLeft className="size-3.5" />
          Command Center
        </Button>
        <Separator orientation="vertical" className="!h-5" />
        <h1 className="text-sm font-semibold tracking-tight">CVE-2026-1847</h1>
        <Badge variant="destructive">Critical</Badge>
        <span className="ml-auto" />
        <Button
          variant="ghost"
          size="sm"
          onClick={handleReset}
          className="gap-1.5 text-muted-foreground"
        >
          <RotateCcw className="size-3" />
          Reset Demo
        </Button>
      </header>

      {/* Main layout */}
      <div className="flex min-h-0 flex-1 overflow-hidden">
        <WorkflowSidebar
          currentStep={currentStep}
          completedSteps={completedSteps}
          onStepClick={handleStepClick}
        />

        <main className="min-h-0 flex-1 overflow-y-auto p-6">
          <div className="mx-auto max-w-3xl">{renderPanel()}</div>
        </main>

        <ChatPanel />
      </div>
    </div>
  )
}
