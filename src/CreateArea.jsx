import React,{useState} from "react";
import { FaPlus } from "react-icons/fa6";

function CreateArea(props) {
  const [ text , setText ] = useState({
    title:"",
    content:""
  })

  function handleChange(e){
    const {value,name}=e.target;
     setText(prevText=>{
      return {
        ...prevText,
        [name]:value
      }
     })
  }
  function submitButton(e){
    e.preventDefault()
    if(text.title.trim()==="" || text.content.trim() ==="") return
    props.onAdd(text)
    setText({
        title:"",
        content:""
    })
  }
  return (
    <div>
      <form onSubmit={submitButton}>
        <input onChange={handleChange} value={text.title} name="title" placeholder="Title" />
        <textarea onChange={handleChange} value={text.content} name="content" placeholder="Take a note..." rows="3" />
        <button><FaPlus /></button>
      </form>
    </div>
  );
}

export default CreateArea;
