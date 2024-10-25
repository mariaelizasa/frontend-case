import styled from "styled-components";

interface entryProps {
  entry: "CREDIT" | "DEBIT";
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
`;


const Button = styled.button.withConfig({
    shouldForwardProp: (prop) => prop !== 'active', 
  })<{ active: boolean }>`
  width: 82px;
  border-radius: 32px;
  padding: 4px;
  font-size: 16px;
  color: ${(props) => props.theme.colors.lightGray};
  background-color: ${(props) =>
    props.active ? props.theme.colors.black : props.theme.colors.white};
  color: ${(props) => (props.active ? props.theme.colors.white :  props.theme.colors.black)};
  margin: 0 5px 40px 0;
`;

const Table = styled.div`
  width: 1032px;
  border-collapse: collapse;
`;

const DateSection = styled.div`
  margin-bottom: 30px;
  font-weight: bold;
  font-size: 12px;
  line-height: 20px;
`;
const AmountGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BalanceDay = styled.p`
  font-weight: 400;
`;

const TransactionCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${(props) => props.theme.colors.lightGray};
  border-radius: 8px;
  padding: 30px;
  margin-top: 20px;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 25px;
`;

const TransactionName = styled.div<entryProps>`
  color: ${(props) =>
    props.entry === "CREDIT"
      ? props.theme.colors.paymentReceived
      : props.theme.colors.black};
  font-size: 16px;
  display: flex;
  align-items: center;
  font-weight: 400;
  line-height: 24px;
`;

const TransactionLabel = styled.div`
  color: ${(props) => props.theme.colors.gray};
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
`;

const TransactionDate = styled.div`
  font-size: 12px;
  color: ${(props) => props.theme.colors.gray};
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
`;

const Amount = styled.div<entryProps>`
  font-size: 16px;
  font-weight: bold;
  color: ${(props) =>
    props.entry === "CREDIT"
      ? props.theme.colors.paymentReceived
      : props.theme.colors.amountValue};
`;

export {
  Container,
  Table,
  DateSection,
  TransactionCard,
  Icon,
  TransactionName,
  TransactionLabel,
  TransactionDate,
  Amount,
  AmountGroup,
  BalanceDay,
  Button,
  
};
