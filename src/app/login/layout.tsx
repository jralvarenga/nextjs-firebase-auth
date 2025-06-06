import { LoginWith } from "@/components/loginWith"
import { getAuthenticatedAppForUser } from "@/firebase/serverApp"
import Link from "next/link"
import { redirect } from "next/navigation"

export default async function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { currentUser } = await getAuthenticatedAppForUser()

  if (currentUser) {
    return redirect("/")
  }

  return (
    <div className="h-screen w-full">
      <div className="md:hidden">
        <h2>Budio</h2>
      </div>
      <div className="container relative hidden h-full flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            Budio
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium eum laboriosam ut? Nulla omnis impedit distinctio
                quas ad sed rerum.
              </p>
              <footer className="text-sm">Rigo Alvarenga</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Enter to budio
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to enter or create your account
              </p>
            </div>
            {children}
            <LoginWith />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/login/register"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/login/register"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
      {/* {children} */}
    </div>
  )
}
