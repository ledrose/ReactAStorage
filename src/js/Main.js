import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import '../css/Main.css';

export default class ContentMain extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className = "container-fluid container__content" id="mainContent">
                    <div className = "container container__content__for-download">
                        <div className = "container__content__for-download__text">
                            Загрузи картинку с заданием и получи ответ!
                        </div>
                        <div className = "filestyle container__content__for-download__button-field">
                            <input type="file" name="uploadfile" id="files"  className="d-none"/>
                            <label for="files" className ="filestyle container__content__for-download__button">Выбрать файл</label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

