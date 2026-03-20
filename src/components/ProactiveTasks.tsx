import {
  OPERATIONAL_TRENDS_SUBTITLE,
  OPERATIONAL_TRENDS_TITLE,
  OperationalMonitoringCharts,
} from "@/components/OperationalTrends"
import { cn } from "@/lib/utils"

const tasks = [
  {
    title: "Complete Q1 Risk Assessment",
    description:
      "Review asset inventory, threat landscape, and control effectiveness for the quarter. When you're ready, capture decisions and export a summary leadership can act on.",
  },
  {
    title: "Annual Vendor Security Reviews",
    description:
      "Gather certifications, compare contract SLAs, and refresh tier ratings for critical vendors. We'll highlight missing artifacts and overdue follow-ups so you know where to start.",
  },
  {
    title: "Disaster Recovery Plan Update",
    description:
      "Fold in recent infrastructure and dependency changes across runbooks, RTO/RPO targets, failover steps, and stakeholder communications so drills match how you operate today.",
  },
  {
    title: "NIS2 Gap Analysis",
    description:
      "Map regulatory obligations to your controls, evidence, and reporting workflows. See what's already covered, what needs an owner, and what to prioritize before deadlines tighten.",
  },
] as const

/** Matches md grid row 2 height so chart cards and task list start on the same baseline. */
const subtitleMinH = "min-h-0 md:min-h-[2.75rem]"

export function ProactiveTasks() {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-0 md:grid-cols-2 md:gap-x-10">
      <h2 className="col-start-1 row-start-1 mb-1 text-sm font-semibold tracking-tight md:row-start-1">
        Proactive Tasks
      </h2>
      <h2 className="col-start-1 row-start-4 mb-1 text-sm font-semibold tracking-tight md:col-start-2 md:row-start-1">
        {OPERATIONAL_TRENDS_TITLE}
      </h2>

      <p
        className={`col-start-1 row-start-2 text-xs leading-snug text-muted-foreground ${subtitleMinH} md:row-start-2`}
      >
        Optional work you can start when you&apos;re ready—nothing here is in progress.
      </p>
      <p
        className={`col-start-1 row-start-5 text-xs leading-snug text-muted-foreground ${subtitleMinH} md:col-start-2 md:row-start-2`}
      >
        {OPERATIONAL_TRENDS_SUBTITLE}
      </p>

      <ul className="col-start-1 row-start-3 m-0 mt-5 list-none divide-y divide-border/60 p-0 md:mt-0 md:row-start-3">
        {tasks.map((task, i) => (
          <li
            key={task.title}
            className={cn("pb-3.5", i === 0 ? "pt-1 md:pt-0" : "py-3.5")}
          >
            <div className="space-y-1.5">
              <p className="text-[0.8125rem] font-medium leading-tight">{task.title}</p>
              <p className="text-[0.8125rem] leading-snug text-muted-foreground">{task.description}</p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 pt-1">
                <button
                  type="button"
                  className="text-xs font-medium text-foreground underline-offset-4 hover:underline"
                >
                  Learn more
                </button>
                <button
                  type="button"
                  className="text-xs font-normal text-muted-foreground underline-offset-4 hover:underline"
                >
                  Not now
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="col-start-1 row-start-6 mt-3 min-w-0 md:col-start-2 md:row-start-3 md:mt-0">
        <OperationalMonitoringCharts />
      </div>
    </div>
  )
}
