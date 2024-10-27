import restaurants from "./restaurants";
import RestaurantItem from "./RestaurantItem";

const App = () => {
  const restaurantItems = restaurants.map((restaurant, idx) => (
    <RestaurantItem key={idx} restaurant={restaurant} />
  ));

  return (
    <div className="flex flex-col items-center py-10 bg-stone-100 justify-center bg-stone-100">
      <div className="flex items-center mb-6 text-4xl font-medium text-stone-700">
        <img
          src="https://static-task-assets.react-formula.com/996965.png"
          className="w-16 m-2"
        />
        Munch Central
      </div>
      <div className="flex flex-wrap justify-center w-full max-w-5xl ">
        {restaurantItems}
      </div>
    </div>
  );
};

export default App;
