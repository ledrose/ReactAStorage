import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import '../css/search.css';
import { Form, FormControl} from 'react-bootstrap';

export default class Search extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className = "container-fluid container__content" id="mainContent">
                    <div className = 'row justify-content-center' >
                        <div className = "col-xl-5 col-lg-5 col-md-5 col-sm-10 container__content__for-search">
                            <div className = "container__content__for-search__text">
                                <p>Введи текст задания</p>
                            </div>
                            <Form className="d-flex text__search" id="searchText">
                                    <FormControl
                                        type = "text"
                                        placeholder = "Поиск"
                                        className = "form__search">
                                    </FormControl>
                                </Form>
                        </div>
                        <div className = "col-xl-5 col-lg-5 col-md-5 col-sm-10 container__content__for-search">
                            <div className = "container__content__for-search__text">
                                <p>Результат поиска</p>
                            </div>
                            <Form className="d-flex text__search" id="resultText">
                                    <FormControl
                                        type = "text"
                                        placeholder = "Результат"
                                        className = "form__search">
                                    </FormControl>
                                </Form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}