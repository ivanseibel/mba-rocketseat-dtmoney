import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { currencyFormater, dateFormater } from "../../utils/formatter";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHightlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";
import { useContextSelector } from "use-context-selector";

export function Transactions() {
  const transactions = useContextSelector(
    TransactionsContext,
    (context) => context.transactions
  );

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions?.map((transaction) => (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceHightlight $variant={transaction.type}>
                    {currencyFormater.format(transaction.amount)}
                  </PriceHightlight>
                </td>
                <td>{transaction.category}</td>
                <td>{dateFormater.format(new Date(transaction.date))}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
