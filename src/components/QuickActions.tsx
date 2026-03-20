import {
  Zap,
  FileText,
  BarChart3,
  Search,
  TicketPlus,
  ShieldCheck,
  Send,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"

const actions = [
  {
    label: "Start response workflow",
    subtitle: "Triage incidents end to end",
    icon: Zap,
  },
  {
    label: "Draft security briefing",
    subtitle: "Board and executive summaries",
    icon: FileText,
  },
  {
    label: "Run exposure report",
    subtitle: "CVE trends and heat maps",
    icon: BarChart3,
  },
  {
    label: "Search intelligence",
    subtitle: "Policies, assets, and logs",
    icon: Search,
  },
  {
    label: "Open remediation ticket",
    subtitle: "Track patches and owners",
    icon: TicketPlus,
  },
  {
    label: "Review compliance scope",
    subtitle: "Controls and attestations",
    icon: ShieldCheck,
  },
] as const

export function QuickActions() {
  return (
    <Card className="gap-0 overflow-hidden p-4 shadow-sm">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="min-w-0 space-y-1">
          <h2 className="text-lg font-semibold tracking-tight">
            What do you need to do?
          </h2>
          <p className="max-w-lg text-sm text-muted-foreground">
            Ask questions or choose an action below. Work entirely within
            Diligent.
          </p>
        </div>
        <Badge
          variant="outline"
          className="shrink-0 gap-1.5 border-amber-500/55 bg-amber-500/10 py-0.5 text-amber-800 dark:border-amber-500/50 dark:bg-amber-500/15 dark:text-amber-300"
        >
          <span
            className="size-1.5 shrink-0 rounded-full bg-amber-400"
            aria-hidden
          />
          Demo
        </Badge>
      </div>

      <InputGroup className="mb-4 h-11 rounded-xl">
        <InputGroupInput
          placeholder="Ask a question or describe what you need..."
          className="h-11 text-sm"
        />
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            type="button"
            variant="default"
            size="icon-sm"
            className="rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
            aria-label="Send"
          >
            <Send className="size-4" />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>

      <p className="mb-2 text-[0.65rem] font-semibold tracking-[0.14em] text-muted-foreground">
        Or start with
      </p>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
        {actions.map(({ label, subtitle, icon: Icon }) => (
          <button
            key={label}
            type="button"
            className="flex min-h-[7.5rem] flex-col items-center gap-1.5 rounded-xl border border-border bg-muted/30 px-2 py-3 text-center transition-colors hover:bg-muted/60"
          >
            <Icon className="size-4 shrink-0 text-muted-foreground" />
            <span className="text-xs font-semibold leading-tight">{label}</span>
            <span className="line-clamp-2 text-[0.65rem] leading-snug text-muted-foreground">
              {subtitle}
            </span>
          </button>
        ))}
      </div>
    </Card>
  )
}
