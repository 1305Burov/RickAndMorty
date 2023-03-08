import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Character } from '../../interfaces/index';

import arrowBack from '../../assets/arrow_back.png';
import './index.scss';

type Props = {}

function CharacterPage({}: Props) {
    const navigate = useNavigate();

    const { id } = useParams();
    
    const [character, setCharacter] = useState<Character | null>(null)

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`, {})
            .then(data => data.json())
            .then(data => setCharacter(data))
    }, [])

    return (
        <section className='character'>
            <div className="container">
                <button className='btn-back' onClick={() => navigate(-1)}>
                    <img src={arrowBack} alt="Back icon" />
                    <span>go back</span>
                </button>
                <div className="character__content">
                    {
                        !character ? <h2>'Loading...'</h2>
                        :
                        <>
                            <img className='character__image' src={character.image} alt={character.name} />
                            <h1 className='character__name'>{character.name}</h1>

                            <p className='secondary-text' >Information</p>

                            <dl className='character__info-list'>
                                <div className="info-list__item">
                                    <dt className='info-list__title'>Gender</dt>
                                    <dd className='info-list__data'>{character.gender || 'Unknown'}</dd>
                                </div>
                                <div className="info-list__item">
                                    <dt className='info-list__title'>Status</dt>
                                    <dd className='info-list__data'>{character.status || 'Unknown'}</dd>
                                </div>
                                <div className="info-list__item">
                                    <dt className='info-list__title'>Specie</dt>
                                    <dd className='info-list__data'>{character.species || 'Unknown'}</dd>
                                </div>
                                <div className="info-list__item">
                                    <dt className='info-list__title'>Origin</dt>
                                    <dd className='info-list__data'>{character.origin.name || 'Unknown'}</dd>
                                </div>
                                <div className="info-list__item">
                                    <dt className='info-list__title'>Type</dt>
                                    <dd className='info-list__data'>{character.type || 'Unknown'}</dd>
                                </div>
                            </dl>
                        </>
                    }
                </div>
            </div>
        </section>
    )
}

export default CharacterPage