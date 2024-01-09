import React,{useState , useEffect} from "react";
import './App.css'
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes,setNotes]=useState(()=>{
    const localValue = localStorage.getItem("ITEMS")

    if(localValue===null) return []

    return JSON.parse(localValue)
  })

  useEffect(()=>{
    localStorage.setItem("ITEMS" , JSON.stringify(notes))
  },[notes])

  function addNotes(text){
    setNotes(prevNote=>{
      return [...prevNote , text]
    })
  }

  function deleteNote(id){
    setNotes(prevNote=>{
      return prevNote.filter((note , index)=>{return index!==id})
    })
  }
  
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNotes}/>
      {notes.map((note,index) => {
        return <Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteNote}/>
      })}
      <Footer />
    </div>
  );
}

export default App;
