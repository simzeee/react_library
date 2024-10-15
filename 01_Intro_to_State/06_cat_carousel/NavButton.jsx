const NavButton = (props) => {
  const { icon, onClick, show } = props;

  if (show == false) {
    return null;
  }

  return (
    <button
      onClick={onClick}
      className="bg-green-400 text-green-200 rounded-md"
    >
      <i className={`fa-solid m-2 text-3xl ${icon}`}></i>
    </button>
  );
};

export default NavButton;
