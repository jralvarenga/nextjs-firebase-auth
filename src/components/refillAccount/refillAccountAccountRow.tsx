'use client'

import { useState } from "react"

interface Props {
  name: string
  balance: number
}

export function RefillAccountAccountRow({ name, balance }: Props) {
  const [refillBalance, setRefillBalance] = useState('')

  return (
    <div className="flex items-center bg-muted rounded-lg p-3 justify-between">
      <div>
        <h4 className="font-bold">{name}</h4>
        <span className="text-muted-foreground text-sm">Balance: ${balance.toFixed(2)}</span>
      </div>
      {/* MAKE TO BE A FITTED input */}
      <div>
        {refillBalance !== '' && refillBalance !== '0' && (
          <span>$</span>
        )}
      <input value={refillBalance} onChange={(e) => setRefillBalance(e.target.value)} type="number" inputMode="numeric" className="text-left w-11 bg-inherit border-none" placeholder="$0.00" /></div>
    </div>
  )
}