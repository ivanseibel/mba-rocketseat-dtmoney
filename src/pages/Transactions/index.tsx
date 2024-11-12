import { useContext } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHightlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

export function Transactions() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceHightlight variant={transaction.type}>
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "EUR",
                    }).format(transaction.amount)}
                  </PriceHightlight>
                </td>
                <td>{transaction.category}</td>
                <td>{new Date(transaction.created_at).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
