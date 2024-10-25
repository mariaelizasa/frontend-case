import {
  BaseTransactionType,
  TransactionGroupType,
} from "../@types/Transactions";

const initialBalance = 378008;

export const getFilteredItems = (
  transactionGroup: TransactionGroupType,
  filter: "ALL" | "CREDIT" | "DEBIT"
) => {
  return filter === "ALL"
    ? transactionGroup.items
    : transactionGroup.items.filter(
        (item: BaseTransactionType) => item.entry === filter
      );
};

export const calculateUpdatedBalance = (
  filteredItems: BaseTransactionType[],
) => {
  return filteredItems.reduce((balance, item) => {
    return item.entry === "DEBIT"
      ? balance - item.amount
      : balance + item.amount;
  }, initialBalance);
};
