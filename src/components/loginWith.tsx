"use client"

import { signInWithGoogle } from "@/firebase/auth"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"

export function LoginWith() {
  const router = useRouter()

  async function handleGoogleLogin() {
    try {
      await signInWithGoogle()
      router.push("/")
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>

      <Button onClick={handleGoogleLogin} variant="outline" type="button">
        Google
      </Button>
    </>
  )
}
