import { Link } from "react-router"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SettingsPage() {
  return (
    <div className="space-y-6 py-8">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">Settings</h1>
        <p className="text-sm text-muted-foreground">
          Settings page placeholder
        </p>
      </div>

      <Button variant="ghost" size="sm" render={<Link to="/" />}>
        <ArrowLeft className="size-3.5" data-icon="inline-start" />
        Back to Command Center
      </Button>
    </div>
  )
}
