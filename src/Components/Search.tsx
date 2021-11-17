import React, { FunctionComponent, useState } from 'react';
import useSearchGifs from '../hooks/useSearchGifs';

interface SearchProps {
    searchGifs: (busqueda: string) => void
}

const Search: FunctionComponent<SearchProps> = (props: SearchProps) => {

    const [busqueda, setBusqueda] = useState<string>('')

    const handleClick = () => {
        props.searchGifs(busqueda)
    }

    return (
        <nav className="nav">
            <div className="container-nav">
                <div className="form-search">
                    <input
                        type="search"
                        placeholder="Search Gifs"
                        value={busqueda}
                        onChange={e => setBusqueda(e.target.value)}
                    />
                    <button
                        type="button"
                        onClick={handleClick}
                    >
                        Search
                    </button>
                </div>
            </div>
        </nav>
    )   
}

export default Search