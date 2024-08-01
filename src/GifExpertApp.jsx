import { useState } from "react"
import { AddCategory,GifGrid} from "./components";
export const GifExperApp =()=>{



const [categories,setCategories]=useState(['onePunch']);
    //console.log(categories);
   const onAddCategory=(newCategory)=>{
       //console.log(NewCategory);   
    //agregar Valorant
        //console.log('valorant')
        if (categories.includes(newCategory)) return;
        setCategories([newCategory,...categories])
    }

   

    return(
        <>
        {/*titulo*/}
        <h1>GifExpertApp</h1>


        {/*Input*/}
       
        <AddCategory 
      
        onNewCategory={(value)=>onAddCategory(value)}

        />
        

        {/*<button onClick={onAddCategory}>Agregar</button>*/}

        {/*listado*/}
       
            {categories.map(category=>(
            <GifGrid 
                key={category}
                category={category}/>
                
                 //   <li key={category}>{category}</li>
             /*   <div key={category}>
                    <h3>{category}</h3>
                    <li>{category}</li>*/

                
                
            ))
            }
        
    

            {/*Gif Item*/}
        
        </>
    )
}

