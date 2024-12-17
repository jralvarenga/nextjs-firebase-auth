"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { ITEMS } from "@/constants/navItems"
import { usePathname } from "next/navigation"

export function Navbar({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname()

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {ITEMS.map((value) => (
        <Link
          key={`nav-item-${value.href}`}
          href={value.href}
          className={cn(
            "flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary",
            pathname?.startsWith(value.href)
              ? "bg-muted font-medium text-primary"
              : "text-muted-foreground",
          )}
        >
          {value.title}
        </Link>
      ))}
    </nav>
  )
}
