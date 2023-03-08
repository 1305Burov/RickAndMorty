import { Character } from './../interfaces/index';
import { Link } from 'react-router-dom';


type Props = {
    data: Character
}



function CharactersCard({data}: Props) {
  return (
    
        <li className='characters-list__item item'>
            <Link to={`/character/${data.id}`} >
                <img className="item__character-image" src={data.image} alt={data.name} />
                <div className="item__character-info">
                    <h3 className="character-info__name">{data.name}</h3>
                    <span className="character-info__species">{data.species}</span>
                </div>
            </Link>
        </li>
    
  )
}

export default CharactersCard