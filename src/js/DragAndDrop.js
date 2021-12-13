import React, { useState } from "react";
import '../css/dragAndDrop.css';
import { mainLink } from "./App";


const DragAndDrop =() =>{
  const [drag,setDrag] = useState(false)
  function dragStartHandler(e) {
    e.preventDefault()
    setDrag(true)
  }
  function dragLeaveHandler(e) {
    e.preventDefault()
    setDrag(false)
  }
  function onDropHandler(e) {
    e.preventDefault();
    let files = [...e.dataTransfer.files]
    files.forEach(el => {
      console.log(el)
      const formData = new FormData()
      formData.append('File',el,el.name);
      fetch(mainLink+'/Files',{
        method: "POST",
        body: formData,
      }).then(
        async (response)=>{
          console.log(await response.json())
        },
        async (response)=>{
          console.log(await response.text())
        }
      )
    });
    setDrag(false)
  }
  return (
    <div className="container drop_area_parent">
      {drag
      ?<div 
        onDragStart={e=>dragStartHandler(e)}
        onDragLeave={e=>dragLeaveHandler(e)}
        onDragOver={e=>dragStartHandler(e)}
        onDrop={e=>onDropHandler(e)}
        className="drop_area_drag"
      >Отпустите файлы, чтобы загрузить их</div>
      :<div
        onDragStart={e=>dragStartHandler(e)}
        onDragLeave={e=>dragLeaveHandler(e)}
        onDragOver={e=>dragStartHandler(e)}
        className="drop_area_default"
      >Перетащите файлы, чтобы загрузить их</div>
      }
    </div>
  )
}
export default DragAndDrop;