import { useState } from "react";
import { AddCategory, Gifgrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Piece', 'Demon Slayer']);

    const onAddCategory = ( newCategory ) =>{

        if( categories.includes(newCategory)) return;
        // setCategories( (c) => [...c, category] );
        //froma 2
        setCategories([newCategory, ...categories ]);
        // insertar al incio
        // setCategories([category, ...categories]);
    }; 


    return (
        <>
            {/* titulo  */}
            <h1>GifExpertApp</h1>

            {/* input */}
            <AddCategory
                // setCategories={setCategories}
                onNewCategory = { event => onAddCategory(event) }
            />

            {/* lista de gif */}
            <ol>
                { categories.map( category => <Gifgrid key={category} category={category} />) }
            </ol>
        </>
    );
}

// 2Tv1EYA3V7ov6272ZXPDrRBkdoLAvCuH