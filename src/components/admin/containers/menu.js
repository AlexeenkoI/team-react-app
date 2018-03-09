import React, { Component } from 'react';
import MenuItem from '../components/menuitem';


export default class Menu extends Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            isShow:this.props.showMenu,
            menus:[
                {id:1,name:'Главная', cls:'active',sub:'',link:'/admin'},
                {id:2,name:'Сайт', cls:'',sub:[
                    // {id:1,name:'Меню',link:'/main-menu'},
                    {id:2,name:'Слайдер',link:'/admin/main-slider'},
                    {id:3,name:'Услуги', link:'/admin/main-services'}
                ]},
                {id:3,name:'Что-то еще',cls:'',link:'/admin/other',sub:''}
            ]
        }
    }
    
    
    render(){
        let className = "nav-collapse slideInLeft animated";
        const menus = this.state.menus
        if(!this.props.showMenu){
            className +=" hide-left-bar";
        }
        return(
            <div id="sidebar" className={className}>
                <div className="leftside-navigation">
                    <ul className="sidebar-menu" id="nav-accordion">
                    {menus.map(oneMenu=>(
                        <MenuItem 
                        key={oneMenu.id}
                        name={oneMenu.name}
                        sub={oneMenu.sub}
                        link={oneMenu.link}
                        />
                    ))}
                    
                    </ul>
                </div>
            </div>
        )
    }
}