import React, { Component } from 'react';
import { withRouter,Link } from "react-router-dom";
import style from "./Home.module.css";
import { Icon } from 'antd-mobile';
import { Carousel, WingBlank } from 'antd-mobile';
import axios from "../../Axios/Axios";
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ['https://p3-q.mafengwo.net/s14/M00/93/DE/wKgE2l1Kv_SAZ-pvAAN-D4UmQ5k092.jpg?imageMogr2%2Fthumbnail%2F%21750x422r%2Fgravity%2FCenter%2Fcrop%2F%21750x422%2Fquality%2F90', 'https://n4-q.mafengwo.net/s14/M00/30/6E/wKgE2l1KMW2AXcG-AAOVbnycn4c614.jpg?imageMogr2%2Fthumbnail%2F%21750x422r%2Fgravity%2FCenter%2Fcrop%2F%21750x422%2Fquality%2F90', 'https://p1-q.mafengwo.net/s14/M00/9D/F8/wKgE2l1I1RyAHat9AAU9bRqQ58o953.jpg?imageMogr2%2Fthumbnail%2F%21750x422r%2Fgravity%2FCenter%2Fcrop%2F%21750x422%2Fquality%2F90'],
            page: 1,
            pagenum: 7,
            tavelsdata: [],
            block: "none"
        }
        this.getdata = this.getdata.bind(this);
        this.totop = this.totop.bind(this);
        this.fn = this.fn.bind(this)
        this.fm = this.fm.bind(this)
    }
    fn() {
        this.props.history.push('/travel')
    }
    fm() {
        this.props.history.push('/goods')
    }
    componentDidMount() {
        let page = this.state.page;
        let pagenum = this.state.pagenum;
        this.getdata(page, pagenum);
        window.addEventListener('scroll', this.scrollHandler.bind(this));

        window.onbeforeunload = function () {
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;

        }

    }
    componentWillUnmount() {
        // window.removeEventListener('scroll', this.handleScroll.bind(this));
        clearTimeout(this.timeouter)
        this.setState = (state, callback) => {
            return
        }

    }
    scrollHandler() {

        let clientheight = document.body.clientHeight;
        let scolltop = document.documentElement.scrollTop || document.body.scrollTop
        let mintop = clientheight - scolltop;
        if (scolltop >= 200) {
            this.setState({
                block: "block"
            })
        } else {
            this.setState({
                block: "none"
            })
        }
        if (mintop <= 800) {
            var mypage = this.state.page + 1
            this.setState({
                page: mypage
            })
        }
        this.getdata(mypage, this.state.pagenum);
    }
    totop() {
        // console.log(document.documentElement.scrollTop)
        document.documentElement.scrollTop = 0;
        // this.setState({
        //     block: "none"
        // })
    }
    getdata(page, pagenum) {
        // console.log(22222)
        axios.get("/travels/getTravels", {
            params: {
                page: page,
                pagenum: pagenum
            }
        }).then((res) => {
            // console.log(res.data)
            let mydata = this.state.tavelsdata.concat(res.data);
            this.setState({
                tavelsdata: mydata
            })
        }).catch(err => {
            console.log(err)
        })
    }
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
                        <Link to='/admin'>登录</Link>
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
                            <div onClick={this.fn}>
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
                        <li>
                            <div>
                                <img src={require("../../imgs/JD.png")} alt="" />
                                <p>酒店</p>
                            </div>
                        </li>
                        <li>
                            <div onClick={this.fm}>
                                <img src={require("../../imgs/LX.png")} alt="" />
                                <p>去旅行</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src={require("../../imgs/JP.png")} alt="" />
                                <p>机票</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src={require("../../imgs/HD.png")} alt="" />
                                <p>当地玩乐</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={style.gl}>

                    <span>---- 推 荐 攻 略 ---- </span>
                </div>
                <div className={style.travelsbox}>
                    {
                        this.state.tavelsdata.map((item, index) => {
                            return (
                                <div className={style.travelitem} key={index}>
                                    <div className={style.title}>
                                        {item.title}
                                    </div>
                                    <div className={style.infobox}>
                                        <div><img src={item.img} alt="" /></div>
                                        <div>
                                            <div className={style.info}>{item.info}<span className={style.txt}></span>
                                            </div>
                                            <div className={style.publisher}>
                                                <div>11111浏览</div>
                                                <div>By {item.publisher}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                <div className={style.totop} style={{ display: this.state.block }} onClick={this.totop}>
                    <Icon type="up" size="m" />
                </div>
            </div>

        );
    }
}

export default withRouter(Home);