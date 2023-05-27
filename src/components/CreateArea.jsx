import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
function CreateArea(props) {
  const [isexpand,setexpand]=useState(false);

  const [inputText,setInputText]= useState("");
  const [note,setNote]=useState({
    title:"",
    content:""
  });

  function showinput(){
    setexpand(true);
  }


  function handleClick(event){
    props.onclck(note);
    setNote({
      title:"",
     content:""
     }
   )
    event.preventDefault();
    
  }



  function handleChange(event){
    const {name,value}=event.target;
     setNote((prevValue)=>{
      return{
        ...prevValue,
        [name]:value
      };
     });
     
     console.log(note);
  }
 
  return (
    <div>
      <form className="create-note">
       {isexpand? <input onChange={handleChange} value={note.title} name="title" placeholder="Title"/>:null }
        <textarea onClick={showinput} onChange={handleChange} value={note.content} name="content" placeholder="Take a note..." rows={isexpand?"3":"1"} />
   <Zoom in={isexpand}><Fab onClick={handleClick}>
          <AddIcon/>
        </Fab>
        </Zoom> 
      </form>
    </div>
  );
}

export default CreateArea;
