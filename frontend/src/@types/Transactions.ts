export interface TransactionsType {
  results: {
    items: {
      id: string;
      description: string;
      label: string;
      entry: "DEBIT" | "CREDIT";
      amount: number;
      name: string;
      dateEvent: string;
      status: string;
    }[];
    date: string;
  }[];
  itemsTotal: number;
}
