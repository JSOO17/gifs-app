import { useState, useEffect } from 'react';
import GifModel from '../Models/GifModel';

const useGetGifs = () => {

    const [gifs, setGifs] = useState<GifModel[]>([])

    const getGifs = () => {
        const apiKey = 'rUMg6e7TiIFFYpG4eHXBl6WHbEEnUm55'

        const url = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=3`

        fetch(url).then(result =>{
            return result.json()
        }).then(info => {

            let gifsResponse: GifModel[] = []

            info.data.forEach((element: any) => {
                let gif: GifModel = {
                    name: element.title as string,
                    url: element.images.downsized.url as string,
                    username: element.username as string,
                    user_profile: element.user === undefined ? '' : element.user.profile_url as string
                }

                gifsResponse.push(gif)
            })

            setGifs(gifsResponse)
        }).catch(err => {
            console.log(err)
        })

    }

    useEffect(() => {
        getGifs()
    }, [])

    return { gifs }
}

export default useGetGifs