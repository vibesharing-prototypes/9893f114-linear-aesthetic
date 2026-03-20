import { Shield, BookOpen, ClipboardCheck, Users } from "lucide-react"
import { cn } from "@/lib/utils"

const activities = [
  {
    icon: Shield,
    title: "Vulnerability Management",
    description: "12 new vulnerabilities detected in Q1 scan",
    timestamp: "2 hours ago",
  },
  {
    icon: BookOpen,
    title: "Risk Register",
    description: "Risk appetite statement updated for FY2026",
    timestamp: "5 hours ago",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance Monitoring",
    description: "SOC 2 Type II audit evidence collection at 87%",
    timestamp: "1 day ago",
  },
  {
    icon: Users,
    title: "Vendor Risk",
    description: "3 vendors flagged for SLA non-compliance",
    timestamp: "2 days ago",
  },
] as const

const ctaCardClass = cn(
  "flex w-full gap-3 rounded-xl bg-card text-left text-sm text-card-foreground ring-1 ring-foreground/10",
  "transition-all duration-200 ease-out",
  "hover:-translate-y-0.5 hover:bg-muted/30 hover:shadow-md hover:ring-foreground/25",
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
  "active:translate-y-0 active:shadow-sm",
)

export function RecentActivity() {
  return (
    <div className="space-y-2">
      <h2 className="text-sm font-semibold tracking-tight">Recent Activity</h2>
      <div className="grid gap-3 md:grid-cols-2">
        {activities.map((activity) => (
          <button
            key={activity.title}
            type="button"
            className={cn(ctaCardClass, "px-3 py-3")}
            aria-label={`${activity.title}. ${activity.description}. ${activity.timestamp}.`}
          >
            <activity.icon
              className="mt-0.5 size-4 shrink-0 text-muted-foreground"
              aria-hidden
            />
            <div className="min-w-0 space-y-0.5">
              <p className="text-sm font-medium">{activity.title}</p>
              <p className="text-sm text-muted-foreground">{activity.description}</p>
              <p className="text-xs text-muted-foreground/80">{activity.timestamp}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
