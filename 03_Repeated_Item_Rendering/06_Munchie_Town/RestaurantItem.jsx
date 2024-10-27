const RestaurantItem = (props) => {
  const { restaurant } = props;
  return (
    <div className="relative flex flex-col m-4 bg-white shadow-md">
      {restaurant.promotion == true && (
        <div className="bg-rose-400 text-white text-sm py-1 px-4 rounded-r-full absolute top-4">
          promotion
        </div>
      )}

      <img className="w-64 h-40 object-cover" src={restaurant.image}></img>
      <div className="flex justify-between m-1">
        <div className={"text-xl font-medium"}>{restaurant.name}</div>
        <div className="text-rose-500 ">
          <i className="fa-solid fa-star mr-1" />
          {restaurant.rating}
        </div>
      </div>
      <div className="m-2 text-stone-600">
        <i className="fa-solid fa-location-dot mr-2" />
        {restaurant.location}
      </div>
      <div className="m-1 text-stone-600">{"$".repeat(restaurant.cost)}</div>
    </div>
  );
};

export default RestaurantItem;
