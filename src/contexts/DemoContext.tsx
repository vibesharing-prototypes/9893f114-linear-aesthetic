import { createContext, useContext, useState, type ReactNode } from "react"

type ThemeMode = "light" | "dark"

interface DemoContextValue {
  hasAlerts: boolean
  setHasAlerts: (value: boolean) => void
  themeMode: ThemeMode
  setThemeMode: (value: ThemeMode) => void
}

const DemoContext = createContext<DemoContextValue | null>(null)

export function DemoProvider({ children }: { children: ReactNode }) {
  const [hasAlerts, setHasAlerts] = useState(true)
  const [themeMode, setThemeMode] = useState<ThemeMode>("light")

  return (
    <DemoContext.Provider
      value={{ hasAlerts, setHasAlerts, themeMode, setThemeMode }}
    >
      {children}
    </DemoContext.Provider>
  )
}

export function useDemo() {
  const ctx = useContext(DemoContext)
  if (!ctx) {
    throw new Error("useDemo must be used within a DemoProvider")
  }
  return ctx
}
