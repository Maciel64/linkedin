import { PropsWithChildren } from "react";

export const ModalTitle = ({ children }: PropsWithChildren) => {
  return <h3 className="font-bold text-lg">{children}</h3>;
};
