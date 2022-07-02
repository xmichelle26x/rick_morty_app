import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar'

function App() {
  // const [people, setPeople] = useState([])
  
  const fetchCharacters = () => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
  }
  
  
  useEffect(() => {
    fetchCharacters()
  }, [])
  
  
  return (
    <>
    <Navbar />
    </>
  );
}

export default App;
