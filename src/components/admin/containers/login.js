import React, { Component } from 'react';
import { Pulse } from 'react-preloading-component';


export default class Login extends Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state={
            loginIn:false
        }
    }

    logging=(e)=>{
        e.preventDefault();
        this.setState({loginIn:true});
        let login = this.admLogin.value;
        let pass = this.admPass.value
        setTimeout(function(){
            this.props.login(login,pass);
        }.bind(this),1500)
        //this.props.login(login,pass);
    }
    render(){
        return(
            <div className="log-w3 flipInX animated">
            <div className="w3layouts-main">
                <h2>Вход</h2>
                    <form onSubmit={this.logging.bind(this)}>
                        <input type="text" className="ggg" name="Email" placeholder="Логин" ref={(input) => this.admLogin = input} required=""/>
                        <input type="password" className="ggg" name="Password" placeholder="Пароль" ref={(input) => this.admPass = input} required=""/>
                        {/* <span><input type="checkbox" />Remember Me</span>
                        <h6><a href="#">Forgot Password?</a></h6> */}
                            <div className="clearfix"></div>
                    {/* <input type="submit" value={this.state.loginIn ? (<Pulse/>):"Вход"} name="login"/> */}
                            <button type="submit" className="button-submit" name="login">{this.state.loginIn ? (<Pulse color="white"/>):("Вход")}</button>
                    </form>
                    {/* <p>Don't Have an Account ?<a href="registration.html">Create an account</a></p> */}
            </div>
            </div>   
        )
    }
}