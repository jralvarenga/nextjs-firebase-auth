declare module 'budio' {
  export type Transaction = {
    id: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    email: string
  }

  export type Account = {
    id: string
    name: string
    digits: number
    amount: number
    limit: number
  }
}