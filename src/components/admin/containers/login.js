import React, { Component } from 'react';
import { Pulse } from 'react-preloading-component';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import * as actions from '../actions/actions';

class Login extends Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state={
            loginIn:false,
            error:null
        }
    }
    componentWillMount(){
        console.log('log props');
        console.log(this.props);
    }

    logging=(e)=>{
        e.preventDefault();
        this.setState({loginIn:true});
        const currlogin = 'admin';
        const currpass = 'mihadomain';
        let login = this.admLogin.value;
        let pass = this.admPass.value
        this.props.tryToLogin();
        // if(login.toLowerCase() === currlogin.toLowerCase() && pass.toLowerCase() ===currpass.toLowerCase()){
        //     setTimeout(function(){
        //         this.props.login(login,pass);
        //     }.bind(this),1500)
        //     //this.props.login(login,pass);
        // }else{
        //     this.setState({loginIn:false,error:true});
        // }
    }
    render(){
        return(
            <div className="log-w3 flipInX animated">
            <div className="w3layouts-main">
                <h2>Вход</h2>
                    <form onSubmit={this.logging.bind(this)}>
                        <input type="text" className="ggg" name="Login" placeholder="Логин" ref={(input) => this.admLogin = input} required=""/>
                        <input type="password" className="ggg" name="Password" placeholder="Пароль" ref={(input) => this.admPass = input} required=""/>
                        {/* <span><input type="checkbox" />Remember Me</span>
                        <h6><a href="#">Forgot Password?</a></h6> */}
                            <div className="clearfix"></div>
                    {/* <input type="submit" value={this.state.loginIn ? (<Pulse/>):"Вход"} name="login"/> */}
                            <button type="submit" className="button-submit" name="login">{this.state.loginIn ? (<Pulse color="white"/>):("Вход")}</button>
                    </form>
                    { this.state.error &&(<p>Данные неверны!</p>)/* <p>Don't Have an Account ?<a href="registration.html">Create an account</a></p> */}
            </div>
            </div>   
        )
    }
}

const mapStateToProps = (state,ownProps) => {
    return { store: state.logData }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        tryToLogin: ()=>dispatch(actions.loginToApp())
    }
    
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Login));