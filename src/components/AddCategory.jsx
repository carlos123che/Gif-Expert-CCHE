import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) =>{
        // setInputValue(event.target.value);
        setInputValue(target.value);
    }

    const onSubmit = ( event) =>{
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;
        // setCategories( cat => [ inputValue, ...cat]);
        onNewCategory( inputValue.trim());
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input
            type="text"
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={onInputChange}
            />
            {/* <button type="submit">Add Category</button> */}
        </form>
    );

}
