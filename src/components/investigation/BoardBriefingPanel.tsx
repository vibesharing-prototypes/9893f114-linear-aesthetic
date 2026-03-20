import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { FileText, Pencil, Send } from "lucide-react"

const BOARD_RECIPIENTS = [
  { id: "audit", label: "Audit Committee", checked: true },
  { id: "risk", label: "Risk Committee", checked: true },
  { id: "full", label: "Full Board", checked: false },
]

const EXECUTIVE_SUMMARY = `Security Incident Report — CVE-2026-1847

EXECUTIVE SUMMARY
On March 18, 2026, a critical remote code execution vulnerability (CVE-2026-1847, CVSS 9.8) was identified in the CrowdStrike Falcon Sensor v7.x kernel driver deployed across our enterprise environment. The vulnerability was triaged within 15 minutes of disclosure, and a coordinated response was initiated through our automated incident governance workflow.

IMPACT ASSESSMENT
Twelve assets across three business-critical systems were affected: Financial Reporting Platform (5 assets), HR Management System (4 assets), and Customer Portal (3 assets). Four compliance frameworks — SOC 2 Type II, ISO 27001, NIST CSF, and PCI DSS — were assessed for impact. The incident meets the threshold for material disclosure consideration under SEC reporting guidelines.

RESPONSE TIMELINE
The incident was detected at 06:42 UTC and triaged by 06:57 UTC. Stakeholder notifications were dispatched at 07:05 UTC. Emergency patching commenced at 07:30 UTC with compensating controls deployed in parallel. Full remediation was achieved by 13:15 UTC, within the 24-hour critical SLA window.

REMEDIATION ACTIONS
Five ITSM tickets were created, including emergency patch deployment, asset isolation review, and compensating controls implementation. An emergency change request (CHG-1923) was approved and executed. Network segmentation was applied to contain potential lateral movement, and secondary EDR monitoring was activated during the remediation window.

COMPLIANCE STATUS
All four impacted compliance frameworks have been reviewed. Control deficiencies in AC-7 (Endpoint Protection), RA-5 (Vulnerability Scanning), SI-2 (Flaw Remediation), and SA-9 (External System Services) have been documented. Corrective action plans are in progress, and an updated risk assessment has been filed in the risk register.

RECOMMENDATIONS
Management recommends (1) accelerating the vendor assessment cycle for critical security vendors from annual to semi-annual, (2) implementing automated patch deployment for kernel-level security updates, and (3) engaging external counsel to evaluate disclosure obligations under SEC cybersecurity rules. A follow-up briefing is scheduled for the next regular committee meeting.`

interface BoardBriefingPanelProps {
  onComplete: () => void
}

export function BoardBriefingPanel({ onComplete }: BoardBriefingPanelProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <FileText className="size-5 text-muted-foreground" />
        <h2 className="text-lg font-semibold tracking-tight">
          Board Briefing — Executive Summary
        </h2>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recipients</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {BOARD_RECIPIENTS.map((r) => (
            <label
              key={r.id}
              className="flex items-center gap-3 rounded-lg border px-3 py-2.5 cursor-default"
            >
              <Checkbox checked={r.checked} disabled />
              <span className="text-sm">{r.label}</span>
              {r.checked && (
                <Badge variant="outline" className="ml-auto text-xs">
                  Selected
                </Badge>
              )}
            </label>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Briefing Document</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border bg-muted/30 p-5">
            <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-foreground/90">
              {EXECUTIVE_SUMMARY}
            </pre>
          </div>
        </CardContent>
      </Card>

      <Separator />

      <div className="flex items-center justify-end gap-3">
        <Button variant="outline">
          <Pencil className="mr-1.5 size-3.5" />
          Edit Briefing
        </Button>
        <Button onClick={onComplete}>
          <Send className="mr-1.5 size-3.5" />
          Send to Committee
        </Button>
      </div>
    </div>
  )
}
