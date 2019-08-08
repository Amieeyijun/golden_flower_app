import React, { Component } from 'react';
import style from './Mytravel.module.css'
class Mytravel extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <a href="/travelone" className={style.Mytravel}>
                <div>
                    <h3>{this.props.ttitle}</h3>
                    <div className={style.people}>{this.props.tpublisher} 在<span>爱琴海</span></div>
                    <div className={style.talkto}>
                        <img src={require('../../imgs/eyes.png')} alt=""/>
                        2888
                        <img src={require('../../imgs/talk.png')} alt=""/>
                        666
                    </div>
                </div>
                <img src={this.props.tsrc} alt=""/>
            </a>
        );
    }
}

export default Mytravel;