import React, { Fragment, FunctionComponent } from 'react'
import GifModel from '../Models/GifModel'
import Gif from './Gif'

interface ListGifProps {
    gifs: GifModel[]
}

const ListGif: FunctionComponent<ListGifProps> = (props: ListGifProps) => {
    return (
        <Fragment>
            {props.gifs.map((gif: GifModel) => {
            return <Gif 
                        title={gif.name}
                        url={gif.url}
                        username={gif.username}
                        user_profile={gif.user_profile}  
                     />
            })}
        </Fragment>
    )
}

export default ListGif