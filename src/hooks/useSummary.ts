import { useMemo } from "react";
import { useContextSelector } from "use-context-selector";
import { TransactionsContext } from "../contexts/TransactionsContext";

export function useSummary() {
  const transactions = useContextSelector(
    TransactionsContext,
    (context) => context.transactions,
  );

  const summary = useMemo(() => {
    return transactions?.reduce(
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
  }, [transactions]);

  return summary;
}
