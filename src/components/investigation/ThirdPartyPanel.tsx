import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock,
  ShieldCheck,
} from "lucide-react"

const COMPENSATING_CONTROLS = [
  "Network segmentation applied to affected endpoints",
  "Enhanced monitoring via secondary EDR tool",
  "Manual threat hunting initiated",
]

interface ThirdPartyPanelProps {
  onProceed: () => void
}

export function ThirdPartyPanel({ onProceed }: ThirdPartyPanelProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Building2 className="size-5 text-muted-foreground" />
        <h2 className="text-lg font-semibold tracking-tight">
          Third-Party Vendor Review
        </h2>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>CrowdStrike</CardTitle>
            <Badge variant="secondary">Medium Risk</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-start gap-3 rounded-lg border border-destructive/20 bg-destructive/5 px-3 py-2.5">
              <Clock className="mt-0.5 size-4 text-destructive" />
              <div>
                <p className="text-sm font-medium">SLA Status — Breach</p>
                <p className="text-xs text-muted-foreground">
                  Patch delivery exceeded 4-hour SLA by 2 hours
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border px-3 py-2.5">
              <ShieldCheck className="mt-0.5 size-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Historical Performance</p>
                <p className="text-xs text-muted-foreground">
                  99.2% uptime, 3 incidents in 12 months
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border px-3 py-2.5">
              <Clock className="mt-0.5 size-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Last Assessment</p>
                <p className="text-xs text-muted-foreground">January 15, 2026</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Compensating Controls</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {COMPENSATING_CONTROLS.map((control, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-lg border px-3 py-2.5"
            >
              <CheckCircle2 className="size-4 shrink-0 text-emerald-500" />
              <span className="text-sm">{control}</span>
            </div>
          ))}
        </CardContent>
      </Card>

      <Separator />

      <div className="flex justify-end">
        <Button onClick={onProceed}>
          Continue to Resolution
          <ArrowRight className="ml-1.5 size-4" />
        </Button>
      </div>
    </div>
  )
}
