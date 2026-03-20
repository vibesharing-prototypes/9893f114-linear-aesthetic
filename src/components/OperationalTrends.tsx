import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

const DAY_LABELS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"]

const FAILED_SIGN_INS = [1280, 1190, 1050, 980, 920, 880, 760, 710, 640, 590, 520, 480, 430, 390]
const CRITICAL_VULNS = [14, 15, 14, 16, 15, 13, 12, 12, 11, 10, 9, 9, 8, 7]
const MTTA_P1_HOURS = [4.2, 3.9, 4.1, 3.6, 3.4, 3.2, 3.0, 2.9, 2.8, 2.6, 2.5, 2.4, 2.3, 2.2]

function toChartData(values: readonly number[]) {
  return values.map((v, i) => ({ day: DAY_LABELS[i]!, value: v }))
}

const tickStyle = { fontSize: 9, fill: "var(--muted-foreground)" }

function MiniLineChart({
  data,
  stroke,
  valueLabel,
}: {
  data: { day: string; value: number }[]
  stroke: string
  valueLabel: string
}) {
  return (
    <div className="h-[132px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ left: 0, right: 4, top: 4, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} className="opacity-50" />
          <XAxis dataKey="day" tick={tickStyle} axisLine={{ stroke: "var(--border)" }} tickLine={{ stroke: "var(--border)" }} interval={2} />
          <YAxis width={34} tick={tickStyle} axisLine={false} tickLine={{ stroke: "var(--border)" }} />
          <Tooltip
            contentStyle={{
              fontSize: 12,
              borderRadius: 8,
              border: "1px solid var(--border)",
              background: "var(--popover)",
              color: "var(--popover-foreground)",
            }}
            formatter={(value) => [String(value ?? ""), valueLabel]}
            labelFormatter={(label) => `Day ${label}`}
          />
          <Line
            type="monotone"
            dataKey="value"
            name={valueLabel}
            stroke={stroke}
            strokeWidth={2}
            dot={false}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

function TrendCard({
  title,
  caption,
  data,
  stroke,
  valueLabel,
}: {
  title: string
  caption: string
  data: readonly number[]
  stroke: string
  valueLabel: string
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-3">
      <div className="space-y-2">
        <div className="space-y-0.5">
          <p className="text-[0.7rem] font-semibold tracking-wide">{title}</p>
          <p className="text-[0.65rem] leading-snug text-muted-foreground">{caption}</p>
        </div>
        <MiniLineChart data={toChartData(data)} stroke={stroke} valueLabel={valueLabel} />
      </div>
    </div>
  )
}

export const OPERATIONAL_TRENDS_TITLE = "Operational trends"

export const OPERATIONAL_TRENDS_SUBTITLE =
  "Rolling 14-day view of signals we watch for your environment (demo data)."

export function OperationalMonitoringCharts() {
  return (
    <div className="flex min-w-0 flex-col gap-4">
      <TrendCard
        title="Failed sign-in attempts"
        caption="Identity perimeter — lower is better. Spikes often precede password-spray campaigns."
        data={FAILED_SIGN_INS}
        stroke="var(--chart-1)"
        valueLabel="Attempts"
      />
      <TrendCard
        title="Critical vulnerabilities open"
        caption="Assets with CVSS ≥ 9 or active exploit intel. Tracks remediation backlog."
        data={CRITICAL_VULNS}
        stroke="var(--destructive)"
        valueLabel="Count"
      />
      <TrendCard
        title="Mean time to acknowledge (P1)"
        caption="Hours from detection to first analyst action on priority-1 incidents."
        data={MTTA_P1_HOURS}
        stroke="var(--primary)"
        valueLabel="Hours"
      />
    </div>
  )
}
