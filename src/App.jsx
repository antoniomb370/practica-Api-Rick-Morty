import { useState } from 'react'
import imagenReck from './img/rick-morty.png'
import './App.css'
import Character from './components/Character';
function App() {

  const [characters, setCharacters] = useState(null);
  const RedAip = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character")
    const characterApi = await api.json();
    setCharacters(characterApi.results)
  }
  return (
    <div className="App">
      <h1 className='title'> Rick y Morty </h1>
      {characters ? (
        <Character characters={characters} setCharacters={setCharacters} />
      ) :
      <>
      <img src={imagenReck} alt="Rick y Morty" className='img-home' />
      <button onClick={RedAip} className='btn-search'> Buscar personaje</button>
      </>
      }
    </div>
  )
}

export default App
