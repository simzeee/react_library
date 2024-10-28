import { useState } from "react";

const App = () => {
  const [age, setAge] = useState(20);
  const [error, setError] = useState("");
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md flex flex-col items-center bg-white border border-slate-200 p-8">
        <label htmlFor="age-input" className="m-2">
          Age
        </label>
        <input
          value={age}
          min={18}
          id="age-input"
          className="border border-slate-200 rounded-md w-20"
          type="number"
          onChange={(e) => {
            const newNumber = Number(e.target.value);
            if (newNumber >= 18) {
              setError("");
            } else {
              setError("Must be 18 or Older");
            }
            setAge(Number(e.target.value));
          }}
        />
        <div className="h-8 m-4 text-red-600">{error}</div>
      </div>
    </div>
  );
};

export default App;
