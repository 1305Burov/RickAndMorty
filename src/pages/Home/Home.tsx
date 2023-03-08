import logo from '../../assets/logo.png';
import CharactersList from '../../components/CharactersList';
import './index.scss';

import { useSearchParams, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';

type Props = {}

function Home({}: Props) {
    const [searchValue, setSearchValue] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    
    useEffect(() => {
        setSearchValue(location.search.split('?name=')[1])
    }, [location])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setSearchValue(event.target.value);
        setSearchParams(`?name=${event.target.value}`);
    }

    return (
        <section className='home'>
            <div className="container">
                <div className="home__content content">
                    <img className="content__logo" src={logo} alt="logo" />
                    <input type="search" className="content__seacrh" placeholder='Filter by name...' value={searchValue} onChange={handleChange}  />
                    <CharactersList />
                </div>
            </div>
        </section>
    )
}

export default Home