import { ReactNode } from "react"

interface Props {
  title: string
  children?: ReactNode
}

export function Header({ title, children }: Props) {
  return (
    <div className="flex items-center justify-between space-y-2">
      <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
      {children}
    </div>
  )
}
