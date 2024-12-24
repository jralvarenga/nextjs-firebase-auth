import { Header } from "@/components/header"
import { TransactionsList } from "@/components//transaction/transactionsList"
import { Transaction } from "budio"
import { TransactionInfo } from "@/components/transaction/transactionInfo"

async function getData(): Promise<Transaction[]> {
  return [
    {
      id: "728ed52f",
      amount: 100,
      account_id: "",
      categories: ["💰 Emergencies"],
      created_at: new Date(),
      timestamp: new Date(),
      title: "Testing",
    },
    {
      id: "vhwouhuovw",
      amount: 100,
      account_id: "",
      categories: ["💰 Emergencies"],
      created_at: new Date(),
      timestamp: new Date(),
      title: "Testing 2",
    },
    {
      id: "cwicrwibncr",
      amount: 100,
      account_id: "",
      categories: ["💰 Emergencies"],
      created_at: new Date(),
      timestamp: new Date(),
      title: "Testing 3",
    },
  ]
}

export default async function TransactionsPage() {
  const transactions = await getData()

  return (
    <div className="flex">
      <div className="flex flex-1 flex-col gap-3 p-4 pb-0">
        <Header title="Transactions" />

        <TransactionsList initialTransactions={transactions} />
      </div>

      <div className="flex-1 border-l border-l-muted">
        <TransactionInfo />
      </div>
    </div>
  )
}
