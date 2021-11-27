import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/imageFile.css';
import { useState } from "react";    

const ImageFile = (props) => {

    const [ fullSize, setFullSIze ] = useState()

    const getImage = () => {
     // This return all images in the api list
     console.log(props.image);
    }        

    return(
        <div className="container">
          <img
            className="api-image"
            src={props.image}
            onClick={() => {getImage(props.image)}}
            alt='download'
          ></img>
          </div>
    );
};

export default ImageFile