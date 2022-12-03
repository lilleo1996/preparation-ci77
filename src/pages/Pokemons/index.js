import {useState, useEffect, useCallback} from 'react';
import axios from 'axios';

import './style.css';

const Pokemons = () => {

	const [pokemons, setPokemons] = useState([])
	
	// const handleFetchPokemon = () => {
	// 	fetch('https://pokeapi.co/api/v2/pokemon')
	// 		.then((response) => {
	// 			return response.json()
	// 		}).then((data) => {
	// 			console.log(data)
	// 			setPokemons(data.results)
	// 		})
	// }	

    // const handleFetchPokemon = async () => {
	// 	const response = await fetch('https://pokeapi.co/api/v2/pokemon');
	// 	const data = await response.json();
	// 	console.log(data);
	// 	setPokemons(data.results)
    // }

    const handleFetchPokemon = useCallback(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then(function (response) {
                // handle success
                setPokemons(response.data.results)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    })

    useEffect(() => {
		handleFetchPokemon()
	}, [handleFetchPokemon])

	return (
		<div className='pokemons'>
			<button onClick={handleFetchPokemon}>Fetch Pokemon</button>
			<ul>
				{pokemons.map(pokemon => {
					return <li key={pokemon.url}>{pokemon.name}</li>
				})}
			</ul>
		</div>
	)
}

export default Pokemons;