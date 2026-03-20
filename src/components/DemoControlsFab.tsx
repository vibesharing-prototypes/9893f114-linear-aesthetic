import { useState } from "react"
import { Check, Lightbulb, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { useDemo } from "@/contexts/DemoContext"

function SwatchRow({ colors }: { colors: string[] }) {
  return (
    <div className="flex shrink-0 gap-1">
      {colors.map((c, i) => (
        <div
          key={`${c}-${i}`}
          className="size-3.5 rounded-full ring-1 ring-border"
          style={{ backgroundColor: c }}
        />
      ))}
    </div>
  )
}

function SelectableRow({
  selected,
  onSelect,
  swatches,
  title,
  description,
}: {
  selected: boolean
  onSelect: () => void
  swatches: string[]
  title: string
  description: string
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "flex w-full cursor-pointer gap-3 rounded-lg border-2 p-3 text-left transition-colors",
        "bg-card hover:bg-muted/40",
        selected ? "border-destructive" : "border-border",
      )}
    >
      <SwatchRow colors={swatches} />
      <div className="min-w-0 flex-1 space-y-0.5">
        <p className="text-sm font-semibold">{title}</p>
        <p className="text-xs text-muted-foreground leading-snug">{description}</p>
      </div>
      <div className="flex w-5 shrink-0 justify-end">
        {selected ? <Check className="size-5 text-destructive" aria-hidden /> : null}
      </div>
    </button>
  )
}

export function DemoControlsFab() {
  const { hasAlerts, setHasAlerts, themeMode, setThemeMode } = useDemo()
  const [open, setOpen] = useState(false)

  return (
    <>
      {open ? (
        <button
          type="button"
          aria-label="Close demo settings"
          className="fixed inset-0 z-[100] bg-black/20"
          onClick={() => setOpen(false)}
        />
      ) : null}

      {open ? (
        <Card className="fixed bottom-24 right-4 z-[110] w-[min(calc(100vw-2rem),20rem)] gap-3 py-3 shadow-lg">
          <div className="flex items-center justify-between border-b border-border px-3 pb-2">
            <span className="text-xs font-semibold text-muted-foreground">Demo settings</span>
            <Button
              type="button"
              variant="ghost"
              size="icon-xs"
              className="text-muted-foreground"
              aria-label="Close"
              onClick={() => setOpen(false)}
            >
              <X className="size-3.5" />
            </Button>
          </div>
          <div className="space-y-4 px-3">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-muted-foreground">Scenario</p>
              <div className="space-y-2">
                <SelectableRow
                  selected={hasAlerts}
                  onSelect={() => setHasAlerts(true)}
                  swatches={["#171717", "#404040", "#dc2626"]}
                  title="Active alerts"
                  description="Command center shows critical items and action-required state."
                />
                <SelectableRow
                  selected={!hasAlerts}
                  onSelect={() => setHasAlerts(false)}
                  swatches={["#fafafa", "#bbf7d0", "#16a34a"]}
                  title="All clear"
                  description="Positive posture banner and no open alert queue."
                />
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-semibold text-muted-foreground">Theme</p>
              <div className="space-y-2">
                <SelectableRow
                  selected={themeMode === "light"}
                  onSelect={() => setThemeMode("light")}
                  swatches={["#ffffff", "#f4f4f5", "#2563eb"]}
                  title="Light"
                  description="Bright surfaces and high contrast type."
                />
                <SelectableRow
                  selected={themeMode === "dark"}
                  onSelect={() => setThemeMode("dark")}
                  swatches={["#0a0a0c", "#1c1c22", "#2563eb"]}
                  title="Dark"
                  description="Reduced glare for extended review."
                />
              </div>
            </div>
          </div>
        </Card>
      ) : null}

      <Button
        type="button"
        aria-label="Open demo settings: scenario and theme"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "fixed bottom-6 right-4 z-[120] size-14 shrink-0 rounded-full border-2 p-0 shadow-lg",
          "border-emerald-400/60 bg-emerald-100 text-emerald-900",
          "hover:border-emerald-500/80 hover:bg-emerald-200/90",
          "dark:border-emerald-600/85 dark:bg-emerald-950 dark:text-emerald-50",
          "dark:hover:border-emerald-500 dark:hover:bg-emerald-900",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
          "focus-visible:outline-emerald-600 dark:focus-visible:outline-emerald-400",
        )}
      >
        <Lightbulb className="size-6" strokeWidth={1.75} />
      </Button>
    </>
  )
}
