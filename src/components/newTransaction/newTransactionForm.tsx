"use client"

import { useState } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Transaction } from "budio"
import { Textarea } from "../ui/textarea"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select"
import { Download } from "lucide-react"
import { Checkbox } from "../ui/checkbox"

export function NewTransactionForm() {
  const [transaction, setTransaction] = useState<Partial<Transaction>>({
    amount: "" as unknown as number,
    categories: [],
    title: "",
    recurrent: false,
    notes: "",
  })
  const [selectedAccount, setSelectedAccount] = useState("")
  const [selectedCategorie, setSelectedCategorie] = useState("")
  const [recurrent, setRecurrent] = useState(false)

  return (
    <form className="flex flex-col gap-2">
      <div className="flex items-center justify-between gap-2">
        <input
          value={transaction.amount}
          onChange={(e) =>
            setTransaction((dt) => ({
              ...dt,
              amount: e.target.value as unknown as number,
            }))
          }
          className="w-full border-none bg-inherit text-center font-mono text-4xl font-bold outline-none"
          placeholder="0.00"
        />
      </div>

      <div className="flex items-center justify-between gap-2">
        <Input
          value={transaction.title}
          onChange={(e) =>
            setTransaction((dt) => ({
              ...dt,
              title: e.target.value,
            }))
          }
          placeholder="Account name"
          className="font-bold"
        />
      </div>
      <div className="flex items-center justify-between gap-2">
        <Select
          onValueChange={(value) => setSelectedCategorie(value)}
          defaultValue={selectedCategorie}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Choose a categorie..." />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Depository</SelectLabel>
              <SelectItem value="es1">Account name 1</SelectItem>
              <SelectItem value="est2">Account name 2</SelectItem>
              <SelectItem value="est3">Account name 3</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Savings</SelectLabel>
              <SelectItem value="es4">Account name 1</SelectItem>
              <SelectItem value="es5">Account name 2</SelectItem>
              <SelectItem value="es6">Account name 3</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Credits</SelectLabel>
              <SelectItem value="es7">Account name 1</SelectItem>
              <SelectItem value="es8">Account name 2</SelectItem>
              <SelectItem value="es9">Account name 3</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select
          onValueChange={(value) => setSelectedAccount(value)}
          defaultValue={selectedAccount}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Choose an account..." />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Depository</SelectLabel>
              <SelectItem value="es1">Account name 1</SelectItem>
              <SelectItem value="est2">Account name 2</SelectItem>
              <SelectItem value="est3">Account name 3</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Savings</SelectLabel>
              <SelectItem value="es4">Account name 1</SelectItem>
              <SelectItem value="es5">Account name 2</SelectItem>
              <SelectItem value="es6">Account name 3</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Credits</SelectLabel>
              <SelectItem value="es7">Account name 1</SelectItem>
              <SelectItem value="es8">Account name 2</SelectItem>
              <SelectItem value="es9">Account name 3</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <Textarea
        value={transaction.notes}
        onChange={(e) =>
          setTransaction((dt) => ({
            ...dt,
            comments: e.target.value,
          }))
        }
        placeholder="Notes..."
        rows={3}
        className="resize-none font-bold"
      />
      <div className="my-3 flex items-center space-x-2">
        <Checkbox
          id="new_account_limit"
          onClick={() => setRecurrent(!recurrent)}
          checked={recurrent}
        />
        <label
          htmlFor="new_account_limit"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Set as recurrent
        </label>
      </div>

      <Button>
        <Download />
        Save
      </Button>
    </form>
  )
}
