import properties from "./properties";
import PropertyItem from "./PropertyItem";

const App = () => {
  const propertyItems = properties.map((property, idx) => (
    <PropertyItem property={property} key={idx} />
  ));
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-5xl flex flex-wrap justify-center">
        {propertyItems}
      </div>
    </div>
  );
};

export default App;
