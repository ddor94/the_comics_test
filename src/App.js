import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import { getStories } from './apiCalls/apiCalls';

function App() {
  const [stories, setStories] = useState([]);
  const [characterName, setCharacterName] = useState("Captain America");

  useEffect(() => {
    loadStories(1009220);
  }, []);

  const loadStories = (characterId) => {
    getStories(characterId, 15).then((response) => setStories(response.data.data.results));
  }

  const updateContent = (char) => {
    loadStories(char.id);
    setCharacterName(char.name);
  }

  return(
    <>
      <Header updateContent={updateContent} />
      <Main stories={stories} characterName={characterName} />
    </>
  );
}

export default App;
