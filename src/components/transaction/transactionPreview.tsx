import { useTransactions } from "@/hooks/useTransactions"
import { cn } from "@/lib/utils"
import { Transaction } from "budio"

interface Props {
  transaction: Transaction
  index: number
}

export function TransactionPreview({ transaction, index }: Props) {
  const [transactions, setTransactions] = useTransactions()

  return (
    <button
      key={transaction.id}
      className={cn(
        "transactions-start flex w-full flex-col gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
        transactions.selected?.id === transaction.id && "bg-muted",
      )}
      onClick={() =>
        setTransactions({
          ...transactions,
          selected: transaction,
          selectedIndex: index,
        })
      }
    >
      <div className="flex w-full flex-col gap-1">
        <div className="transactions-center flex">
          <div className="transactions-center flex gap-2">
            <div className="font-semibold">{transaction.title}</div>
            {!transaction.recurrent && (
              <span className="flex h-2 w-2 rounded-full bg-blue-600" />
            )}
          </div>
          <div
            className={cn(
              "ml-auto text-xs",
              transactions.selected?.id === transaction.id
                ? "text-foreground"
                : "text-muted-foreground",
            )}
          >
            {/* {formatDistanceToNow(new Date(transaction.date), {
              addSuffix: true,
            })} */}
          </div>
        </div>
        <div className="text-xs font-medium">{transaction.title}</div>
      </div>
      <div className="line-clamp-2 text-xs text-muted-foreground">
        {transaction.notes?.substring(0, 300)}
      </div>
      {/* {transaction.labels.length ? (
        <div className="flex transactions-center gap-2">
          {transaction.labels.map((label) => (
            <Badge key={label} variant={getBadgeVariantFromLabel(label)}>
              {label}
            </Badge>
          ))}
        </div>
      ) : null} */}
    </button>
  )
}
