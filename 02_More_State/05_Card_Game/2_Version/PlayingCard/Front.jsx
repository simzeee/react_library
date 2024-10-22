import clsx from "clsx";

const Front = (props) => {
  const { value, color, icon } = props;
  return (
    <div
      className={clsx(
        "rounded-lg border-4 border-black w-40 h-56 m-4 p-2 flex flex-col justify-between text-4xl items-center",
        color
      )}
    >
      <div className="w-full">{value}</div>
      <i className={clsx("fa-solid", icon)}></i>
      <div className="w-full flex justify-end">{value}</div>
    </div>
  );
};

export default Front;
