const Modal = (props) => {
  const { open, onClose, children } = props;
  if (!open) return null;
  return (
    <div className="bg-black bg-opacity-50 fixed top-0 left-0 right-0 w-full h-full flex items-center justify-center">
      <div
        className="lg:w-[60%] lg:h-[80vh]  w-full fixed top-1/2 left-1/2 flex flex-col
            -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg p-6"
      >
        <button
          className="absolute right-4 top-4 w-8 h-8  hover:bg-slate-600 flex items-center justify-center rounded-full text-red-500"
          onClick={onClose}
        >
          X
        </button>
        <div className="flex flex-row justify-between w-full">
          <header>Modal Header</header>
        </div>
        <section className="mt-4">{children}</section>
      </div>
    </div>
  );
};

export default Modal;
