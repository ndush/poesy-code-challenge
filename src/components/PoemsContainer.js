import React from "react";
import Poem from "./Poem";

function PoemsContainer({poems}) {
  return (
    <div className="poems-container">
      {poems.map(poem=>{
        return(
        <Poem
        key={poem.id}
        title={poem.title}
        content={poem.content} 
        author={poem.author}  />
        )
      })}
      
    </div>
  )
}

export default PoemsContainer;
