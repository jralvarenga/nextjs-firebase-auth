import { atom, useAtom } from "jotai"
import { Transaction } from "budio"

type Config = {
  selected: Transaction | null
  list: Transaction[]
  selectedIndex: number
}

const configAtom = atom<Config>({
  list: [],
  selected: null,
  selectedIndex: 0,
})

export function useTransactions() {
  return useAtom(configAtom)
}
