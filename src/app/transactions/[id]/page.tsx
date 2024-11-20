import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Calendar, EllipsisVertical, X } from "lucide-react"
import Link from "next/link"

export default async function TransactionInfoPage({
  // params,
}: {
  params: Promise<{ id: string }>
}) {
  // const { id } = await params

  return (
    <div className="flex-1 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <Link href={'/transactions'}>
          <Button variant='ghost'>
              <X />
          </Button>
        </Link>

        <h6 className="flex items-center gap-3 text-card-foreground">
          <Calendar size={14} />
          <span className="text-sm font-bold">
            Tuesday, Nov 19, 2024
          </span>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={'ghost'} size={'sm'}>
                <EllipsisVertical />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Change</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </h6>
      </div>

      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">
          Transaction name
        </h2>
        <h4 className="text-3xl font-bold">$102.99</h4>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex flex-col gap-2">
          <span className="text-card-foreground font-bold">Category</span>
          <Badge className="text-sm rounded-full">🥶 Badge</Badge>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-card-foreground font-bold">Account</span>
          <Badge className="text-sm">Account name</Badge>
        </div>
      </div>
    </div>
  )
}