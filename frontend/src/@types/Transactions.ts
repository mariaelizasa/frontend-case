export interface BaseTransactionType {
  id: string;
  description: string;
  label: string;
  entry: "DEBIT" | "CREDIT";
  amount: number;
  name: string;
  dateEvent: string;
  status: string;
}

export interface TransactionGroupType {
  items: BaseTransactionType[];
  date: string;
}

export interface TransactionsType {
  results: TransactionGroupType[];
  itemsTotal: number;
}
