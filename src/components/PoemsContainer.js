import React from "react";
import Poem from "./Poem";

function PoemsContainer({ poems, setPoems }) {
  return (
    <div className="poems-container">
      {poems.map((poem) => {
        return (
          <Poem
            key={poem.id}
            id={poem.id}
            title={poem.title}
            content={poem.content}
            author={poem.author}
            poems={poems}
            setPoems={setPoems}
          />
        );
      })}
    </div>
  );
}

export default PoemsContainer;
