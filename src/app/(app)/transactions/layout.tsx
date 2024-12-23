import { Header } from "@/components/header"
import { TransactionsList } from "@/components/transactionsList"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Transaction } from "budio"
import Link from "next/link"

async function getData(): Promise<Transaction[]> {
  return [
    {
      id: "728ed52f",
      amount: 100,
      account_id: '',
      categories: [
        {
          icon: "🚑",
          name: "Emergencies",
        },
      ],
      created_at: new Date(),
      timestamp: new Date(),
      title: "Testing",
    },
    {
      id: "vhwouhuovw",
      amount: 100,
      account_id: '',
      categories: [
        {
          icon: "🚑",
          name: "Emergencies",
        },
        {
          icon: "🚑",
          name: "Emergencies",
        },
        {
          icon: "🚑",
          name: "Emergencies",
        },
      ],
      created_at: new Date(),
      timestamp: new Date(),
      title: "Testing 2",
    },
    {
      id: "cwicrwibncr",
      amount: 100,
      account_id: '',
      categories: [
        {
          icon: "",
          name: "Testnig",
        },
      ],
      created_at: new Date(),
      timestamp: new Date(),
      title: "Testing 3",
    },
  ]
}

export default async function TransactionsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const transactions = await getData()

  return (
    <div className="flex gap-5">
      <div className="flex-1 flex flex-col gap-3">
        <Header title="Transactions">
          <Button>Recurrent</Button>
        </Header>

        <Input placeholder="Search..." />

        <div className="flex-1">
        <ScrollArea className="h-[calc(100vh_-_120px)]">
        <div className="flex flex-col gap-2">
          {transactions.map((transaction, i) => (
            <Link key={`transaction_st_${i}`} href={`/transactions/${transaction.id}`}>
            <TransactionsList transaction={transaction} />
            </Link>
          ))}</div>
          </ScrollArea>
        </div>
      </div>

      <div className="flex-1">
        {children}
      </div>
    </div>
  )
}
