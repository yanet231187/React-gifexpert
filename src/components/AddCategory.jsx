import { useState } from "react"

    //import React from "react";
    export const AddCategory =({onNewCategory}) => {
     const [inputValue, setInputValue]=useState('');
     
     const onInputChange=({target})=>{
        //console.log(event.target.value);
        setInputValue(target.value);
        //setInputValue('Hola Mundo');
     }

     const onSubmit = (event) =>{
        event.preventDefault();
        if(inputValue.trim().length <=1) return;
        //console.log(inputValue);
        //setCategories(categories =>[inputValue,...categories]);
        setInputValue('');
        onNewCategory(inputValue.trim());
        
     }
       return (
           <form onSubmit={ onSubmit}>
            <input
            type='text'
            placeholder="Buscar Gifs"
            onChange={onInputChange}
            
            
            />
            </form>
            
        )
    }