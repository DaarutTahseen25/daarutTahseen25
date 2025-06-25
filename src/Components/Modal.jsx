import { X } from "lucide-react";
import { useClickOutside } from "../hooks/useClickOutside";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useClickOutside(close);

  if (name !== openName) return null;

  return createPortal(
    <div className="fixed inset-0 w-full h-screen bg-black/70 backdrop-blur-sm z-[1000] transition-all duration-500">
      <Modal ref={ref}>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </Modal>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
