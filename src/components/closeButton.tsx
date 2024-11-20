'use client'

import { X } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

/**
 * Renders an x to close a page (go back)
 */
export function CloseButton() {
  const router = useRouter()

  return (
    <Button variant='ghost' onClick={() => router.back()}>
      <X />
    </Button>
  )
}