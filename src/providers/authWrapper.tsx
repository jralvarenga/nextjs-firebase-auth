"use client"

import { useAuth } from "@/hooks/useAuth"
import { useUserSession } from "@/hooks/useUserSession"
import { User } from "firebase/auth"
import { useEffect } from "react"

export function AuthWrapper({
  children,
  currentUser,
}: Readonly<{
  children: React.ReactNode
  currentUser: User | null
}>) {
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const [_, setUser] = useAuth()
  const user = useUserSession(currentUser)

  useEffect(() => {
    if (user) {
      setUser(user)
    }
  }, [user, setUser])

  return children
}
