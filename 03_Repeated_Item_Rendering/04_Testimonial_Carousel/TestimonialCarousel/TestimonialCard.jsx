const TestimonialCard = (props) => {
  const { testimonial } = props;

  return (
    <div className="flex flex-col w-72 m-2">
      <div className="flex flex-col bg-gradient-to-r from-orange-300 to-red-500 rounded-t-lg items-center py-4">
        <img className="w-24" src={testimonial.portrait} />
        <div className="text-xl text-white">{testimonial.name}</div>
      </div>
      <div className="flex flex-col items-center border border-neutral px-4 py-6 rounded-b-lg">
        <div className="text-amber-400 mb-4">
          {testimonial.rating}
          <i className="fa-solid fa-star ml-1" />
        </div>
        <div className="text-neutral-600 leading-relaxed">
          {testimonial.text}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
