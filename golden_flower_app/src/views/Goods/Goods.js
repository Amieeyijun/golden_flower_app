import React, { Component } from 'react';
import style from './Goods.module.css';
import { Icon } from 'antd-mobile';
import axios from '../../Axios/Axios';
import { Carousel, WingBlank } from 'antd-mobile';
import './Goods.css'
import Mygoods from '../../components/Mygoods/Mygoods'
class Goods extends Component {
    constructor(props) {
        super(props)
        this.state = {
            goodsAll:[]
        }
        this.fm = this.fm.bind(this);
        this.fx = this.fx.bind(this);
        this.fy = this.fy.bind(this);
        this.fz = this.fz.bind(this);
    }
    fm() {
        this.props.history.push('/goodsinfo')
    }
    fx() {
        this.props.history.push('/search')
    }
    fy() {
        this.props.history.push('/')
    }
    fz() {
        this.props.history.push('/travel')
    }
    componentDidMount(){
        axios.get('/goods/getitems')
        .then((res)=>{
            console.log(res.data)
            this.setState({ goodsAll: res.data })
        })
        .catch(
            (err) => {
                console.log(err);
            }
        )
    }
    render() {
        return (
            <div className={style.mygoods}>
                <div className={style.daohang}>
                    <img src={require('../../imgs/LOGO.png')} alt="" />
                    <div>
                        <a href="javasript:void(0)" onClick={this.fx}><Icon type="search" size="s" /></a>
                        <a href="javasript:void(0)" className={style.a1} onClick={this.fm}>订单</a>
                    </div>
                </div>
                <div className={style.menu}>
                    <div onClick={this.fy}>首页</div>
                    <div>目的地</div>
                    <div onClick={this.fz}>游记</div>
                    <div>酒店</div>
                </div>
                <div className={style.lbt}>
                    <img src="https://css.mafengwo.net/mobile/images/sales/index/i_index5.png" alt="" />
                    <div className={style.tlbt}>
                    <WingBlank>
                        <Carousel className="my-carousel"
                            vertical
                            dots={false}
                            dragging={false}
                            swiping={false}
                            autoplay
                            infinite
                        >
                            <div className="v-item">北京送签日本旅游</div>
                            <div className="v-item">中国台湾单次旅游</div>
                            <div className="v-item">北京送签菲律宾旅游</div>
                            <div className="v-item">叠加优惠800+</div>
                        </Carousel>
                    </WingBlank>
                    </div>
                    <a href="#">更多</a>
                </div>
                <div className={style.bodyAll}>
                    {
                        this.state.goodsAll.map((item,index)=>{
                            return <Mygoods key={index}
                            gsrc={item.src1}
                            gtitle={item.package}
                            gprice={item.price}
                            />
                        })
                        
                    }
                    
                </div>
                
            </div>
        );
    }
}

export default Goods;