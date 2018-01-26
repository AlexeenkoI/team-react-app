import React, { Component } from 'react';
import Modal from 'react-responsive-modal';

export default class NavForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            email:null,
            name:null,
            text: null,
            errorWindow:false,
            errorMessage:'null',
            successWindow:false
        }
        
    }

    handleChange(flag,e){
        
        switch(flag){
            case 'email':
                this.setState({email : e.target.value});
                break;
            case 'name':
                this.setState({name:e.target.value});
                break;
            case 'message':
                this.setState({text:e.target.value});
                break;
        }

    }
    onCloseSucc(){
        this.setState({successWindow:false});
    }
    onCloseErr(){
        this.setState({errorWindow:false});
    }

    validator(flag,value) {
        switch(flag){
            case 'email':
                const email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return email.test(String(value).toLowerCase());
                break;
            case 'name':
                const name = /^[A-Za-z\s]+$/;
                return name.test(String(value).toLocaleLowerCase());
                break;
        }
    }

    handleSubmit(e){
        e.preventDefault();
        if(this.validator('email',this.state.email) && this.validator('name',this.state.name)&& this.state.text!=null && this.state.text.length>5){
            this.setState({successWindow:true});
        }else{
            this.setState({errorWindow:true});
        }
    }
    render(){
        return(  
            <div id="" className="text-center">
            <div className="">
                  <div className="col-md-8 modal-container">
  
                      <div className="section-title center">
                          <h2>Смело<strong>пишите нам</strong></h2>
                          <div className="line">
                              <hr/>
                          </div>
                          <div className="clearfix"></div>
                          <small><em></em></small>            
                      </div>
  
                      <form onSubmit={this.handleSubmit.bind(this)}>
                          <div className="row">
                              <div className="col-md-6">
                                  <div className="form-group">
                                      <label >Email</label>
                                      <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" onChange={this.handleChange.bind(this,'email')}/>
                                  </div>
                              </div>
                              <div className="col-md-6">
                                  <div className="form-group">
                                      <label >Имя</label>
                                      <input type="text" className="form-control" placeholder="Имя" onChange={this.handleChange.bind(this,'name')}/>
                                  </div>
                              </div>
                          </div>
                          <div className="form-group">
                              <label >Сообщение</label>
                              <textarea className="form-control" rows="3" placeholder="Сообщение" onChange={this.handleChange.bind(this,'message')}></textarea>
                          </div>
                          <button type="submit" className="btn tf-btn btn-default">Отправить</button>
                      </form>
                  </div>
          </div>
          {/* To DO modals css classes end messages */}
          <Modal open={this.state.successWindow} onClose={this.onCloseSucc.bind(this)} classNames={{overlay:'d-overlay'}}>
            <div>Ваше сообщение отправлено.</div>
          </Modal>
          <Modal open ={this.state.errorWindow} onClose={this.onCloseErr.bind(this)} classNames={{overlay:'d-overlay'}}>
              <div>Пожалуйста укажите:</div>
          </Modal>
        </div>

        );
    }
}