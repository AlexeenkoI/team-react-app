import React, { Component } from 'react';


export default class Login extends Component{
    constructor(props){
        super(props);
        this.props = props;
        console.log(this.props);
    }

    logging=(e)=>{
        e.preventDefault();
        console.log('from log.js');
        //console.log(this.admLogin);
        let login = this.admLogin.value;
        let pass = this.admPass.value
        //alert(login);
        this.props.login(login,pass);
    }
    render(){
        return(
            <div className="log-w3">
            <div className="w3layouts-main">
                <h2>Sign In Now</h2>
                    <form onSubmit={this.logging.bind(this)}>
                        <input type="text" className="ggg" name="Email" placeholder="Login" ref={(input) => this.admLogin = input} required=""/>
                        <input type="password" className="ggg" name="Password" placeholder="PASSWORD" ref={(input) => this.admPass = input} required=""/>
                        {/* <span><input type="checkbox" />Remember Me</span>
                        <h6><a href="#">Forgot Password?</a></h6> */}
                            <div className="clearfix"></div>
                            <input type="submit" value="Sign In" name="login"/>
                    </form>
                    {/* <p>Don't Have an Account ?<a href="registration.html">Create an account</a></p> */}
            </div>
            </div>   
        )
    }
}