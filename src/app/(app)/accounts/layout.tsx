import { Header } from "@/components/header"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Account } from "budio"
import { Plus } from "lucide-react"
import Link from "next/link"

async function getData(): Promise<
  {
    name: string
    accounts: Account[]
  }[]
> {
  return [
    {
      name: "Credits",
      accounts: [
        {
          amount: 1000,
          digits: 1234,
          id: "de2ig8e27d23",
          limit: 1500,
          name: "Credit Name 1",
        },
        {
          amount: 2000,
          digits: 4324,
          id: "wuecwy8",
          limit: 2500,
          name: "Credit Name 1",
        },
      ],
    },
    {
      name: "Savings",
      accounts: [
        {
          amount: 1000,
          digits: 1234,
          id: "de2ig8e27d23",
          limit: 1500,
          name: "Savings Name 1",
        },
        {
          amount: 2000,
          digits: 4324,
          id: "wuecwy8",
          limit: 2500,
          name: "Savings Name 1",
        },
      ],
    },
    {
      name: "Depository",
      accounts: [
        {
          amount: 1000,
          digits: 1234,
          id: "de2ig8e27d23",
          limit: 1500,
          name: "Depo Name 1",
        },
        {
          amount: 2000,
          digits: 4324,
          id: "wuecwy8",
          limit: 2500,
          name: "Depo Name 1",
        },
      ],
    },
    // ...
  ]
}

export default async function AccountsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const data = await getData()

  return (
    <div>
      <Header title="Accounts" />

      <div className="flex gap-5">
        <div className="flex-1 py-10">
          <div className="flex w-full items-center justify-between gap-3">
            <Input placeholder="Search an account..." />
            <Button>
              <Plus />
              Create Account
            </Button>
          </div>
          <Accordion
            defaultValue={data.map((_, i) => `item-${i}`)}
            type="multiple"
          >
            {data.map((section, i) => (
              <AccordionItem
                value={`item-${i}`}
                key={`section_${section.name}`}
                className="mb-3"
              >
                <AccordionTrigger>
                  <h2 className="text-2xl font-bold">{section.name}</h2>
                </AccordionTrigger>
                <AccordionContent>
                  {section.accounts.map((account) => (
                    <Link
                      href={`/accounts/${account.id}`}
                      key={`section_${section.name}-account_${account.id}`}
                    >
                      <button className="flex w-full items-center justify-between rounded-lg p-2 duration-150 hover:bg-muted">
                        <div className="flex items-center gap-2 text-lg">
                          <span>💵</span>
                          <h4 className="font-bold">{account.name}</h4>
                          <h6 className="text-sm text-card-foreground">
                            {account.digits}
                          </h6>
                        </div>
                        <div>
                          <h5 className="text-lg font-bold">
                            ${account.amount}
                          </h5>
                        </div>
                      </button>
                    </Link>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        {children}
      </div>
    </div>
  )
}
