import React, { useEffect, useState } from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";


function App() {
  const [poems, setPoems] = useState([]);
  const [showForm, setShowForm] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8004/poems")
      .then((res) => res.json())
      .then((poemList) => setPoems(poemList));
  }, []);

 function onAddNewPoem(addNewPoem){
  setPoems([...poems,addNewPoem])

 }

   function handleShowForm() {
    setShowForm(!showForm)
   }
  return (
    <div className="app">
      <div className="sidebar">
        <button 
        onClick={handleShowForm}>
         {showForm? "Hide":"Show"}  new poem form
        </button>
        {showForm ?<NewPoemForm onAddNewPoem={onAddNewPoem}/>:null}
      </div>
      <PoemsContainer 
      poems={poems} setPoems={setPoems} 
      />
    </div>
  );
}

export default App;
