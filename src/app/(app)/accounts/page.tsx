import { Header } from "@/components/header"
import { Account } from "budio"

async function getData(): Promise<
Account[]
> {
  return [
    
    {
      amount: 1000,
      digits: 1234,
      created_at: new Date(),
      id: "de2ig8e27d23",
      limit: 1500,
      name: "Credit Name 1",
      type: 'credit_card'
    },
    {
      amount: 2000,
      digits: 4324,
      created_at: new Date(),
      id: "wuecwy8",
      limit: 2500,
      name: "Credit Name 1",
      type: 'credit_card'
    },
    {
      amount: 1000,
      digits: 1234,
      created_at: new Date(),
      id: "de2ig8e27d23",
      name: "Savings Name 1",
      type: 'savings'
    },
    {
      amount: 2000,
      digits: 4324,
      id: "wuecwy8",
      created_at: new Date(),
      limit: 2500,
      name: "Savings Name 1",
      type: 'savings'
    },
    {
      amount: 1000,
      digits: 1234,
      created_at: new Date(),
      id: "de2ig8e27d23",
      name: "Depo Name 1",
      type: 'depository'
    },
    {
      amount: 2000,
      digits: 4324,
      created_at: new Date(),
      id: "wuecwy8",
      name: "Depo Name 1",
      type: 'depository'
    },
    // ...
  ]
}

export default async function AccountsPage() {
  const data = await getData()

  return (
    <div className="flex">
      <div className="flex flex-1 flex-col gap-3 p-4 pb-0">
        <Header title="accounts" />

        <div>xd</div>
      </div>

      <div className="flex-1 border-l border-l-muted">
        xd
      </div>
    </div>
  )
}
