import { DataTable } from "@/components/dataTable/table"
import { Header } from "@/components/header"
import { columns } from "@/constants/transactions/columns"
import { Transaction } from "budio"

async function getData(): Promise<Transaction[]> {
  return [
    {
      id: "728ed52f",
      amount: 100,
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
  const data = await getData()

  return (
    <div>
      <Header title="Transactions" />

      <div className="flex gap-5">
        <div className="flex-1 py-10">
          <DataTable columns={columns} data={data} />
        </div>
        {children}
      </div>
    </div>
  )
}
