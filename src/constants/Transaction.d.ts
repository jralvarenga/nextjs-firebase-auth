export type Transaction = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}