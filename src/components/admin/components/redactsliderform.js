import React, { Component } from 'react';
// import tOne from '../../img/team/Igor2.jpg';
// import tTwo from '../../img/team/Miha.jpg';
// import tThree from '../../img/team/Yura.jpg';
import {Button, Modal} from 'react-bootstrap';
import { Eye } from 'react-preloading-component';

export default class Redactsliderform extends Component{
    constructor(props){
        super(props);
        console.log('constructor');
        this.state = {
            id : this.props.editItem ? this.props.editItem.id : null,
            isLoading : false,
            imgUrl : this.props.editItem ? this.props.editItem.img : null,
            img : null,
            name: this.props.editItem ? this.props.editItem.name : null,
            job : this.props.editItem ? this.props.editItem.position : null,
            desc : this.props.editItem ? this.props.editItem.descripton : null 
        }

    }

    handleImageChange=(e)=>{
        let file = e.target.files[0];
        let reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onprogress=()=>{
            this.setState({
                isLoading:true
            })
        }

        reader.onloadend = () => {
            this.setState({
              isLoading:false,
              imgUrl: reader.result,
              img: file
            });
          }
    }
    removePic=()=>{
        this.setState({
            imgUrl:null,
            img:null
        });
       console.log(this.state);
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log('submit');
        let formData = {
            id:this.state.id,
            imgUrl:this.state.imgUrl,
            image:this.state.img,
            name:this.state.name,
            position:this.state.job,
            description:this.state.desc,
        }
        console.log(formData);
        this.props.change(formData);
        this.props.hide(this.props.editItem? this.props.editItem : null,e);
    }
    onHide = (e)=>{
        this.setState(this.baseState);
        this.props.hide(this.props.editItem? this.props.editItem : null,e);
    }
    onChange = (e)=>{
        e.preventDefault();
        let newState = this.state
        newState[e.target.name]=e.target.value;
        this.setState(newState);
    }
    render(){

        return(
            <Modal show={this.props.show} onHide={(e)=>this.onHide(e)}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.editItem ?('Редактировать Сотрудника'):('Добавить сотрудника')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   
                <form onSubmit={(e)=>this.handleSubmit(e)}>
                    <div className="form-group">
                        <label className="btn btn-info btn-file">
                        {this.props.editItem ?('Изменить'):('Загрузить')} <input type="file" style={{display: "none"}}  onChange={(e)=>this.handleImageChange(e)}/>
                        </label>
                        {this.state.imgUrl  && (
                            <label> <button className="btn btn-danger" onClick={(e)=>this.removePic()}>Удалить</button></label>
                        )
                        }
                       
                        <div className="img-preview" >
                        {this.state.isLoading ? (
                            <Eye/>
                        ) :(
                            <img src={this.state.imgUrl ?this.state.imgUrl: '' } alt={this.state.imgUrl? '':'загрузите картинку'} style={{width:"120px",height:"120px"}}/>
                        )}
                        </div>
                    </div>
                    <div className="form-group">
                        <label >Имя</label>
                        <input type="text" className="form-control" name="name" id="name" value={this.state.name ? this.state.name : ''} placeholder="Имя"  onChange={(e)=>this.onChange(e)}/>
                    </div>
                    <div className="form-group">
                        <label >Должность</label>
                        <input type="text" className="form-control" name="job" id="job" value={this.state.job ? this.state.job : ''} placeholder="Должность" onChange={(e)=>this.onChange(e)}/>
                    </div>
                    <div className="form-group">
                        <label >Мини-описание</label>
                        <input type="text" className="form-control" name="desc" id="desc" value={this.state.desc ? this.state.desc : ''} placeholder="Описание" onChange={(e)=>this.onChange(e)}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Добавить</button>
                </form>
                </Modal.Body>
            </Modal>
        )
    }
}
