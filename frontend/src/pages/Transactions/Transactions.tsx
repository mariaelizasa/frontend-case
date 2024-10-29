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
import { BaseTransactionType } from "../../@types/Transactions";
import Header from "../../components/Header/Header";
import {
  calculateUpdatedBalance,
  getFilteredItems,
} from "../../utils/transactions";

const Transactions = () => {
  const { transactions } = useTransactions();
  const [filter, setFilter] = useState<"ALL" | "CREDIT" | "DEBIT">("ALL");

  return (
    <>
      <Header />
      <Container>
        <Table>
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

          {transactions?.results.map((transactionGroup) => {
            const filteredItems = getFilteredItems(transactionGroup, filter);

            if (filteredItems.length === 0) return null;

            const updatedBalance = calculateUpdatedBalance(filteredItems);

            return (
              <DateSection key={transactionGroup.date}>
                <AmountGroup>
                  <p>
                    {new Date(`${transactionGroup.date}T00:00:00`).toLocaleDateString(
                      "pt-BR",
                      {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      }
                    )}
                  </p>
                  <BalanceDay>
                    Saldo do dia:{" "}
                    <strong>R${(updatedBalance / 100).toFixed(2)}</strong>
                  </BalanceDay>
                </AmountGroup>

                {filteredItems.map((item: BaseTransactionType) => (
                  <TransactionCard key={item.id}>
                    <TransactionName entry={item.entry}>
                      <Icon
                        src={item.entry === "CREDIT" ? arrowUpIn : arrowUpOut}
                        alt={
                          item.entry === "CREDIT"
                            ? "Arrow Up In"
                            : "Arrow Up Out"
                        }
                      />
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
    </>
  );
};

export default Transactions;
