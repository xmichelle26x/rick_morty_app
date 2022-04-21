import Navbar from './components/Navbar'

fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error))


function App() {
  return (
    <Navbar/>
  );
}

export default App;
