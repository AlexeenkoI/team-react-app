import React, { Component } from 'react';

import { Eye } from 'react-preloading-component';
import { Form, FormControl, FormGroup, ControlLabel, Button, Modal, Glyphicon  } from 'react-bootstrap'

export default class Redactserviceform extends Component{
    constructor(props){
        super(props)
        this.state = {
            id : this.props.editItem ? this.props.editItem.id : null,
            isLoading : false,
            imgUrl : this.props.editItem ? this.props.editItem.imgUrl : null,
            img : this.props.editItem ? this.props.editItem.img : null,
            name: this.props.editItem ? this.props.editItem.name : null,
            description : this.props.editItem ? this.props.editItem.description : null, 
            filters : this.props.filters,
            currentFilters: this.props.editItem ? this.props.editItem.currentFilters : []
        }
        console.log('editor');
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
        //console.log('submit');
        let formData = {
            id:this.state.id,
            imgUrl:this.state.imgUrl,
            image:this.state.img,
            name:this.state.name,
            description:this.state.description,
        }
        this.props.change(this.state);
        this.props.hide(this.props.editItem? this.props.editItem : null,e);
    }
    handleSelectChange=(e)=>{
        let newCats = this.state.currentFilters;
        if(!this.state.currentFilters.includes(e.target.value)){
        newCats.push(e.target.value);
        
        this.setState({currentFilters:newCats});
        }
        console.log(this.state.currentFilters);
    }

    onChange = (e)=>{
        e.preventDefault();
        let newState = this.state
        newState[e.target.name]=e.target.value;
        this.setState(newState);
    }
    onHide = (e)=>{
        this.setState(this.baseState);
        this.props.hide(this.props.editItem? this.props.editItem : null,e);
    }
    removeCat = (currentCat)=>{
        console.log(currentCat);
        this.setState({currentFilters:this.state.currentFilters.filter(cat=>{return cat !== currentCat})})
    }
    render(){

        return(
            <Modal show={this.props.show} onHide={(e)=>this.onHide(e)}>
            <Modal.Header closeButton>
                <Modal.Title>{this.props.editItem ?('Редактировать Услугу'):('Добавить услугу')}</Modal.Title>
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
                        <img src={this.state.imgUrl ? this.state.imgUrl: this.state.img } alt={'загрузите картинку'} style={{width:"120px",height:"120px"}}/>
                    )}
                    </div>
                </div>
                <div className="form-group">
                    <label >Название</label>
                    <input type="text" className="form-control" name="name" id="name" value={this.state.name ? this.state.name : ''} placeholder="Название"  onChange={(e)=>this.onChange(e)}/>
                </div>
                <div className="form-group">
                    <label >Описание</label>
                    <input type="text" className="form-control" name="description" id="job" value={this.state.description ? this.state.description : ''} placeholder="Описание" onChange={(e)=>this.onChange(e)}/>
                </div>
                <div className="form-group">
                <label >Категории</label>
                <FormControl componentClass="select" multiple onChange={this.handleSelectChange.bind(this)}>
                {this.state.filters.map(filter=>(
                    <option key={filter.id} value={filter.value}>{filter.name}</option>
                ))}
                </FormControl>
                </div>
                <div className="form-group" style={{display:"inline-block"}}>
                <label >Выбранные категории</label>
                </div>
                <div>
                {this.state.currentFilters.length>0 ? (
                    this.state.currentFilters.map(currentCat=>(
                        <Button key={currentCat} onClick={(e)=>this.removeCat(currentCat)}><span className="cat-text">{currentCat}</span><Glyphicon glyph="remove" /></Button>
                    ))
                ):(
                  <span>Категории не выбраны</span> 
                )}
                </div>
                <button type="submit" className="btn btn-primary">Добавить</button>
            </form>
            </Modal.Body>
        </Modal>
        )
    }
}
