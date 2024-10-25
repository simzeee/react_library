import testimonials from "./testimonials";
import TestimonialCard from "./TestimonialCarousel/TestimonialCard";
import TestimonialCarousel from "./TestimonialCarousel";

const App = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center w-full max-w-5xl">
        <div className="border-b-4 border-orange-400 text-3xl text-neutral-600 p-2">
          Customer's Love Al's Autos
        </div>
        <TestimonialCarousel />
      </div>
    </div>
  );
};

export default App;
