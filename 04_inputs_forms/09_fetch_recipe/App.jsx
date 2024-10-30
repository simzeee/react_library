import RecipeCard from "./RecipeCard";
const RECIPE = {
  name: "Pho",
  image_url: "https://static-task-assets.react-formula.com/239035.jpg",
};

const App = () => {
  return (
    <div className="flex justify-center">
      <RecipeCard recipe={RECIPE}></RecipeCard>
    </div>
  );
};

export default App;
