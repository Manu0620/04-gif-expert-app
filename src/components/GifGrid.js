import React from 'react';


export const GifGrid = ({ category }) => {
    
    const getGifs = async() => {

        const url = 'api.giphy.com/v1/gifs/search?q=Rick and Morty&limit=5&api_key=cy79LvjBwoXExhQk9LA0JyF9fUxxZMwj';
        const resp = await fetch( url );
        const { data } = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id, 
                tittle: img.tittle,
                url: img.images?.downsized.medium.url
            }
        })

        console.log(gifs);

    }

    getGifs();

    return (
        <div>
            <h3> { category } </h3>
        </div>
    )
}