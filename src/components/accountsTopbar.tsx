"use client"

import { Plus } from "lucide-react"
import { Button } from "./ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer"
import { ReactNode, useState } from "react"
import { useMediaQuery } from "@/hooks/useMediaQuery"
import { Input } from "./ui/input"
import { NewAccountForm } from "./newAccountForm"

export function AccountsTopbar() {
  const [open, setOpen] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  function DialogTriggerButton() {
    return (
      <Button onClick={() => setOpen(true)}>
        <Plus />
        Create Account
      </Button>
    )
  }

  function Topbar({ children }: { children: ReactNode }) {
    return (
      <div className="flex w-full items-center justify-between gap-3">
        <Input placeholder="Search an account..." />
        {children}
      </div>
    )
  }

  const dialogTitle = "New Account"
  const dialogDescription = "New account to save things"

  if (isDesktop) {
    return (
      <Topbar>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <DialogTriggerButton />
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{dialogTitle}</DialogTitle>
              <DialogDescription>{dialogDescription}</DialogDescription>
            </DialogHeader>

            <NewAccountForm />
          </DialogContent>
        </Dialog>
      </Topbar>
    )
  }

  return (
    <Topbar>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <DialogTriggerButton />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="text-left">
            <DrawerTitle>{dialogTitle}</DrawerTitle>
            <DrawerDescription>{dialogDescription}</DrawerDescription>
          </DrawerHeader>

          <div className="p-3">
            <NewAccountForm />
          </div>
          <DrawerFooter className="pt-2">
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Topbar>
  )
}
