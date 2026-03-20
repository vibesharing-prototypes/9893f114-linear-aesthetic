import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, CheckCircle } from "lucide-react"

const CHECKLIST = [
  { id: "patches", label: "All patches applied and verified", checked: true },
  { id: "vulns", label: "No residual vulnerabilities detected", checked: true },
  { id: "controls", label: "Compensating controls removed", checked: true },
  { id: "owners", label: "Asset owners confirmed operational status", checked: true },
  { id: "evidence", label: "Evidence pack compiled (23 artifacts)", checked: true },
]

interface ResolutionPanelProps {
  onProceed: () => void
}

export function ResolutionPanel({ onProceed }: ResolutionPanelProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <CheckCircle className="size-5 text-muted-foreground" />
        <h2 className="text-lg font-semibold tracking-tight">
          Resolution & Verification
        </h2>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Patch Status</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Progress value={100} />
          <p className="text-sm text-muted-foreground">
            All 12 assets patched successfully
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Verification Checklist</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {CHECKLIST.map((item) => (
            <label
              key={item.id}
              className="flex items-center gap-3 rounded-lg border px-3 py-2.5 cursor-default"
            >
              <Checkbox checked={item.checked} disabled />
              <span className="text-sm">{item.label}</span>
            </label>
          ))}
        </CardContent>
      </Card>

      <Separator />

      <div className="flex justify-end">
        <Button onClick={onProceed}>
          Generate Board Briefing
          <ArrowRight className="ml-1.5 size-4" />
        </Button>
      </div>
    </div>
  )
}
