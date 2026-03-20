import { Link } from "react-router"
import { AlertTriangle, CheckCircle, Activity } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useDemo } from "@/contexts/DemoContext"

function MonitoringStatusBar() {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2">
      <div className="relative flex size-2">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
      </div>
      <span className="text-xs font-medium">Security Monitoring Agent</span>
      <span className="text-xs text-muted-foreground">
        Active · Monitoring 847 assets across 12 vendors
      </span>
    </div>
  )
}

export function HeroBanner() {
  const { hasAlerts } = useDemo()

  if (!hasAlerts) {
    return (
      <div className="space-y-3">
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-8 text-center">
            <CheckCircle className="mb-3 size-10 text-muted-foreground/50" />
            <h2 className="text-lg font-semibold tracking-tight">All Clear</h2>
            <p className="mt-1 max-w-md text-sm text-muted-foreground">
              No critical security incidents detected. All systems operating
              within normal parameters.
            </p>
          </CardContent>
        </Card>
        <MonitoringStatusBar />
      </div>
    )
  }

  return (
    <div className="space-y-3">
      <div className="grid gap-3 md:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <AlertTriangle className="size-4 text-destructive" />
                <CardTitle className="text-sm">
                  Critical Vulnerability Detected
                </CardTitle>
              </div>
              <Badge variant="destructive">CRITICAL</Badge>
            </div>
            <CardDescription>
              CVE-2026-1847 — CrowdStrike Falcon Sensor
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex gap-4 text-xs text-muted-foreground">
              <span>CVSS 9.8</span>
              <span>12 assets affected</span>
              <span>3 systems</span>
            </div>
            <Link to="/investigate/CVE-2026-1847">
              <Button size="sm">Investigate</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <Activity className="size-4 text-amber-500" />
                <CardTitle className="text-sm">
                  Vendor Compliance Gap
                </CardTitle>
              </div>
              <Badge variant="outline">HIGH</Badge>
            </div>
            <CardDescription>CrowdStrike SLA breach</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">
              3 overdue risk assessments
            </p>
          </CardContent>
        </Card>
      </div>
      <MonitoringStatusBar />
    </div>
  )
}
