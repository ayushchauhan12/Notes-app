import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note'
// import Notess from './components/Notes';
import CreateArea from './components/CreateArea';
// import * as cal from './calculator.js';

// const name="AYUSH";
// const year=new Date().getFullYear();
// const color={
//   color: "red",
//   fontSize: "20px"
// }

// color.color="blue";
// function createNote(noteItem){
//     return(
//         <Note
//           title={noteItem.title}
//           content={noteItem.content}
//         />

//     )
// }
function App() {

  
    const [notes,setNotes] =useState([])

    function handleclck(inputText){
    setNotes((prevValue)=>
      [
        ...prevValue,
        inputText
      ]
    )
    // event.preventDefault;
    console.log(notes);
    }

    function handleDelete(id){
      setNotes((prevNotes)=>{
          return prevNotes.filter((value,index)=>{
            return index!=id;
          })
      });
    }
    
    
  return (
   
    <div >
     <Header />
     <Footer /> 
     <CreateArea
      onclck={handleclck}
     />
   { notes.map((noteItem,index)=>(
      
        <Note
        key={index}
        id={index}
        title={noteItem.title}
        content={noteItem.content}
        onDelete={handleDelete}

        />
    ))}
          </div>

  );
}

export default App;
