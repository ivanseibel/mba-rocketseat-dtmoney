import { zodResolver } from "@hookform/resolvers/zod";
import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from "./styles";
import { useContextSelector } from "use-context-selector";

const newTransactionSchema = z.object({
  description: z.string(),
  amount: z.number(),
  category: z.string(),
  type: z.enum(["income", "expense"]),
});

type NewTransactionFormData = z.infer<typeof newTransactionSchema>;

export function NewTransactionModal() {
  const createNewTransaction = useContextSelector(TransactionsContext, (context) => context.createNewTransaction);

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<NewTransactionFormData>({
    resolver: zodResolver(newTransactionSchema),
    defaultValues: {
      type: "income",
    },
  });

  async function handleCreateTransaction(data: NewTransactionFormData) {
    await createNewTransaction(data);
    reset();
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <VisuallyHidden.Root>
          <Dialog.Title>New transaction</Dialog.Title>
          <Dialog.Description>
            Fill the form below to create a new transaction
          </Dialog.Description>
        </VisuallyHidden.Root>

        <CloseButton asChild>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateTransaction)}>
          <input
            type="text"
            placeholder="Description"
            {...register("description")}
          />
          <input
            type="number"
            placeholder="Amount"
            {...register("amount", { valueAsNumber: true })}
          />
          <input type="text" placeholder="Category" {...register("category")} />

          <Controller
            control={control}
            name="type"
            render={({ field }) => (
              <TransactionType
                onValueChange={field.onChange}
                value={field.value}
              >
                <TransactionTypeButton
                  type="button"
                  $variant="income"
                  value="income"
                >
                  <ArrowCircleUp size={24} />
                  Income
                </TransactionTypeButton>
                <TransactionTypeButton
                  type="button"
                  $variant="expense"
                  value="expense"
                >
                  <ArrowCircleDown size={24} />
                  Expense
                </TransactionTypeButton>
              </TransactionType>
            )}
          />

          <button type="submit" disabled={isSubmitting}>
            Create transaction
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
