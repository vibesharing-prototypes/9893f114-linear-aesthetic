import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { Send, Sparkles } from "lucide-react"

interface Message {
  id: number
  role: "ai" | "user"
  content: string
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: 1,
    role: "ai",
    content:
      "I've completed the initial triage of CVE-2026-1847. 12 assets are affected across 3 business-critical systems. Shall I walk you through the compliance impact?",
  },
  {
    id: 2,
    role: "user",
    content: "Yes, what frameworks are affected?",
  },
  {
    id: 3,
    role: "ai",
    content:
      "Four compliance frameworks have potential impact: SOC 2 Type II (CC7.1 — System Operations), ISO 27001 (A.12.6 — Technical Vulnerability Management), NIST CSF (ID.RA-1 — Asset Vulnerabilities), and PCI DSS (Req 6.2 — Security Patches). I've flagged these in the triage report.",
  },
  {
    id: 4,
    role: "user",
    content: "What's the remediation timeline?",
  },
  {
    id: 5,
    role: "ai",
    content:
      "Based on the CVSS 9.8 score and your policy framework, the required remediation window is 24 hours for critical assets. I've drafted 5 ITSM tickets and an emergency change request. The patch is available from CrowdStrike — estimated deployment time is 4-6 hours with your current automation.",
  },
]

export function ChatPanel() {
  const [messages] = useState<Message[]>(INITIAL_MESSAGES)
  const [input, setInput] = useState("")

  return (
    <aside className="flex h-full min-h-0 w-80 shrink-0 flex-col overflow-hidden border-l bg-background">
      <div className="flex items-center gap-2 px-4 py-3">
        <Sparkles className="size-4 text-muted-foreground" />
        <div>
          <p className="text-sm font-semibold">AI Security Assistant</p>
          <p className="text-xs text-muted-foreground">
            Context for this incident
          </p>
        </div>
      </div>

      <Separator />

      <ScrollArea className="min-h-0 flex-1 px-4 py-3">
        <div className="space-y-3">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={cn(
                "rounded-lg px-3 py-2.5 text-sm leading-relaxed",
                msg.role === "ai" && "bg-muted text-foreground",
                msg.role === "user" && "bg-primary text-primary-foreground ml-6"
              )}
            >
              {msg.content}
            </div>
          ))}
        </div>
      </ScrollArea>

      <Separator />

      <div className="flex items-center gap-2 px-3 py-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question..."
          className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
        />
        <Button variant="ghost" size="icon-sm">
          <Send className="size-4" />
        </Button>
      </div>
    </aside>
  )
}
