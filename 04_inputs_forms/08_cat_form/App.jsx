import { useState } from "react";
import CatItem from "./CatItem";
import initialCats from "./initial-cats";

const App = () => {
  const [cats, setCats] = useState(initialCats);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [image, setImage] = useState("");
  const [interests, setInterests] = useState("");

  const catItems = cats.map((cat, idx) => <CatItem key={idx} cat={cat} />);

  return (
    <div className="flex flex-col items-center justify-center py-10 bg-indigo-50">
      <div className="flex flex-col items-center w-full max-w-2xl">
        <form
          className="bg-slate-50 rounded-lg overflow-clip shadow-lg"
          onSubmit={(e) => {
            e.preventDefault();
            const newCat = { name, age, imageUrl: image, interests };
            console.log(newCat);
            setCats([...cats, newCat]);
            setName("");
            setAge(0);
            setImage("");
            setInterests("");
          }}
        >
          <div className="bg-purple-600 text-white text-center py-2 text-xl">
            Create a Cat Profile
          </div>
          <div className="flex flex-col p-4">
            <div className="flex flex-col">
              <label className="text-slate-500 mx-2" htmlFor="name">
                Name
              </label>
              <input
                required
                id="name"
                className="m-2 p-2 rounded-md text-sm border border-200 flex-1"
                type="text"
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex">
              <div className="flex flex-col">
                <label className="text-slate-500 mx-2" htmlFor="age">
                  Age
                </label>
                <input
                  min={1}
                  max={25}
                  required
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  id="age"
                  className="m-2 w-14 p-2 rounded-md text-sm border border-200"
                  placeholder="age"
                  type="number"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-slate-500 mx-2" htmlFor="image">
                  Image
                </label>
                <input
                  required
                  id="image"
                  className="m-2 p-2 rounded-md text-sm border border-200"
                  type="text"
                  placeholder="provide an image url"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
            </div>
            <label className="text-slate-500 mx-2" htmlFor="interests">
              Interests
            </label>
            <textarea
              maxLength={80}
              required
              value={interests}
              onChange={(e) => {
                setInterests(e.target.value);
              }}
              id="interests"
              className="max-h-20 m-2 p-2 rounded-md text-sm"
              row={3}
            />
          </div>
          <div className="px-6 pb-4">
            <button className="bg-rose-300 text-purple-800 text-xl py-2 w-full rounded-md">
              create
            </button>
          </div>
        </form>
        {catItems}
      </div>
    </div>
  );
};

export default App;
