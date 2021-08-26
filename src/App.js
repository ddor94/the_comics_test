import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import { getStories } from './apiCalls/apiCalls';

function App() {
  const [stories, setStories] = useState([]);
  const [characterName, setCharacterName] = useState("Captain America");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    //Defaults to Captain America stories
    loadStories(1009220);
  }, []);

  const loadStories = (characterId) => {
    setIsLoading(true);

    getStories(characterId, 15)
    .then((response) => {
      setStories(response.data.data.results)
      setIsLoading(false)
    });
  }

  const updateContent = (char) => {
    loadStories(char.id);
    setCharacterName(char.name);
  }

  return(
    <>
      <Header updateContent={updateContent} />
      <Main
        stories={stories}
        characterName={characterName}
        isLoading={isLoading}
      />
    </>
  );
}

export default App;
