"use client"

import { useTransactions } from "@/hooks/useTransactions"
import { ScrollArea } from "../ui/scroll-area"
import { Input } from "../ui/input"
import { TransactionPreview } from "./transactionPreview"
import { Transaction } from "budio"
import { useEffect } from "react"
import { Search } from "lucide-react"

interface Props {
  initialTransactions: Transaction[]
}

export function TransactionsList({ initialTransactions }: Props) {
  const [transactions, setTransactions] = useTransactions()

  useEffect(() => {
    if (initialTransactions) {
      setTransactions({
        ...transactions,
        list: initialTransactions,
        selected:
          initialTransactions.length > 0 ? initialTransactions[0] : null,
        selectedIndex: 0,
      })
    }
  }, [initialTransactions])

  return (
    <>
      <div className="bg-background/95 supports-[backdrop-filter]:bg-background/60 backdrop-blur">
        <form>
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search" className="pl-8" />
          </div>
        </form>
      </div>

      <div className="flex-1">
        <ScrollArea className="h-[calc(100vh_-_120px)]">
          <div className="flex flex-col gap-2">
            {transactions.list.map((transaction, i) => (
              <TransactionPreview
                transaction={transaction}
                index={i}
                key={`transaction_st_${i}`}
              />
            ))}
          </div>
        </ScrollArea>
      </div>
    </>
  )
}
