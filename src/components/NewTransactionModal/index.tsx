import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { CloseButton, Content, Overlay } from "./styles";

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

          <button type="submit">Create transaction</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
