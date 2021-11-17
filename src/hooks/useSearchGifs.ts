import GifModel from '../Models/GifModel';
import React, { useState } from 'react';


const useSearchGifs = () => {


    const [gifsSearched, setGifsSearched] = useState<GifModel[]>([])


    const searchGifs = (busqueda: string) => {
        let gifsResponse: GifModel[] = []

        const apiKey = 'rUMg6e7TiIFFYpG4eHXBl6WHbEEnUm55'

        const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${busqueda}&limit=${9}`

        fetch(url).then((result) => {
            return result.json()
        }).then(res => {
            console.log(res)
            setGifsSearched([])
            res.data.forEach((element: any) => {
                var gif: GifModel = {
                    name: element.title as string,
                    url: element.images.downsized.url as string,
                    username: element.username  as string,
                    user_profile: element.user != null ? element.user.profile_url as string : ''
                }

                gifsResponse.push(gif)
            });

            setGifsSearched(gifsResponse)
        }).catch((err) => {
            console.log(err)
        });
    }

    return { gifsSearched, searchGifs }
}

export default useSearchGifs