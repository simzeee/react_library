const HeroSection = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-6xl flex flex-col-reverse md:flex-row items-center justify-center py-32 px-4">
        <div className="text-violet-800 text-4xl md:text-5xl font-ubuntu font-medium max-w-[450px]">
          <div>
            Something <span className="text-yellow-500">Catchy</span> and{" "}
            <span className="text-red-600">Technological</span>
          </div>
          <button className="border-4 border-violet-800 text-3xl font-medium px-10 py-3 mt-4">
            Learn More
          </button>
        </div>
        <img
          className="w-[400px] md:w-[450px] my-16"
          src="https://static-task-assets.react-formula.com/963190.png
"
        />
      </div>
    </div>
  );
};
export default HeroSection;
