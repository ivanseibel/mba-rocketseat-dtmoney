import { useContext } from "react";
import { TransactionsContext } from "../contexts/TransactionsContext";

export function useSummary() {
  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "income") {
        acc.income += transaction.amount;
      } else {
        acc.expense += transaction.amount;
      }

      acc.total = acc.income - acc.expense;

      return acc;
    },
    {
      income: 0,
      expense: 0,
      total: 0,
    },
  );

  return summary;
}
