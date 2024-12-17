import { Navbar } from "@/components/navbar"
import { NavSearch } from "@/components/navSearch"
import { UserAvatar } from "@/components/userAvatar"
import { NewTransaction } from "@/components/newTransaction"
import { Button } from "@/components/ui/button"
import { AuthWrapper } from "@/providers/authWrapper"
import { getAuthenticatedAppForUser } from "@/firebase/serverApp"
import { redirect } from "next/navigation"
import { User } from "firebase/auth"

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
    <AuthWrapper currentUser={currentUser?.toJSON() as User | null}>
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          {/* <TeamSwitcher /> */}
          <Navbar className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <NavSearch />
            <UserAvatar />
          </div>
        </div>
      </div>

      <div className="flex-1 space-y-4 p-8 pt-6">{children}</div>

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
  )
}
