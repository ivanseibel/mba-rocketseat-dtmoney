import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import {
  PriceHightlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Website development</td>
              <td>
                <PriceHightlight variant="income">$12,000.00</PriceHightlight>
              </td>
              <td>Sales</td>
              <td>10/10/2021</td>
            </tr>
            <tr>
              <td>Energy bill</td>
              <td>
                <PriceHightlight variant="outcome">- $250.00</PriceHightlight>
              </td>
              <td>Sales</td>
              <td>10/10/2021</td>
            </tr>
            <tr>
              <td>Water bill</td>
              <td>
                <PriceHightlight variant="outcome">- $150.00</PriceHightlight>
              </td>
              <td>Sales</td>
              <td>10/10/2021</td>
            </tr>
            <tr>
              <td>Dividends from Apple</td>
              <td>
                <PriceHightlight variant="income">$540.00</PriceHightlight>
              </td>
              <td>Dividends</td>
              <td>10/10/2021</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
