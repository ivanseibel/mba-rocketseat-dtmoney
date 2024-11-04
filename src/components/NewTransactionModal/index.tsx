import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from "./styles";

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title asChild>New transaction</Dialog.Title>

        <CloseButton asChild>
          <X size={24} />
        </CloseButton>

        <form action="">
          <input type="text" placeholder="Title" />
          <input type="number" placeholder="Value" />
          <input type="text" placeholder="Category" />

          <TransactionType>
            <TransactionTypeButton type="button" variant="income">
              <ArrowCircleUp size={24} />
              Income
            </TransactionTypeButton>
            <TransactionTypeButton type="button" variant="outcome">
              <ArrowCircleDown size={24} />
              Outcome
            </TransactionTypeButton>
          </TransactionType>

          <button type="submit">Create transaction</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
