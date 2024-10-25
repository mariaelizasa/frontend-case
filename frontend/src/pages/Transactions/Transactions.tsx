import { useTransactions } from "../../context/transactionsContext";
import arrowUpIn from "../../assets/arrow-up-in.png";
import arrowUpOut from "../../assets/arrow-up-out.png";
import {
  Amount,
  AmountGroup,
  BalanceDay,
  Button,
  Container,
  DateSection,
  Icon,
  Table,
  TransactionCard,
  TransactionDate,
  TransactionLabel,
  TransactionName,
} from "./style";
import { useState } from "react";
import {
  BaseTransactionType,
  TransactionGroupType,
} from "../../@types/Transactions";

const Transactions = () => {
  const { transactions } = useTransactions();
  const [filter, setFilter] = useState<"ALL" | "CREDIT" | "DEBIT">("ALL");
  const initialBalance = 378008;

  const getFilteredItems = (transactionGroup: TransactionGroupType) => {
    if (filter === "ALL") {
      return transactionGroup.items;
    }
    return transactionGroup.items.filter(
      (item: BaseTransactionType) => item.entry === filter
    );
  };

  return (
    <Container>
      <Table>
        <>
          <Button
            active={filter === "DEBIT"}
            onClick={() => setFilter("DEBIT")}
          >
            Débito
          </Button>
          <Button
            active={filter === "CREDIT"}
            onClick={() => setFilter("CREDIT")}
          >
            Crédito
          </Button>
        </>
        {transactions?.results.map((transactionGroup) => {
          const filteredItems = getFilteredItems(transactionGroup);

          let updatedBalance = initialBalance;
          filteredItems.forEach((item: BaseTransactionType) => {
            if (item.entry === "DEBIT") {
              updatedBalance -= item.amount;
            } else if (item.entry === "CREDIT") {
              updatedBalance += item.amount;
            }
          });

          if (filteredItems.length === 0) return null;

          return (
            <DateSection key={transactionGroup.date}>
              <AmountGroup>
                <p>
                  {new Date(transactionGroup.date).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
                <BalanceDay>
                  Saldo do dia:{" "}
                  <strong>R${(updatedBalance / 100).toFixed(2)}</strong>
                </BalanceDay>
              </AmountGroup>

              {filteredItems.map((item: BaseTransactionType) => (
                <TransactionCard key={item.id}>
                  <TransactionName entry={item.entry}>
                    {item.entry === "CREDIT" ? (
                      <Icon src={arrowUpIn} alt="Arrow Up In" />
                    ) : (
                      <Icon src={arrowUpOut} alt="Arrow Up Out" />
                    )}
                    {item.name}
                  </TransactionName>
                  <TransactionLabel>{item.label}</TransactionLabel>
                  <TransactionDate>
                    {new Date(item.dateEvent)
                      .toLocaleString("pt-BR", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })
                      .replace(",", " -")}
                  </TransactionDate>
                  <Amount entry={item.entry}>
                    {item.entry === "CREDIT" ? "+" : "-"} R${" "}
                    {(item.amount / 100).toFixed(2)}
                  </Amount>
                </TransactionCard>
              ))}
            </DateSection>
          );
        })}
      </Table>
    </Container>
  );
};

export default Transactions;
