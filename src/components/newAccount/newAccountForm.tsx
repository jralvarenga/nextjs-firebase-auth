"use client"

import { FormEvent, useState } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Account } from "budio"
import { Checkbox } from "../ui/checkbox"
import { Download } from "lucide-react"

export function NewAccountForm() {
  const [account, setAccount] = useState<Partial<Account>>({
    amount: "" as unknown as number,
    digits: "" as unknown as number,
    limit: "" as unknown as number,
    name: "",
    notes: "",
  })
  const [setLimit, setSetLimit] = useState(false)

  async function createAccountHandle(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <form onSubmit={createAccountHandle} className="flex flex-col gap-2">
      <div className="flex items-center justify-between gap-2">
        <input
          value={account.amount}
          onChange={(e) =>
            setAccount((dt) => ({
              ...dt,
              amount: e.target.value as unknown as number,
            }))
          }
          className="w-full border-none bg-inherit text-center font-mono text-4xl font-bold outline-none"
          placeholder="0.00"
        />
        {setLimit && (
          <>
            <span className="text-2xl">/</span>
            <input
              value={account.limit}
              onChange={(e) =>
                setAccount((dt) => ({
                  ...dt,
                  limit: e.target.value as unknown as number,
                }))
              }
              className="w-full border-none bg-inherit text-center font-mono text-4xl font-bold outline-none"
              placeholder="0.00"
            />
          </>
        )}
      </div>

      <div className="flex items-center justify-between gap-2">
        <Input
          value={account.name}
          onChange={(e) =>
            setAccount((dt) => ({
              ...dt,
              name: e.target.value,
            }))
          }
          placeholder="Account name"
          className="font-bold"
        />
        <Input
          value={account.digits}
          onChange={(e) =>
            setAccount((dt) => ({
              ...dt,
              digits: e.target.value as unknown as number,
            }))
          }
          placeholder="Last 4 digits"
          className="font-bold"
        />
      </div>
      <Textarea
        value={account.notes}
        onChange={(e) =>
          setAccount((dt) => ({
            ...dt,
            comments: e.target.value,
          }))
        }
        placeholder="Comments..."
        rows={3}
        className="resize-none font-bold"
      />

      <div className="my-3 flex items-center space-x-2">
        <Checkbox
          id="new_account_limit"
          onClick={() => setSetLimit(!setLimit)}
          checked={setLimit}
        />
        <label
          htmlFor="new_account_limit"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Set a limit for this account
        </label>
      </div>

      <Button>
        <Download />
        Save
      </Button>
    </form>
  )
}
