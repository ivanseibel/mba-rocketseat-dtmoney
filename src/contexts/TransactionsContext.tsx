import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../libs/axios";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "expense";
  category: string;
  amount: number;
  date: string;
}

interface TransactionsContextType {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
  createNewTransaction: (transaction: CreateTransactionData) => Promise<void>;
}

interface CreateTransactionData {
  description: string;
  type: "income" | "expense";
  category: string;
  amount: number;
}

export const TransactionsContext = createContext({} as TransactionsContextType);

export function TransactionsProvider({ children }: { children: ReactNode }) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function fetchTransactions(query?: string) {
    const response = await api.get("/transactions", {
      params: {
        q: query,
        _sort: "date",
        _order: "desc",
      },
    });

    const data = response.data;

    setTransactions(data);
  }

  async function createNewTransaction(transaction: CreateTransactionData) {
    const response = await api.post("/transactions", {
      ...transaction,
      category: transaction.category.toLowerCase(),
      date: new Date(),
    });

    const data = response.data;

    setTransactions([data, ...transactions]);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createNewTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
