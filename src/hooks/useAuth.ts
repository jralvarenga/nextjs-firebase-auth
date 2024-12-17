import { AuthContext } from "@/providers/authWrapper"
import { use } from "react"

export function useAuth() {
  return use(AuthContext)
}
