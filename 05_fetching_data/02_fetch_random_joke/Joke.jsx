const Joke = (props) => {
  const { joke, showAnswer } = props;
  return (
    <div className="p-4 flex flex-col items-center ">
      <div className="text-3xl text-gray-600">{joke.question}</div>
      {showAnswer && (
        <div className="text-lg mt-8 text-blue-500">{joke.answer}</div>
      )}
    </div>
  );
};

export default Joke;
