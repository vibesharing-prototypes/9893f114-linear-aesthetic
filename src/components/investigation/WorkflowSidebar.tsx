import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

const STEPS = [
  { number: 1, name: "Automated Triage" },
  { number: 2, name: "Notify Stakeholders" },
  { number: 3, name: "Remediation" },
  { number: 4, name: "Third-Party Review" },
  { number: 5, name: "Resolution" },
  { number: 6, name: "Board Briefing" },
]

interface WorkflowSidebarProps {
  currentStep: number
  completedSteps: number[]
  onStepClick: (step: number) => void
}

export function WorkflowSidebar({
  currentStep,
  completedSteps,
  onStepClick,
}: WorkflowSidebarProps) {
  return (
    <aside className="flex h-full min-h-0 w-64 shrink-0 flex-col overflow-hidden border-r bg-background px-4 py-6">
      <h2 className="mb-6 text-sm font-semibold text-foreground">
        Incident Workflow
      </h2>
      <nav className="flex flex-col gap-1">
        {STEPS.map((step) => {
          const isCompleted = completedSteps.includes(step.number)
          const isActive = currentStep === step.number

          return (
            <button
              key={step.number}
              onClick={() => onStepClick(step.number)}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors",
                isActive && "bg-accent text-accent-foreground",
                !isActive && !isCompleted && "text-muted-foreground hover:bg-muted/50",
                !isActive && isCompleted && "text-foreground hover:bg-muted/50"
              )}
            >
              <span
                className={cn(
                  "flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium transition-all",
                  isCompleted && "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
                  isActive && !isCompleted && "ring-2 ring-blue-500 bg-blue-500/10 text-blue-600 dark:text-blue-400",
                  !isActive && !isCompleted && "bg-muted text-muted-foreground"
                )}
              >
                {isCompleted ? (
                  <Check className="size-3.5" />
                ) : (
                  step.number
                )}
              </span>
              <span className="truncate">{step.name}</span>
              {isActive && !isCompleted && (
                <span className="ml-auto size-1.5 rounded-full bg-blue-500 animate-pulse" />
              )}
            </button>
          )
        })}
      </nav>
    </aside>
  )
}
