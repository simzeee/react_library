const ErrorMessage = (props) => {
  const { message } = props;
  return (
    <div className="flex items-center text-zinc-500">
      <i className="m-2 text-4xl text-yellow-500 fa-regular fa-triangle-exclamation" />
      <div>{message}</div>
    </div>
  );
};

export default ErrorMessage;
