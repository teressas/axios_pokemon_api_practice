import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  // create empty array of pokemon list
  const [pokemonList, setPokemonList] = useState([])
  
  // call axiosPokemon function, [] will trigger the useEffect to run
  // useEffect(() => {
  //   axiosPokemon();
  // }, []) //never put the SAME state variable in [] bc useEffect will re-trigger

  // Axios api call
  const axiosPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(res => {
        // console.log(res);
        console.log(res.data)
        setPokemonList(res.data.results)
      })
      // axios wraps our res in a .data obj
      .catch(err => console.log(err))
  }

  const content = (
      <table>
        <thead>
          <tr>
            <th>Pokemon Name</th>
          </tr>
        </thead>
        <tbody>
          {
            pokemonList.map((pokemon) => {
              return (
                <tr key={pokemon.id}>
                  <td>{pokemon.name}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
  )

  return (
    <div className="App">
      <button onClick={axiosPokemon} >Fetch Pokemon</button>
      {content}
    </div>
  );
}

export default App;
