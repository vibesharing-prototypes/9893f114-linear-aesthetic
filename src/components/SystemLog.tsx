import { cn } from "@/lib/utils"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { useDemo } from "@/contexts/DemoContext"

interface LogEntry {
  time: string
  message: string
  level: "critical" | "alert" | "info"
}

const alertLogs: LogEntry[] = [
  { time: "09:17", message: "Agent: Notification queue prepared — 4 stakeholders identified", level: "info" },
  { time: "09:16", message: "ALERT: Vendor compliance gap — CrowdStrike SLA breach detected", level: "alert" },
  { time: "09:15", message: "Agent: Compliance impact assessment initiated (SOC 2, ISO 27001, NIST, PCI DSS)", level: "info" },
  { time: "09:14", message: "Agent: Cross-referencing 12 affected assets against policy framework", level: "info" },
  { time: "09:14", message: "CRITICAL: CVE-2026-1847 detected — CrowdStrike Falcon Sensor v7.x", level: "critical" },
  { time: "08:00", message: "Scheduled scan completed — 847 assets, 3 new findings", level: "info" },
]

const clearLogs: LogEntry[] = [
  { time: "09:00", message: "Scheduled scan completed — 847 assets, 0 critical findings", level: "info" },
  { time: "08:30", message: "Vendor SLA check — all 12 vendors compliant", level: "info" },
  { time: "08:00", message: "Risk register sync completed — no changes", level: "info" },
  { time: "07:30", message: "Compliance evidence auto-collection — 23 items gathered", level: "info" },
]

export function SystemLog() {
  const { hasAlerts } = useDemo()
  const logs = hasAlerts ? alertLogs : clearLogs

  return (
    <Card>
      <CardHeader>
        <CardTitle>System Log — Last 24 Hours</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-1">
          {logs.map((entry, i) => (
            <p
              key={i}
              className={cn(
                "font-mono text-xs text-muted-foreground",
                entry.level === "critical" && "text-destructive",
                entry.level === "alert" && "text-amber-500"
              )}
            >
              <span className="text-muted-foreground/60">[{entry.time}]</span>{" "}
              {entry.message}
            </p>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
