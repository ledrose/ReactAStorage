import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import '../css/Login.css';
import '../css/Main.css';

/*-----------------------------------------------------*/

function Login() {
    const inputVal = document.getElementById('inputEmail');
    const onHandle = () => {

        const var1 = document.getElementById('123').value
        const var2 = document.getElementById('456').value
        //admin@mail.ru
        //Admin_1
        var body1 = '{\"email\":\"admin@mail.ru\",\"password\":\"Admin_1\"}';
        let tokenAccess = `{\"email\":\"${var1}\",\"password\":\"${var2}\"}`;
        //alert(tokenAccess);

        //Here is the request 
        var request = new XMLHttpRequest();

        function getToken() {
            if(request.readyState == 4 && request.status == 200) {
                document.getElementById("bear").innerText = request.responseText;    
            }
            else {
                //document.getElementById("bear").innerText = request.statusText;
                document.getElementById("bear").innerText = "Wrong password/email or another problem";
            }
        }

        request.open("POST", "https://bfs-astorage.somee.com/api/v1/Token");
        request.setRequestHeader('Content-Type', 'application/json, text/plain, */*');
        request.setRequestHeader('Accept', 'application/json');
        request.setRequestHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
        request.setRequestHeader('Access-Control-Allow-Credentials', 'true');
        request.onreadystatechange = getToken;
        request.send(tokenAccess);
    }

    return (
        <>
        <Navbar/>
            <div className = "container-fluid container__content" id="mainContent">
                <div className = "container container__content__for-login">
                    <form className="container container__content__for-login__field">
                        <div className="form-group">
                            <label className="login-input-main__label col-form-label" for="123">Пользователь: </label>
                            <input type="text" className=" login-input-main__input form-control" id="123" placeholder="Имя пользователя"/>
                        </div>
                        <div class="form-group">
                        <label for="pass" className="login-input-main__label col-form-label">Пароль: </label>
                            <input type="password" className="login-input-main__input form-control" id="456" placeholder="Пароль" required/>
                        </div>
                        <button className="submit-login" onClick={onHandle}> Войти </button>
                    </form>
                    <div className="bearer" id="bear">
                        <div className="container__content__for-login__message" id="bear">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login; 

