declare module "budio" {
  export type Categorie = {
    name: string
    icon: string
  }

  export type Transaction = {
    id: string
    title: string
    description?: string
    amount: number
    categories: Categorie[]
    recurrent?: boolean
    timestamp: Date
    created_at: Date
    updated_at?: Date
  }

  export type Account = {
    id: string
    name: string
    digits: number
    amount: number
    limit: number
  }
}
