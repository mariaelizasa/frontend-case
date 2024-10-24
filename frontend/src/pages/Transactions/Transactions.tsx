import { useTransactions } from "../../context/transactionsContext";

const Transactions = () => {
  const { transactions } = useTransactions();
  console.log(transactions, "teste");
  return <div>Transactions</div>;
};

export default Transactions;
