import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import '../css/Login.css';
import '../css/Main.css';
import {mainLink,getToken,setToken} from './App';

/*-----------------------------------------------------*/

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formResponse: getToken(),
        }
    }
    submitForm = async (e) => {
        e.preventDefault();
        var body = {"email":this.login.value,"password":this.pass.value};
        console.log(getToken());
        let response = await fetch(mainLink+"/Token",{
            method:"POST",
            headers:{
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(body),
        });
        if (response.status===200) {
            setToken('Bearer: '+ await response.text());
            this.setState({formResponse: getToken()});
            console.log(getToken());
        }
        else {
            let errorBody = await response.json();
            this.setState({formResponse:errorBody[''][0]});
        }
    }

    render() {
        return (
            <div> 
                <Navbar />
                <div className="container-fluid container__content" id="mainContent">
                    <div className="container container__content__for-login">
                        <form className="container container__content__for-login__field" onSubmit={this.submitForm}>
                            <div className="form-group">
                                <label htmlFor="login_field" className="login-input-main__label col-form-label">Пользователь: </label>
                                <input type="text" ref={(login) => {this.login=login}} className=" login-input-main__input form-control" id="login_field" placeholder="Имя пользователя" />
                            </div>
                            <div className="form-group">
                                <label hemlFor="pass_field" className="login-input-main__label col-form-label">Пароль: </label>
                                <input type="password" ref={(pass) => {this.pass=pass}} className="login-input-main__input form-control" id="pass_field" placeholder="Пароль" required />
                            </div>
                            <button className="submit-login">Войти</button>
                        </form>
                        <div className="bearer" id="bear">
                            <div className="container__content__for-login__message" id="bear">

                                <p >{this.state.formResponse}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>         
        )
    }
}


