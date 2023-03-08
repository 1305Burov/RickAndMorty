import { useDeferredValue, useEffect, useState } from 'react'
import { Character } from './../interfaces/index';
import CharactersCard from './CharactersCard';
import { useLocation } from 'react-router-dom';

type Props = {}

function CharactersList({}: Props) {
    const location = useLocation();

    const [characters, setCharacters] = useState([])
    const [error, setError] = useState(false)
    const deferredQuery = useDeferredValue(characters);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character${location.search}`, {})
            .then(data => data.json())
            .then(data => setCharacters(data.results.sort((a: any, b: any) => a.name > b.name ? 1 : -1 )))
            .then(data => setError(false))
            .catch(e => setError(true))
    }, [location])

    return (
        error ? 
        <h2>Не найдено!</h2>
        :
        <ul className='content__characters-list characters-list'>
            {deferredQuery.map((characterData: Character)  => (
                <CharactersCard key={characterData.id} data={characterData} />
            ))}
        </ul>
    )
}

export default CharactersList