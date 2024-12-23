import { cn } from "@/lib/utils"
import { Transaction } from "budio"

interface Props {
  transaction: Transaction
}

export function TransactionsList({ transaction }: Props) {
  return (
    <button
      key={transaction.id}
      className={cn(
        "flex flex-col transactions-start gap-2 rounded-lg border p-3 text-left text-sm w-full transition-all hover:bg-accent",
        // mail.selected === transaction.id && "bg-muted"
      )}
      // onClick={() =>
      //   setMail({
      //     ...mail,
      //     selected: transaction.id,
      //   })
      // }
    >
      <div className="flex w-full flex-col gap-1">
        <div className="flex transactions-center">
          <div className="flex transactions-center gap-2">
            <div className="font-semibold">{transaction.title}</div>
            {!transaction.recurrent && (
              <span className="flex h-2 w-2 rounded-full bg-blue-600" />
            )}
          </div>
          <div
            className={cn(
              "ml-auto text-xs",
              // mail.selected === transaction.id
              //   ? "text-foreground"
              //   : "text-muted-foreground"
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