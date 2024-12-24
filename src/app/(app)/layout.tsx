import { AuthWrapper } from "@/providers/authWrapper"
import { getAuthenticatedAppForUser } from "@/firebase/serverApp"
import { redirect } from "next/navigation"
import { User } from "firebase/auth"
import { AppSidebar } from "@/components/appSidebar"
import { NewTransaction } from "@/components/transaction/newTransaction"
import { Button } from "@/components/ui/button"
import { Providers } from "@/providers/providers"

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { currentUser } = await getAuthenticatedAppForUser()

  if (!currentUser) {
    return redirect("/login")
  }

  return (
    <Providers>
      <AuthWrapper currentUser={currentUser?.toJSON() as User | null}>
        <AppSidebar />
        <div className="flex-1 space-y-4">{children}</div>

        <NewTransaction
          trigger={
            <div className="fixed bottom-8 right-8">
              <Button className="h-14 w-14 rounded-full">
                <span className="text-4xl">+</span>
              </Button>
            </div>
          }
        />
      </AuthWrapper>
    </Providers>
  )
}
