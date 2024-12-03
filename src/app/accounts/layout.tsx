
import { Header } from "@/components/header"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Account } from "budio"
import Link from "next/link"

async function getData(): Promise<{
  name: string
  accounts: Account[]
}[]> {
  return [
    {
      name: 'Credits',
      accounts: [
        {
          amount: 1000,
          digits: 1234,
          id: 'de2ig8e27d23',
          limit: 1500,
          name: 'Credit Name 1'
        },
        {
          amount: 2000,
          digits: 4324,
          id: 'wuecwy8',
          limit: 2500,
          name: 'Credit Name 1'
        }
      ]
    },
    {
      name: 'Savings',
      accounts: [
        {
          amount: 1000,
          digits: 1234,
          id: 'de2ig8e27d23',
          limit: 1500,
          name: 'Savings Name 1'
        },
        {
          amount: 2000,
          digits: 4324,
          id: 'wuecwy8',
          limit: 2500,
          name: 'Savings Name 1'
        }
      ]
    },
    {
      name: 'Depository',
      accounts: [
        {
          amount: 1000,
          digits: 1234,
          id: 'de2ig8e27d23',
          limit: 1500,
          name: 'Depo Name 1'
        },
        {
          amount: 2000,
          digits: 4324,
          id: 'wuecwy8',
          limit: 2500,
          name: 'Depo Name 1'
        }
      ]
    }
    // ...
  ]
}

export default async function AccountsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await getData()

  return (
    <div>
      <Header title="Accounts" />

      <div className="flex gap-5">
        <div className="py-10 flex-1">
        <Accordion defaultValue={data.map((_, i) => `item-${i}`)} type="multiple">
          {data.map((section, i) => (
            <AccordionItem value={`item-${i}`} key={`section_${section.name}`} className="mb-3">
              <AccordionTrigger>
                <h2 className="text-2xl font-bold">
                {section.name}
                </h2>
              </AccordionTrigger>
              <AccordionContent>
                {section.accounts.map((account) => (
                  <Link href={`/accounts/${account.id}`} key={`section_${section.name}-account_${account.id}`}>
                    <button
                      className="w-full flex items-center justify-between p-2 hover:bg-muted rounded-lg duration-150"
                    >
                      <div className="flex gap-2 text-lg items-center">
                        <span>💵</span>
                        <h4 className="font-bold">{account.name}</h4>
                        <h6 className="text-sm text-card-foreground">{account.digits}</h6>
                      </div>
                      <div>
                        <h5 className="font-bold text-lg">${account.amount}</h5>
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