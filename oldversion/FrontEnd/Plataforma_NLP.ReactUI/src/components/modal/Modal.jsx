import ReactDOM from 'react-dom';

function Modal({ show, title, subtitle, onClose, children }) {
  const modal = show ? (
    <div className="fixed left-0 top-0 right-0 bottom-0 flex items-center justify-center z-[1000] backdrop-filter backdrop-blur-md bg-opacity-5">
      <div className="px-5 text-center max-h-[95vh] max-w-[80vw] bg-neutral-200 rounded-lg ring-1 shadow-xl shadow-stone-500/50 animate-fadeIn overflow-auto">
        <div className="mt-5">
          <h3 className="font-bold text-xl">{title}</h3>
          <h4 className="text-xl mx-5">{subtitle}</h4>
        </div>
        <div className="p-5 border-t-2 border-b-2 border-black  justify-center overflow-auto">{children}</div>
        <div>
          <button className="px-5 py-1 m-5 text-xl font-bold rounded-xl hover:bg-red-600" onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  ) : null;
  return ReactDOM.createPortal(modal, document.getElementById('overlay'));
}

export default Modal;
