import { Navbar } from "@/components/navbar";
import { NavSearch } from "@/components/navSearch";
import { UserAvatar } from "@/components/userAvatar";
import { NewTransaction } from "@/components/newTransaction";
import { Button } from "@/components/ui/button";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
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

            <div className="flex-1 space-y-4 p-8 pt-6">
              {children}
            </div>

            <NewTransaction
              trigger={
                <div className="fixed bottom-8 right-8">
                <Button className="rounded-full w-14 h-14" >
                  <span className="text-4xl">+</span>
                </Button>
              </div>
              }
            />
            </>
  );
}
