import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import '../css/Login.css';
import '../css/Main.css';
import {curToken,mainLink} from './App';

/*-----------------------------------------------------*/

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formResponse: null,
            logged: (curToken.token)?true:false,
        }
    }
    submitForm = async (e) => {
        e.preventDefault();
        var body = {"email":this.login.value,"password":this.pass.value};
        // console.log(curToken.token);
        let response = await fetch(mainLink+"/Token",{
            method:"POST",
            headers:{
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(body),
        });
        if (response.status===200) {
            curToken.setToken('Bearer: '+ await response.text());
            this.setState({logged:true});
            // console.log(curToken.token);
        }
        else {
            let errorBody = await response.json();
            this.setState({formResponse:errorBody[''][0]});
        }
    }
    loggedBody = () => {
        return <div className="container container__content__for-login">
            <div className="container container__content__for-login__field">
                <button type="button" class="btn btn-danger" onClick={() => {
                    curToken.removeToken();
                    this.setState({logged:false});
                }}>
                    Выйти из пользователя
                </button>
            </div>
        </div>
    }
    loginBody = () => {
        return <div className="container container__content__for-login">
            <form className="container container__content__for-login__field" onSubmit={this.submitForm}>
                <div className="form-group">
                    <label htmlFor="login_field" className="login-input-main__label col-form-label">Пользователь: </label>
                    <input type="text" ref={(login) => {this.login=login}} className=" login-input-main__input form-control" id="login_field" placeholder="Имя пользователя" />
                </div>
                <div className="form-group">
                    <label htmlFor="pass_field" className="login-input-main__label col-form-label">Пароль: </label>
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
    }
    render() {
        return (
            <div> 
                <Navbar />
                <div className="container-fluid container__content" id="mainContent">
                    {(this.state.logged)?this.loggedBody():this.loginBody()}
                </div>
            </div>         
        )
    }
}


