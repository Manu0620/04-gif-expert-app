import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    /*const handleAdd = () => {
        //setCategories([ 'HunterXHunter',...categories ]);
        setCategories( cats => [ ...cats, 'HunterXHunter' ] )
    }*/

    return (
        <>

            <h2> GifExpertApp </h2>
            < AddCategory  setCategories =  { setCategories } />
            <hr></hr>

            <ol>
                { 
                    categories.map( category => (
                        //<li key={ category } > { category } </li>
                        <GifGrid 
                            key={ category }
                            category = { category } 

                        />
                    ))
                }
            </ol>
    
        </>
    );

}

export default GifExpertApp;