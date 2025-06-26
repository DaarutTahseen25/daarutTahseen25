import {
  cloneElement,
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
} from "react";
import { createPortal } from "react-dom";
import { useClickOutside } from "../hooks/useClickOutside";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const open = setOpenName;
  const close = () => setOpenName("");

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, {
    onClick: () => open(opensWindowName),
  });
}

function Window({ children, name }) {
  const { openName, close, open } = useContext(ModalContext);
  const ref = useClickOutside(close);

  if (name !== openName) return null;

  return createPortal(
    <div className="fixed inset-0 w-full h-screen bg-black/70 z-[1000] transition-all duration-500">
      <div
        id="modal-window"
        className="fixed  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
        ref={ref}
      >
        <div className="max-w-full">
          {cloneElement(children, {
            onCloseModal: close,
            openModal: open,
          })}
        </div>
      </div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
