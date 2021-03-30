import React from 'react';
import md from 'md5';
import Cookies from 'universal-cookie';
import axios from 'axios';
import './LoginPage.css';
import LoginComponent from '../components/Login'

function LoginPage(){
    return (
        <div>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css"></link>
            <LoginComponent></LoginComponent>
        </div>
    );
}

export default LoginPage;