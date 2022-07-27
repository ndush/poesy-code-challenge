import React,  {useState} from "react";

function Poem({title,content,author,poems,setPoems,id}) {
const[isRead, setIsRead]=useState(false)

function handleClick(){
  setIsRead(isRead=>isRead=!isRead)
}
function handleDelete(){
  fetch(`http://localhost:8004/poems/${id}`,{
    method: "DELETE",
  })
  .then(res => res.json())
  .then(()=>{
  const filteredPoems=poems.filter((poem)=>poem.id !==id)
  setPoems(filteredPoems)
  })
}
  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>
        <strong>- By {author}</strong>
      </p>
      <button onClick={handleClick}>{isRead?"Mark as read":"Mark as unread"}</button>
      <button onClick={handleDelete}> Delete</button>
    </div>
   
  );
}

export default Poem;
