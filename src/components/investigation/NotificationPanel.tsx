import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, Bell, Mail } from "lucide-react"

const RECIPIENTS = [
  {
    name: "Sarah Chen",
    initials: "SC",
    role: "CISO",
    action: "Immediate escalation",
    sent: false,
  },
  {
    name: "Mike Rodriguez",
    initials: "MR",
    role: "IT Asset Owner (Financial)",
    action: "Asset impact briefing",
    sent: false,
  },
  {
    name: "Jennifer Walsh",
    initials: "JW",
    role: "General Counsel",
    action: "Regulatory assessment",
    sent: false,
  },
  {
    name: "David Kim",
    initials: "DK",
    role: "Vendor Management",
    action: "Third-party review",
    sent: false,
  },
]

interface NotificationPanelProps {
  onProceed: () => void
}

export function NotificationPanel({ onProceed }: NotificationPanelProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Bell className="size-5 text-muted-foreground" />
        <h2 className="text-lg font-semibold tracking-tight">
          Stakeholder Notifications
        </h2>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recipients</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {RECIPIENTS.map((person) => (
            <div
              key={person.name}
              className="flex items-center gap-3 rounded-lg border px-3 py-2.5"
            >
              <Avatar size="sm">
                <AvatarFallback className="text-[10px]">
                  {person.initials}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">{person.name}</p>
                <p className="text-xs text-muted-foreground">{person.role}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">
                  {person.action}
                </span>
                <Mail className="size-3.5 text-muted-foreground" />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Notification Preview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 rounded-lg border bg-muted/30 p-4">
            <div>
              <p className="text-xs font-medium text-muted-foreground">Subject</p>
              <p className="text-sm font-semibold">
                CRITICAL: CVE-2026-1847 — Immediate Action Required
              </p>
            </div>
            <Separator />
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                A critical vulnerability (CVSS 9.8) has been identified in
                CrowdStrike Falcon Sensor v7.x deployed across our environment.
                Immediate action is required.
              </p>
              <ul className="list-inside list-disc space-y-1.5">
                <li>
                  <span className="font-medium text-foreground">12 assets</span>{" "}
                  affected across 3 business-critical systems
                </li>
                <li>
                  <span className="font-medium text-foreground">4 compliance frameworks</span>{" "}
                  at risk: SOC 2, ISO 27001, NIST CSF, PCI DSS
                </li>
                <li>
                  <span className="font-medium text-foreground">Remediation window:</span>{" "}
                  24 hours per policy SLA
                </li>
                <li>
                  <span className="font-medium text-foreground">Materiality threshold</span>{" "}
                  met — disclosure review initiated
                </li>
              </ul>
              <p>
                An incident response workflow has been activated. You will receive
                updates as remediation progresses.
              </p>
            </div>
            <div className="flex items-center gap-2 pt-1">
              <Badge variant="outline">Auto-generated</Badge>
              <Badge variant="outline">Context-aware</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <Separator />

      <div className="flex justify-end">
        <Button onClick={onProceed}>
          Send Notifications & Continue
          <ArrowRight className="ml-1.5 size-4" />
        </Button>
      </div>
    </div>
  )
}
