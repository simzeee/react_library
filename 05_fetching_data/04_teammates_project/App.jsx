import { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";

const App = () => {
  const [profiles, setProfiles] = useState([]);

  const fetchProfiles = () => {
    fetch(
      "https://api.react-formula.com/learning-api/demos/teammates-project/profiles"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProfiles(data);
      });
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  const profileCards = profiles.map((profile, idx) => (
    <ProfileCard profile={profile} key={idx}></ProfileCard>
  ));

  return (
    <div className="flex justify-center bg-neutral-100 min-h-screen">
      <div className="w-full max-w-md">{profileCards}</div>
    </div>
  );
};

export default App;
