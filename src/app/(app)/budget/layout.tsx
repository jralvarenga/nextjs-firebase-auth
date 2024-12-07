import { Header } from "@/components/header";
import { RefillAccounts } from "@/components/refillAccounts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function BudgetLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header title="Budget" />

      <div className="flex gap-5 mt-5">
        <div className="flex-1">
          <RefillAccounts budget={1000} />
          <div className="max-w-lg">
            <div className="w-full mt-5 flex items-center justify-between">
              <h3 className="text-2xl font-bold">Categories</h3>
              <Button variant={"outline"}>
                <Plus />
                Create new category
              </Button>
            </div>

            <div className=" mt-3">
              <Input placeholder="Search category..." />
            </div>

            <div className="flex-1 flex flex-wrap gap-2 mt-4">
              {[
                '🛒 Super',
                '🐱 Pet',
                'Salidas',
                '📺 Subscripciones',
                '💰 Deudas'
              ].map((category, i) => (
                <Link key={`category_${i}`} href={`/budget/category/${i}`}>
                  <Badge className="text-sm">
                    {category}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
        </div>
       
        {children}
      </div>
    </div>
  )
}