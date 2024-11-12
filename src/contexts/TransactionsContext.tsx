import { ReactNode, createContext, useEffect, useState } from "react";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  category: string;
  amount: number;
  created_at: string;
}

interface TransactionsContextType {
  transactions: Transaction[];
}

export const TransactionsContext = createContext({} as TransactionsContextType);

export function TransactionsProvider({ children }: { children: ReactNode }) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    fetch("http://localhost:3333/transactions")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTransactions(data);
      });
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}
