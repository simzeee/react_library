import * as FurnitureService from "./services/furniture";

const FurnitureItem = (props) => {
  const { furniture, fetchFurnitures } = props;

  return (
    <div className="flex m-8 border rounded-lg shadow-md border-stone-300 overflow-clip">
      <img
        src={furniture.image}
        className="object-cover w-48 h-48 border-r border-stone-300"
      />
      <div className="flex flex-col justify-between w-full px-6 py-4 bg-white">
        <div className="text-2xl text-stone-600">{furniture.name}</div>
        <div className="text-stone-500">{furniture.description}</div>
        <div className="flex justify-end">
          <button
            className="px-4 py-2 bg-red-500 rounded-lg text-red-50 hover:bg-red-600"
            onClick={async () => {
              await FurnitureService.deleteFurniture(furniture.id);
              fetchFurnitures();
            }}
          >
            <i className="mr-1 fa-solid fa-trash"></i>
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default FurnitureItem;
