import React,{useState} from "react";

function NewPoemForm({onAddNewPoem}) {

  const[newPoem, setNewPoem] =useState({
    title:"",
    content: "",
    author: ""
  })
  

  function handleChange(event){
    const newForm = {...newPoem,[event.target.name]:event.target.value}
    setNewPoem(newForm)
    
  }

  function handleSubmit(event){
    event.preventDefault()
  
 fetch("http://localhost:8004/poems",{
      
      method:"POST",
      headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newPoem)
  })
 
    .then(res => res.json())
    .then(addNewPoem=>onAddNewPoem(addNewPoem) ) 
  }
  return (
    <form onSubmit={handleSubmit}className="new-poem-form">
      <input onChange={handleChange}name="title" value={newPoem.title}placeholder="Title" />
      <input onChange={handleChange}name="author" value={newPoem.author}placeholder="Author" />
      <textarea onChange={handleChange}name="content" value={newPoem.content}placeholder="Write your masterpiece here..." rows={10} />
      <input type="submit" value="Share your masterpiece" />
    </form>
  );
}

export default NewPoemForm;
