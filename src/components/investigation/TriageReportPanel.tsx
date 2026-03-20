import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { AlertTriangle, ArrowRight, Shield } from "lucide-react"

const AFFECTED_ASSETS = [
  { system: "Financial Reporting Platform", assets: 5, environment: "Production" },
  { system: "HR Management System", assets: 4, environment: "Production" },
  { system: "Customer Portal", assets: 3, environment: "Staging" },
]

const COMPLIANCE_FRAMEWORKS = ["SOC 2 Type II", "ISO 27001", "NIST CSF", "PCI DSS"]

const RISK_ENTRIES = [
  { id: "R-2024-089", name: "Third-Party Software Risk", severity: "High" },
  { id: "R-2024-112", name: "Endpoint Protection Gap", severity: "Medium" },
]

interface TriageReportPanelProps {
  completed: boolean
  onProceed: () => void
}

export function TriageReportPanel({ completed, onProceed }: TriageReportPanelProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Shield className="size-5 text-muted-foreground" />
          <h2 className="text-lg font-semibold tracking-tight">Automated Triage Report</h2>
        </div>
        <Badge variant={completed ? "default" : "secondary"}>
          {completed ? "COMPLETED" : "IN PROGRESS"}
        </Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>CVE Details</CardTitle>
        </CardHeader>
        <CardContent>
          <dl className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
            <div>
              <dt className="text-muted-foreground">CVE ID</dt>
              <dd className="font-medium">CVE-2026-1847</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">CVSS Score</dt>
              <dd className="font-medium text-red-600 dark:text-red-400">9.8 — Critical</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Affected Software</dt>
              <dd className="font-medium">CrowdStrike Falcon Sensor v7.x</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Description</dt>
              <dd className="font-medium">Remote code execution via kernel driver</dd>
            </div>
          </dl>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Affected Assets</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>System</TableHead>
                <TableHead className="text-right">Assets</TableHead>
                <TableHead>Environment</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {AFFECTED_ASSETS.map((row) => (
                <TableRow key={row.system}>
                  <TableCell className="font-medium">{row.system}</TableCell>
                  <TableCell className="text-right">{row.assets}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{row.environment}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <p className="mt-3 text-xs text-muted-foreground">
            12 total assets affected across 3 business-critical systems
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Compliance Impact</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {COMPLIANCE_FRAMEWORKS.map((fw) => (
              <Badge key={fw} variant="secondary">
                {fw}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Risk Register</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {RISK_ENTRIES.map((entry) => (
            <div
              key={entry.id}
              className="flex items-center justify-between rounded-lg border px-3 py-2.5"
            >
              <div className="flex items-center gap-2">
                <AlertTriangle className="size-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">{entry.name}</p>
                  <p className="text-xs text-muted-foreground">{entry.id}</p>
                </div>
              </div>
              <Badge
                variant={entry.severity === "High" ? "destructive" : "secondary"}
              >
                {entry.severity}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Materiality Assessment</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Based on the scope of affected assets and compliance frameworks impacted,
            this incident meets the threshold for material disclosure consideration.
          </p>
        </CardContent>
      </Card>

      <Separator />

      <div className="flex justify-end">
        <Button onClick={onProceed}>
          Proceed to Notifications
          <ArrowRight className="ml-1.5 size-4" />
        </Button>
      </div>
    </div>
  )
}
