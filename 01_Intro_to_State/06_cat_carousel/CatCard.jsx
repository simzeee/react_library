const CatCard = ({ cat }) => {
  const { name, age, breed, location, imageUrl } = cat;

  return (
    <div className="border border-neutral-500 m-6 rounded-lg">
      <img className="w-80 h-64 object-cover rounded-t-lg" src={imageUrl}></img>
      <div className="p-4">
        <div className="flex text-neutral-500">
          <div className="mr-2 font-bold w-24">name</div>
          <div>{name}</div>
        </div>
        <div className="flex text-neutral-500">
          <div className="mr-2 font-bold w-24">age</div>
          <div>{age}</div>
        </div>
        <div className="flex text-neutral-500">
          <div className="mr-2 font-bold w-24">breed</div>
          <div>{breed}</div>
        </div>
        <div className="flex text-neutral-500">
          <div className="mr-2 font-bold w-24">location</div>
          <div>{location}</div>
        </div>
      </div>
    </div>
  );
};

export default CatCard;
