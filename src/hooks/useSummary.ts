import { TransactionsContext } from "../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";

export function useSummary() {
  const transactions = useContextSelector(
    TransactionsContext,
    (context) => context.transactions,
  );
  
  const summary = transactions?.reduce(
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
