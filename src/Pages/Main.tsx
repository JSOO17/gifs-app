import React, { FunctionComponent } from 'react'
import useGetGifs from '../hooks/useGetGifs';
import GifModel from '../Models/GifModel';
import Gif from '../Components/Gif';
import Search from '../Components/Search';
import useSearchGifs from '../hooks/useSearchGifs';
import ListGif from '../Components/ListGif';

interface MainProps {}

const Main: FunctionComponent<MainProps> = (props: MainProps) => {

    const { gifs } = useGetGifs()

    const { gifsSearched, searchGifs } = useSearchGifs()

    return (
        <div className="container">
            <div className="container-search">
                <Search searchGifs={searchGifs} />
            </div>
            <div className="container-gifs">
                <ListGif gifs={gifs} />
            </div>
            <div className="container-gifs">
                <ListGif gifs={gifsSearched} />
            </div>
        </div>
    )
}

export default Main