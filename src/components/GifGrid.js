import React, { useState, useEffect } from 'react';


export const GifGrid = ({ category }) => {
    
    const [count, setCount] = useState(0);
    
    useEffect( () => {
        getGifs();
    }, [] )

    const getGifs = async() => {

        const api_key = 'CcIF7cX14t1aHi47V2BuGAAiaHFsrEBa';
        const url = `https://api.giphy.com/v1/gifs/search?q=Rick and Morty&limit=10&api_key=${ api_key }`;
        const resp = await fetch( url );
        const { data } = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id, 
                tittle: img.tittle,
                url: img.images.downsized_medium.url
            }
        })

        console.log(gifs);

    }

    return (
        <div>

            <h3> { category } </h3>
            <h3> { count } </h3>
            <button className='btn' onClick={ () => setCount( count + 1 ) }> + </button>

        </div>
    )
}

export default GifGrid;