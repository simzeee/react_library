import { useState } from "react";
import * as FurnitureService from "./services/furniture";

const FurnitureItem = (props) => {
  const { furniture, fetchFurnitures } = props;
  const [currentName, setCurrentName] = useState(furniture.name);
  const [currentDescription, setCurrentDescription] = useState(
    furniture.description
  );
  const [editing, setEditing] = useState(false);

  return (
    <div className="flex m-8 border rounded-lg shadow-md border-stone-300 overflow-clip">
      <img
        src={furniture.image}
        className="object-cover w-48 h-48 border-r border-stone-300"
      />
      <div
        value={currentName}
        className="flex flex-col justify-between w-full px-6 py-4 bg-white"
      >
        {editing ? (
          <>
            <input
              value={currentName}
              onChange={(e) => setCurrentName(e.target.value)}
              className="border border-stone-200 rounded-md shadow-inner p-1 text-blue-600 text-xl"
            />
            <textarea
              onChange={(e) => setCurrentDescription(e.target.value)}
              value={currentDescription}
              className="border border-stone-200 rounded-md shadow-inner p-1 text-blue-600 my-1"
            />
          </>
        ) : (
          <>
            <div className="text-2xl text-stone-600">{furniture.name}</div>
            <div className="text-stone-500">{furniture.description}</div>
          </>
        )}

        <div className="flex justify-end">
          {editing ? (
            <button
              onClick={async () => {
                await FurnitureService.updateFurniture(furniture.id, {
                  name: currentName,
                  description: currentDescription,
                });
                fetchFurnitures();
                setEditing(false);
              }}
              className="px-4 py-2 mx-1 bg-green-500 rounded-lg text-green-50 hover:bg-green-600"
            >
              <i className="mr-1 fa-solid fa-check" />
              Save
            </button>
          ) : (
            <>
              <button
                onClick={() => setEditing(true)}
                className="px-4 py-2 mx-1 bg-blue-500 rounded-lg text-blue-50 hover:bg-blue-600"
              >
                <i className="mr-1 fa-solid fa-pen" />
                edit
              </button>
              <button
                className="px-4 py-2 mx-1 bg-red-500 rounded-lg text-red-50 hover:bg-red-600"
                onClick={async () => {
                  await FurnitureService.deleteFurniture(furniture.id);
                  fetchFurnitures();
                }}
              >
                <i className="mr-1 fa-solid fa-trash"></i>
                delete
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FurnitureItem;
