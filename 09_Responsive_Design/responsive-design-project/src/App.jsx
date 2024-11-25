import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import NavBar from "./NavBar";

const App = () => {
  return (
    <div className="font-roboto">
      <NavBar />
      <HeroSection />
      <FeatureSection />
    </div>
  );
};

export default App;
