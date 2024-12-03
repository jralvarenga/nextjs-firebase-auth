import { DataTable } from "@/components/dataTable/table"
import { Header } from "@/components/header"
import { columns } from "@/constants/transactions/columns"
import { Transaction } from "budio";

async function getData(): Promise<Transaction[]> {
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },{
      id: "dssqwew",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },{
      id: "fewhiufewyu",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },{
      id: "fvrehwife2ybe",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },{
      id: "vofuhigyiu",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ]
}

export default async function TransactionsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await getData()

  return (
    <div>
      <Header title="Transactions" />

      <div className="flex gap-5">
        <div className="py-10 flex-1">
          <DataTable columns={columns} data={data} />
        </div>
        {children}
      </div>
    </div>
  )
}