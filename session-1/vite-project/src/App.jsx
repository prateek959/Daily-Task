import './App.css'
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Show from './Show';
function App() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    async function fun() {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      setCharacters(data.results);
    }
    fun();
  }, []);

  return (
    <Router>
      <Routes>

        <Route path='/' element={<div className='container'>
          {characters.map((elem) => {
            return (
              <div id={elem.id}>
                <img src={elem.image} alt="" />
                <h1>{elem.name}</h1>
                <h2>Species:{elem.species}</h2>
                <h2>Status:{elem.status}</h2>
                <h2>Gender:{elem.gender}</h2>
                <a href={`/character/${elem.id}`}>View details</a>
              </div>
            )
          })}
        </div>} />
        <Route path='/character/:id' element={<Show />} />
      </Routes>
    </Router>
  )
}

export default App
