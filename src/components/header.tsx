import { ReactNode } from "react"
import { SidebarTrigger } from "./ui/sidebar"

interface Props {
  title: string
  children?: ReactNode
}

export function Header({ title, children }: Props) {
  return (
    <div className="flex items-center justify-between space-y-2">
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
      </div>
      {children}
    </div>
  )
}
