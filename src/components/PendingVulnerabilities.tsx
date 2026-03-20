import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table"
import { useDemo } from "@/contexts/DemoContext"

const vulnerabilities = [
  {
    id: "CVE-2026-1847",
    severity: "Critical",
    severityClass: "bg-destructive/10 text-destructive",
    assets: 12,
    status: "Triage Required",
    actionLabel: "Review",
    actionVariant: "default" as const,
  },
  {
    id: "CVE-2026-1832",
    severity: "High",
    severityClass: "bg-amber-500/10 text-amber-600",
    assets: 4,
    status: "Under Review",
    actionLabel: "View",
    actionVariant: "outline" as const,
  },
  {
    id: "CVE-2026-1798",
    severity: "Medium",
    severityClass: "bg-yellow-500/10 text-yellow-600",
    assets: 1,
    status: "Patch Scheduled",
    actionLabel: "View",
    actionVariant: "outline" as const,
  },
]

export function PendingVulnerabilities() {
  const { hasAlerts } = useDemo()

  if (!hasAlerts) return null

  return (
    <Card>
      <CardHeader>
        <CardTitle>Vulnerabilities Requiring Review</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>CVE ID</TableHead>
              <TableHead>Severity</TableHead>
              <TableHead>Affected Assets</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {vulnerabilities.map((vuln) => (
              <TableRow key={vuln.id}>
                <TableCell className="font-medium">{vuln.id}</TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className={vuln.severityClass}
                  >
                    {vuln.severity}
                  </Badge>
                </TableCell>
                <TableCell>{vuln.assets} assets</TableCell>
                <TableCell className="text-muted-foreground">
                  {vuln.status}
                </TableCell>
                <TableCell className="text-right">
                  <Button variant={vuln.actionVariant} size="sm">
                    {vuln.actionLabel}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
