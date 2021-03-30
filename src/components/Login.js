import React, {Component} from 'react';
import './Login.css';

//Sliding Sign In & Sign Up Form
export default class LoginComponent extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isRightPanelActive: false,
            containerClasses: "container"
        }
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
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>Sign Up</button>
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
                    <button>Sign In</button>                    
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