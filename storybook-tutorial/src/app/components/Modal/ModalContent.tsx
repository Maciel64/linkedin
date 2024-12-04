import { PropsWithChildren } from "react";

export const ModalContent = ({ children }: PropsWithChildren) => {
  return <div className="y-4">{children}</div>;
};
