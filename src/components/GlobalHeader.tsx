import { Link } from "react-router"
import { useState } from "react"
import {
  HelpCircle,
  LayoutGrid,
  Settings,
  User,
} from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

export function GlobalHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <div className="mx-auto flex h-14 max-w-[1600px] items-center justify-between gap-4 px-4 lg:px-6">
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <Link
            to="/"
            className="flex min-w-0 shrink-0 items-center gap-3 rounded-md outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label="Home"
          >
            <span className="flex shrink-0 rounded-md border border-border/80 bg-muted/55 p-1 shadow-sm dark:border-border dark:bg-muted/35 dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
              <img
                src="/acme-mark.svg"
                alt=""
                width={32}
                height={32}
                className="size-8"
              />
            </span>
            <span className="truncate text-sm font-semibold text-foreground">
              Acme Co, Inc.
            </span>
          </Link>

          <AppLauncherMenu />
        </div>

        <div className="flex shrink-0 items-center gap-0.5 sm:gap-1">
          <Tooltip>
            <TooltipTrigger
              type="button"
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon-sm" }),
                "size-9 rounded-md border border-border bg-muted/80 text-foreground shadow-none hover:bg-muted hover:text-foreground dark:bg-muted/50 dark:hover:bg-muted"
              )}
              aria-label="Help"
            >
              <HelpCircle className="size-5" />
            </TooltipTrigger>
            <TooltipContent side="bottom">Help</TooltipContent>
          </Tooltip>

          <Link
            to="/settings"
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon-sm" }),
              "inline-flex size-9 items-center justify-center text-foreground hover:text-foreground"
            )}
            aria-label="Settings"
          >
            <Settings className="size-5" />
          </Link>

          <Separator
            orientation="vertical"
            className="mx-1 hidden h-6 sm:mx-2 sm:block"
          />

          <Tooltip>
            <TooltipTrigger
              type="button"
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon-sm" }),
                "inline-flex size-9 items-center justify-center text-foreground"
              )}
              aria-label="Profile"
            >
              <User className="size-5" />
            </TooltipTrigger>
            <TooltipContent side="bottom">Profile</TooltipContent>
          </Tooltip>
        </div>
      </div>
    </header>
  )
}

function AppLauncherMenu() {
  const [open, setOpen] = useState(false)

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger
        type="button"
        className={cn(
          buttonVariants({ variant: "ghost", size: "icon-sm" }),
          "inline-flex size-9 shrink-0 items-center justify-center text-foreground hover:text-foreground"
        )}
        aria-label="App launcher"
      >
        <LayoutGrid className="size-5" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        <DropdownMenuLabel>Applications</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem disabled>
          Security
          <span className="ml-auto text-xs text-muted-foreground">Current</span>
        </DropdownMenuItem>
        <DropdownMenuItem>Board &amp; leadership</DropdownMenuItem>
        <DropdownMenuItem>Compliance</DropdownMenuItem>
        <DropdownMenuItem>Entities</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
