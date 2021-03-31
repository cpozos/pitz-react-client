import React, {Component} from 'react';
import axios from 'axios';
import md5 from 'md5';
import './Login.css';

//Sliding Sign In & Sign Up Form
export default class LoginComponent extends Component {
    
    static baseurl = "http://localhost:63154/Identity/Register";
    
    constructor(props) {
        super(props);
        this.state = {
            isRightPanelActive: false,
            containerClasses: "container",
            username: "",
            userpassword:"",
            email:"",
            onSuccessLogIn: props.onSuccessLogIn
        };
    }

    toogleContainerClasses = () => {
        const isRightPanelActive = !this.state.isRightPanelActive;
        let classes = isRightPanelActive ? 
            "container right-panel-active" :
            "container";

        this.setState({
            containerClasses: classes,
            isRightPanelActive: isRightPanelActive
        });
    }

    singUp = (event) => {
        event.preventDefault();
        axios.post(LoginComponent.baseurl,{
                Name: this.state.username,
                Email: this.state.email,
                Password: md5(this.state.userpassword)
        }).then(response => {
            this.state.onSuccessLogIn(response.data.accessToken);
        }).catch(error => {
            console.log(error);
        });
    }

    inputChanged = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value 
          });
    }
    
    render(){
        return (
        <div className={this.state.containerClasses} id="container">
            <div class="form-container sign-up-container">
                <form action="#">
                    <h1>Create Account</h1>
                    <div class="social-container">
                        <a href="#" class="social"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                        <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your email for registration</span>
                    <input name="username" type="text" placeholder="Name" value={this.state.username} onChange={this.inputChanged} />
                    <input name="email" type="email" placeholder="Email" value={this.state.email}  onChange={this.inputChanged} />
                    <input name="userpassword" type="password" placeholder="Password" value={this.state.userpassword}  onChange={this.inputChanged} />
                    <button onClick={this.singUp}>Sign Up</button>
                </form>
            </div>
            <div class="form-container sign-in-container">
                <form action="#">
                    <h1>Sign in</h1>
                    <div class="social-container">
                        <a href="#" class="social"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                        <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your account</span>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button onClick={this.handleSignIn}>Sign In</button>                    
                    <a href="#">Forgot your password?</a>
                </form>
            </div>
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button class="ghost" onClick={this.toogleContainerClasses}>Sign In</button>
                    </div>
                    <div class="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <button class="ghost" onClick={this.toogleContainerClasses}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}