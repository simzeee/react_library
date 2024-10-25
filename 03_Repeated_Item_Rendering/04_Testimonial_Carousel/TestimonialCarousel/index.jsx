import { useState } from "react";
import testimonials from "../testimonials";
import TestimonialCard from "./TestimonialCard";

const TestimonialCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const testimonialCards = testimonials
    .slice(startIndex, startIndex + 3)
    .map((testimonial, idx) => (
      <TestimonialCard testimonial={testimonial} key={idx} />
    ));
  return (
    <div className="flex items-center">
      <button
        onClick={() => {
          if (startIndex > 0) {
            setStartIndex(startIndex - 1);
          }
        }}
      >
        <i className="fa-regular fa-square-chevron-left text-2xl text-orange-500" />
      </button>
      <div className="flex flex-wrap justify-center m-4">
        {testimonialCards}
      </div>
      <button
        onClick={() => {
          if (startIndex < testimonials.length - 3) {
            setStartIndex(startIndex + 1);
          }
        }}
      >
        <i className="fa-regular fa-square-chevron-right text-2xl text-orange-500" />
      </button>
    </div>
  );
};

export default TestimonialCarousel;
