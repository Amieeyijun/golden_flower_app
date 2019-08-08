import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import style from "./Home.module.css";
import { Icon } from 'antd-mobile';
import { Carousel, WingBlank } from 'antd-mobile';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ['https://p3-q.mafengwo.net/s14/M00/93/DE/wKgE2l1Kv_SAZ-pvAAN-D4UmQ5k092.jpg?imageMogr2%2Fthumbnail%2F%21750x422r%2Fgravity%2FCenter%2Fcrop%2F%21750x422%2Fquality%2F90', 'https://n4-q.mafengwo.net/s14/M00/30/6E/wKgE2l1KMW2AXcG-AAOVbnycn4c614.jpg?imageMogr2%2Fthumbnail%2F%21750x422r%2Fgravity%2FCenter%2Fcrop%2F%21750x422%2Fquality%2F90', 'https://p1-q.mafengwo.net/s14/M00/9D/F8/wKgE2l1I1RyAHat9AAU9bRqQ58o953.jpg?imageMogr2%2Fthumbnail%2F%21750x422r%2Fgravity%2FCenter%2Fcrop%2F%21750x422%2Fquality%2F90'],
        }
    }
    componentDidMount() {

    }
    // getdata(page) {
    //     axios.get("/get", {
    //         params: {
    //             page:page
    //         }
    //     })
    // }
    // s limit?,?
    // [(page-1)*paganum,pagenum]
    render() {
        return (
            <div className={style.box}>
                {/* 导航搜索栏 */}
                <div className={style.guide}>
                    <div className={style.logo}>
                        <img src={require("../../imgs/LOGO.png")} alt="" />
                    </div>
                    <div className={style.search}>
                        <span>
                            搜索目的地/攻略/游记
                        </span>
                        <Icon type="search" size="s" />
                    </div>
                    <div className={style.login}>
                        登录
                        </div>
                </div>

                {/* 轮播图 */}
                <WingBlank className={style.wing}>
                    <Carousel
                        autoplay={true}
                        infinite>
                        {this.state.data.map(val => (
                            <div
                                key={val}
                                style={{
                                    display: 'inline-block', width: '6.4rem', height: '3.6rem'
                                }}
                            >
                                <img
                                    src={val}
                                    alt=""
                                    style={{ width: '6.4rem' }}
                                />
                            </div>
                        ))}
                    </Carousel>
                </WingBlank>
                <div className={style.guidebox}>
                    <ul>
                        <li>
                            <div>
                                <img src={require("../../imgs/GL.png")} alt="" />
                                <p>找攻略</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src={require("../../imgs/YJ.png")} alt="" />
                                <p>看游记</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src={require("../../imgs/WDR.png")} alt="" />
                                <p>问达人</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src={require("../../imgs/JB.png")} alt="" />
                                <p>结伴</p>
                            </div>
                        </li>
                        <li><div>
                            <img src={require("../../imgs/JD.png")} alt="" />
                            <p>酒店</p>
                        </div></li>
                        <li><div>
                            <img src={require("../../imgs/LX.png")} alt="" />
                            <p>去旅行</p>
                        </div></li>
                        <li><div>
                            <img src={require("../../imgs/JP.png")} alt="" />
                            <p>机票</p>
                        </div></li>
                        <li><div>
                            <img src={require("../../imgs/HD.png")} alt="" />
                            <p>当地玩乐</p>
                        </div></li>
                    </ul>
                </div>
                <div className={style.gl}>

                    <span>---- 推 荐 攻 略 ---- </span>
                </div>
                <div className={style.travelsbox}>
                    <div className={style.travelitem}>
                        <div className={style.title}>
                            这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题
                        </div>
                        <div className={style.infobox}>
                            <div><img src="https://n4-q.mafengwo.net/s11/M00/7D/CB/wKgBEFthhnSAOJdtAAMfnkYoOE843.jpeg?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90" alt="" /></div>
                            <div>
                                <div>这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介</div>
                                <div>
                                    <div>11111浏览</div>
                                    <div>谁发布的</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default withRouter(Home);