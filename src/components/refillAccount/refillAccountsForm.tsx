import { RefillAccountAccountRow } from "./refillAccountAccountRow"

interface Props {
  budget: number
}

export function RefillAccountsForm({ budget }: Props) {
  return (
    <div className="p-2 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-muted-foreground font-bold">Your Budget</h3>
          <span className="font-bold text-lg">${budget.toFixed(2)}</span>
        </div>
        <div>
          <h3 className="text-muted-foreground font-bold">What&apos;s left</h3>
          <span className="font-bold text-lg">${(budget-430).toFixed(2)}</span>
        </div>
      </div>

      {[1, 2].map((account, i) => (
        <RefillAccountAccountRow key={`account_name_${i}`} name="Account Name" balance={4000} />
      ))}
    </div>
  )
}