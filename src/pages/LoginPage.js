import React from 'react';
import './LoginPage.css';
import LoginComponent from '../components/Login'
import Cookies from 'universal-cookie';

function LoginPage(props){
    const cookies = new Cookies();
    const afterLogIn = (token) => {
        console.log(token);
        cookies.set("pitz_token", token, {path: "/"});
        props.history.push('/menu');
    };

    return (
        <div>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css"></link>
            <LoginComponent onSuccessLogIn={afterLogIn}></LoginComponent>
        </div>
    );
}

export default LoginPage;