import React, { Component } from 'react';
import style from './Travel.module.css';
import { Icon } from 'antd-mobile';
import axios from '../../Axios/Axios';
import Mytravel from '../../components/Mytravel/Mytravel'
class Travel extends Component {
    constructor(props) {
        super(props)
        this.state={
            ptravel:[]
        }
        this.fm=this.fm.bind(this);
        this.fx = this.fx.bind(this)
    }

    fm(){
        this.props.history.push('/')
    }
    fx(){
        this.props.history.push('/search')
    }
    componentDidMount(){
        axios.get('/travels/getTravelAll')
        .then((res)=>{
            console.log(res.data)
            this.setState({ ptravel: res.data })
        })
        .catch(
            (err) => {
                console.log(err);
            }
        )
    }
    render() {
        return (
            <div className={style.mytravel}>
                <div className={style.daohang}>
                    <img src={require('../../imgs/LOGO.png')} alt="" />
                    <div>
                        <a href="javasript:void(0)" className={style.a1} onClick={this.fm}>官网首页</a>
                        <a href="javasript:void(0)" onClick={this.fx}><Icon type="search" size="s" /></a>
                    </div>
                </div>



                <div className={style.persontravel}>
                    {
                        this.state.ptravel.map((item, index) => {
                            return <Mytravel key={index} ttitle={item.title} tpublisher={item.publisher} tsrc={item.img}/>

                        })
                    }
                </div>
            </div>
        );
    }
}

export default Travel;