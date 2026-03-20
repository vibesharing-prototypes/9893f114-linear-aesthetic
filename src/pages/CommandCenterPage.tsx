import { HeroBanner } from "@/components/HeroBanner"
import { QuickActions } from "@/components/QuickActions"
import { PendingVulnerabilities } from "@/components/PendingVulnerabilities"
import { RecentActivity } from "@/components/RecentActivity"
import { ProactiveTasks } from "@/components/ProactiveTasks"
import { SystemLog } from "@/components/SystemLog"

export function CommandCenterPage() {
  return (
    <div className="flex flex-col gap-10 py-8">
      <div className="flex items-center gap-2.5">
        <img
          src="/diligent-d.svg"
          alt=""
          className="h-5 w-auto shrink-0"
          width={22}
          height={20}
        />
        <h1 className="text-lg font-semibold tracking-tight text-foreground">
          IT Risk Command Center
        </h1>
      </div>

      <div className="flex flex-col gap-4">
        <HeroBanner />
        <QuickActions />
        <PendingVulnerabilities />
      </div>

      <RecentActivity />

      <ProactiveTasks />

      <SystemLog />
    </div>
  )
}
