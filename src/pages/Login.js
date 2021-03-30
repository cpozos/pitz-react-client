import React from 'react';
import md from 'md5';
import Cookies from 'universal-cookie';
import axios from 'axios';
import '../css/Login.css';

function Login(){
    return (
        <div>
            <div>
                <label>User: </label>
                <br />
                <input 
                    type="text"
                    name="usuario"
                />
                <br />
                <label>Password: </label>
                <br />
                <input 
                    type="password"
                    name="password"
                />
                <br />
                <button>Log in</button>
            </div>
        </div>
    );
}

export default Login;