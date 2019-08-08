import React, { Component } from 'react';
import style from './Mygoods.module.css'
class Mygoods extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    render() {
        return (
            <a href="/mygoodsinfo" className={style.mygoods}>
                <img src={this.props.gsrc} alt=""/>
                <div>{this.props.gtitle}</div>
                <span>￥{this.props.gprice}<b>起</b></span>
            </a>
        );
    }
}

export default Mygoods;