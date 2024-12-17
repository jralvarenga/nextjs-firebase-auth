import { RefillAccountAccountRow } from "./refillAccountAccountRow"

interface Props {
  budget: number
}

export function RefillAccountsForm({ budget }: Props) {
  return (
    <div className="flex flex-col gap-3 p-2">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-bold text-muted-foreground">Your Budget</h3>
          <span className="text-lg font-bold">${budget.toFixed(2)}</span>
        </div>
        <div>
          <h3 className="font-bold text-muted-foreground">What&apos;s left</h3>
          <span className="text-lg font-bold">
            ${(budget - 430).toFixed(2)}
          </span>
        </div>
      </div>

      {[1, 2].map((account, i) => (
        <RefillAccountAccountRow
          key={`account_name_${i}`}
          name="Account Name"
          balance={4000}
        />
      ))}
    </div>
  )
}
