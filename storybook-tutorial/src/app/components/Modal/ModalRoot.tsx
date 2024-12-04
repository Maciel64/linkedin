import { MutableRefObject, PropsWithChildren } from "react";

interface ModalRootProps extends PropsWithChildren {
  modalRef: MutableRefObject<HTMLDialogElement | null>;
  className?: string;
}

export const ModalRoot = ({
  modalRef,
  children,
  className,
}: ModalRootProps) => {
  return (
    <dialog className="modal" ref={modalRef}>
      <div className={`modal-box ${className}`}>{children}</div>
    </dialog>
  );
};
