const ErrorMessage = (props) => {
  const { message } = props;

  return (
    <div className="flex flex-col text-stone-500">
      <div className="flex items-center text-2xl text-center">
        <i className="mr-4 text-4xl text-yellow-400 fa-solid fa-triangle-exclamation" />
        <div>{message.error_message}</div>
      </div>
      <div className="mt-4 text-lg text-center">Try Refreshing?</div>
    </div>
  );
};

export default ErrorMessage;
