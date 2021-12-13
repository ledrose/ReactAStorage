import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DragAndDrop from './DragAndDrop';
import Navbar from './Navbar';

import '../css/Main.css';

export default class ContentMain extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className = "container-fluid container__content" id="mainContent">
                    <div className = "container container__content__for-download ">
                        <DragAndDrop/>
                        {/* <div className = "container__content__for-download__text">
                            Загрузи картинку с заданием и получи ответ!
                        </div>
                        <div className = "filestyle container__content__for-download__button-field">
                            <form action="/upload/image" enctype="multipart/form-data" method="post">
                                <input type="file" name="uploadfile" id="files"  className="d-none" />
                            </form>
                            <label for="files" className ="filestyle container__content__for-download__button">Выбрать файл</label>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}




/*
const sendImage = () => {

            let imageUploadFile = document.getElementById("files").files[0];
            let formData = new FormData();
            formData.append("uploadedImage", imageUploadFile);
            fetch('/upload/image', {method: "POST", body: formData});

            var request = new XMLHttpRequest();

            function sendOurImage() {
                if(request.readyState == 4 && request.status == 200) {  
                    alert("Success");
                }
                else {
                    alert("Error");
                }
            }

            request.open("POST", "https://bfs-astorage.somee.com/api/v1/Files/Table");
            request.setRequestHeader('Accept', 'application/json');
            request.setRequestHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
            request.setRequestHeader('Access-Control-Allow-Credentials', 'true');
            request.onreadystatechange = sendOurImage;
            //request.send(img1);
            request.send(imageUploadFile);
        }
*/ 



/*          let img1 = {
                "draw": 0,
                "start": 0,
                "length": 0,
                "columns": [
                  {
                    "name": "string",
                    "searchable": true,
                    "orderable": true,
                    "search": {
                      "value": "string",
                      "regex": true
                    }
                  }
                ],
                "search": {
                  "value": "string",
                  "regex": true
                },
                "order": [
                  {
                    "column": 0,
                    "dir": "string"
                  },
                  {
                    "column": 1,
                    "dir": "answer"
                  }
                ]
            };
*/ 

/*
const imgFunction = (image2) => {
    return image2;
}
imageFunction(img1);
*/ 
