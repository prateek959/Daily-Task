import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Show = () => {
  const {id} = useParams();
  const [characters, setCharacters] = useState(null);
  useEffect(() => {
    async function fun() {
      const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      const data = await response.json();
      console.log(data);
      setCharacters(data);
    }
    fun();
  },[id]);
  if (!characters) {
    return <p>Loading...</p>;
  }
  return (
    <div id={characters.id}>
    <img src={characters.image} alt="" style={{ width: '300px' }} />
    <h1>{characters.name}</h1>
    <h2>Species:{characters.species}</h2>
    <h2>Status:{characters.status}</h2>
    <h2>Gender:{characters.gender}</h2>
  </div>
  )
}

export default Show;