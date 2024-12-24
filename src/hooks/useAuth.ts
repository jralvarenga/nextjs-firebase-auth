import { User } from "firebase/auth"
import { atom, useAtom } from "jotai"

type Config = User | null

const configAtom = atom<Config>(null)

export function useAuth() {
  return useAtom(configAtom)
}
