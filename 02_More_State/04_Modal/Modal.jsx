const Modal = (props) => {
  const { onClose } = props;
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-stone-700/75 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white rounded-lg h-80 w-80 flex flex-col justify-center items-center">
        <div>behold modal</div>
        <button onClick={onClose}>Click here to close</button>
      </div>
    </div>
  );
};

export default Modal;
