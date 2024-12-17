"use client"

import { useState } from "react"

interface Props {
  name: string
  balance: number
}

export function RefillAccountAccountRow({ name, balance }: Props) {
  const [refillBalance, setRefillBalance] = useState("")

  return (
    <div className="flex items-center justify-between rounded-lg bg-muted p-3">
      <div>
        <h4 className="font-bold">{name}</h4>
        <span className="text-sm text-muted-foreground">
          Balance: ${balance.toFixed(2)}
        </span>
      </div>
      {/* MAKE TO BE A FITTED input */}
      <div>
        {refillBalance !== "" && refillBalance !== "0" && <span>$</span>}
        <input
          value={refillBalance}
          onChange={(e) => setRefillBalance(e.target.value)}
          type="number"
          inputMode="numeric"
          className="w-11 border-none bg-inherit text-left"
          placeholder="$0.00"
        />
      </div>
    </div>
  )
}
