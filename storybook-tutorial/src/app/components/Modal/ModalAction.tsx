import { PropsWithChildren } from "react";

export const ModalAction = ({ children }: PropsWithChildren) => {
  return <div className="modal-action">{children}</div>;
};
