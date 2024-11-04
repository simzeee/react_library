import { useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";

const App = () => {
  const [profiles, setProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchMessages = () => {
    fetch(
      "https://api.react-formula.com/learning-api/demos/teammates-project/profiles"
    )
      .then((response) => response.json())
      .then((data) => {
        setProfiles(data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const profileCards = profiles.map((profile, idx) => (
    <ProfileCard profile={profile} key={idx} />
  ));

  return (
    <div className="flex justify-center items-center min-h-screen py-40 bg-neutral-100">
      {isLoading ? (
        <i className="fa-solid fa-spinner text-2xl text-teal-600 animate-spin" />
      ) : (
        <div className="flex flex-col w-full max-w-lg">{profileCards}</div>
      )}
    </div>
  );
};

export default App;
