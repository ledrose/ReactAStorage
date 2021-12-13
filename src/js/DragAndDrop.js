import React, { useState } from "react";
import '../css/dragAndDrop.css';
import { curToken, mainLink } from "./App";

export default class DragAndDrop extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      drag: false,
      errorMessages:null,
    }
  }
  sendImage = async (data) => {
    var response = await fetch(mainLink+'/Files',{
      method: "POST",
      body: data,
      headers: {
        "Authorization":curToken.token
      }
    })
    const responseBody= await response.json()
    if (response.status==200) {
      console.log(responseBody);
    }
    else {
      console.log(responseBody);
    }
  }

  dragStartHandler = (e) => {
    e.preventDefault()
    this.setState({drag:true})
  }
  dragLeaveHandler = (e) => {
    e.preventDefault()
    this.setState({drag:false})
  }
  onDropHandler = (e) => {
    e.preventDefault()
    let files = [...e.dataTransfer.files]
    files.forEach(el => {
      console.log(el)
      const formData = new FormData()
      formData.append('File',el,el.name);
      this.sendImage(formData)
    });
    this.setState({drag:false})
  }
  onFileSelectedHandler = (e) => {
    e.preventDefault()
    e.preventDefault()
    let files = [...e.target.files]
    files.forEach(el => {
      console.log(el)
      const formData = new FormData()
      formData.append('File',el,el.name);
      this.sendImage(formData)
    });
  }
  render() {
    return (
      <div className="container drop_area_parent" onClick={e=>this.inputRef.click()}>
        {this.state.drag
        ?<div 
          onDragStart={e=>this.dragStartHandler(e)}
          onDragLeave={e=>this.dragLeaveHandler(e)}
          onDragOver={e=>this.dragStartHandler(e)}
          onDrop={e=>this.onDropHandler(e)}
          className="drop_area_drag"
        >Отпустите файлы, чтобы загрузить их
        </div>
        :<div
          onDragStart={e=>this.dragStartHandler(e)}
          onDragLeave={e=>this.dragLeaveHandler(e)}
          onDragOver={e=>this.dragStartHandler(e)}
          className="drop_area_default"
        >Перетащите файлы или кликните для выбора
        </div>
        }
        <input onChange={e=>this.onFileSelectedHandler(e)} ref={(inputRef)=>{this.inputRef=inputRef}} multiple={true} type='file' hidden/>
      </div>
    )
  }
}