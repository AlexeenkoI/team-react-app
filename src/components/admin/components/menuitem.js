import React, { Component } from 'react';

export default class MenuItem extends Component{
    constructor(props){
        super(props);
        this.state={
            menus:[
                {name:'Главная', cls:'active'},
                {name:'Сайт', cls:''},
                {name:'Что-то еще',cls:''}
            ]
        }
    }
    render(){
        const {menus} = this.state;
        return(
        <div>
            {/* <a className="active" href="index.html">
                <i className="fa fa-dashboard"></i>
                <span>Dashboard</span>
            </a> */}
            
          {menus.map(menu => (
            <li key={menu.name}>
            <a className={menu.cls}>
            <i className="fa fa-dashboard"></i>
              {menu.name}
              </a>
            </li>
          ))}
        
        </div>
        
        )
    }
}
