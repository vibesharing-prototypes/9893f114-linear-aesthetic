import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ArrowRight, ShieldAlert, Wrench } from "lucide-react"

const FAILED_CONTROLS = [
  { id: "AC-7", name: "Endpoint Protection", finding: "Unpatched kernel driver" },
  { id: "RA-5", name: "Vulnerability Scanning", finding: "Detection delay > 24hrs" },
  { id: "SI-2", name: "Flaw Remediation", finding: "Patch not applied within SLA" },
  { id: "SA-9", name: "External System Services", finding: "Vendor patch dependency" },
]

const ITSM_TICKETS = [
  { id: "INC-2847", title: "Emergency patch deployment", priority: "Critical", status: "In Progress" },
  { id: "INC-2848", title: "Asset isolation review", priority: "High", status: "Open" },
  { id: "INC-2849", title: "Compensating controls", priority: "High", status: "Open" },
  { id: "CHG-1923", title: "Emergency change request", priority: "Critical", status: "Approved" },
  { id: "PRB-0847", title: "Root cause analysis", priority: "Medium", status: "Open" },
]

interface RemediationPanelProps {
  onProceed: () => void
}

export function RemediationPanel({ onProceed }: RemediationPanelProps) {
  const ticketsCreated = 2
  const totalTickets = ITSM_TICKETS.length

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Wrench className="size-5 text-muted-foreground" />
          <h2 className="text-lg font-semibold tracking-tight">Remediation Plan</h2>
        </div>
        <span className="text-sm text-muted-foreground">
          {ticketsCreated} of {totalTickets} tickets created
        </span>
      </div>

      <Progress value={(ticketsCreated / totalTickets) * 100} />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShieldAlert className="size-4" />
            Failed Controls Linked
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {FAILED_CONTROLS.map((control) => (
            <div
              key={control.id}
              className="flex items-center justify-between rounded-lg border px-3 py-2.5"
            >
              <div className="flex items-center gap-3">
                <Badge variant="outline" className="font-mono text-xs">
                  {control.id}
                </Badge>
                <span className="text-sm font-medium">{control.name}</span>
              </div>
              <span className="text-xs text-muted-foreground">{control.finding}</span>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>ITSM Tickets</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ITSM_TICKETS.map((ticket) => (
                <TableRow key={ticket.id}>
                  <TableCell className="font-mono text-xs">{ticket.id}</TableCell>
                  <TableCell className="font-medium">{ticket.title}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        ticket.priority === "Critical"
                          ? "destructive"
                          : ticket.priority === "High"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {ticket.priority}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{ticket.status}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Separator />

      <div className="flex justify-end">
        <Button onClick={onProceed}>
          Continue to Third-Party Review
          <ArrowRight className="ml-1.5 size-4" />
        </Button>
      </div>
    </div>
  )
}
