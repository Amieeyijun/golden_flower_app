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
            goodsAll: []
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
    componentDidMount() {
        axios.get('/goods/getitems')
            .then((res) => {
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
                <div className={style.selling}>
                    <img src="https://n3-q.mafengwo.net/s8/M00/3D/B0/wKgBpVU5sFKADn9ZAAU2Y9xlTRg773.png?imageMogr2%2Fthumbnail%2F%21750x210r%2Fgravity%2FCenter%2Fcrop%2F%21750x210%2Fquality%2F90" alt="" />
                    <div>普吉岛</div>
                </div>
                <ul className={style.scoll}>
                    <li className={style.slide}>
                        <img src="https://p2-q.mafengwo.net/s14/M00/B4/B9/wKgE2l0MgPaAQQuEAAFZREdJtL491.jpeg?imageMogr2%2Fthumbnail%2F%21210x140r%2Fgravity%2FCenter%2Fcrop%2F%21210x140%2Fquality%2F90" alt="" />
                        <div>【嘉尔网红同款小皇帝岛】普吉岛大小皇帝岛一日游+蜜月岛出海浮深潜（seastar口碑船司+登小皇帝岛+蜜月岛追海豚+可加拍深潜+中文导游）</div>
                        <p>
                            <em>￥</em>
                            <strong>159</strong>
                            起
                        </p>
                    </li>
                    <li className={style.slide}>
                        <img src="https://b3-q.mafengwo.net/s2/M00/FC/9C/wKgIDFzyPo2AVF4jABN8wsdwrNQ300.gif?imageMogr2%2Fthumbnail%2F%21210x140r%2Fgravity%2FCenter%2Fcrop%2F%21210x140%2Fquality%2F90" alt="" />
                        <div>【住家庭蜜月套房·可减500】全国出发~泰国普吉岛6天5晚半自助游（1天自由行+快艇出海PP岛+沙发里四合一+大堡礁浮潜+泰式按摩+人妖秀）</div>
                        <p>
                            <em>￥</em>
                            <strong>3280</strong>
                            起
                        </p>
                    </li>
                    <li className={style.slide}>
                        <img src="https://p2-q.mafengwo.net/s14/M00/B4/B9/wKgE2l0MgPaAQQuEAAFZREdJtL491.jpeg?imageMogr2%2Fthumbnail%2F%21210x140r%2Fgravity%2FCenter%2Fcrop%2F%21210x140%2Fquality%2F90" alt="" />
                        <div>【嘉尔网红同款小皇帝岛】普吉岛大小皇帝岛一日游+蜜月岛出海浮深潜（seastar口碑船司+登小皇帝岛+蜜月岛追海豚+可加拍深潜+中文导游）</div>
                        <p>
                            <em>￥</em>
                            <strong>159</strong>
                            起
                        </p>
                    </li>
                    <li className={style.slide}>
                        <img src="https://b3-q.mafengwo.net/s2/M00/FC/9C/wKgIDFzyPo2AVF4jABN8wsdwrNQ300.gif?imageMogr2%2Fthumbnail%2F%21210x140r%2Fgravity%2FCenter%2Fcrop%2F%21210x140%2Fquality%2F90" alt="" />
                        <div>【住家庭蜜月套房·可减500】全国出发~泰国普吉岛6天5晚半自助游（1天自由行+快艇出海PP岛+沙发里四合一+大堡礁浮潜+泰式按摩+人妖秀）</div>
                        <p>
                            <em>￥</em>
                            <strong>3280</strong>
                            起
                        </p>
                    </li>
                    <li className={style.slide}>
                        <img src="https://p2-q.mafengwo.net/s14/M00/B4/B9/wKgE2l0MgPaAQQuEAAFZREdJtL491.jpeg?imageMogr2%2Fthumbnail%2F%21210x140r%2Fgravity%2FCenter%2Fcrop%2F%21210x140%2Fquality%2F90" alt="" />
                        <div>【嘉尔网红同款小皇帝岛】普吉岛大小皇帝岛一日游+蜜月岛出海浮深潜（seastar口碑船司+登小皇帝岛+蜜月岛追海豚+可加拍深潜+中文导游）</div>
                        <p>
                            <em>￥</em>
                            <strong>159</strong>
                            起
                        </p>
                    </li>
                    <li className={style.slide}>
                        <img src="https://b3-q.mafengwo.net/s2/M00/FC/9C/wKgIDFzyPo2AVF4jABN8wsdwrNQ300.gif?imageMogr2%2Fthumbnail%2F%21210x140r%2Fgravity%2FCenter%2Fcrop%2F%21210x140%2Fquality%2F90" alt="" />
                        <div>【住家庭蜜月套房·可减500】全国出发~泰国普吉岛6天5晚半自助游（1天自由行+快艇出海PP岛+沙发里四合一+大堡礁浮潜+泰式按摩+人妖秀）</div>
                        <p>
                            <em>￥</em>
                            <strong>3280</strong>
                            起
                        </p>
                    </li>
                    <li className={style.slide}>
                        <img src="https://p2-q.mafengwo.net/s14/M00/B4/B9/wKgE2l0MgPaAQQuEAAFZREdJtL491.jpeg?imageMogr2%2Fthumbnail%2F%21210x140r%2Fgravity%2FCenter%2Fcrop%2F%21210x140%2Fquality%2F90" alt="" />
                        <div>【嘉尔网红同款小皇帝岛】普吉岛大小皇帝岛一日游+蜜月岛出海浮深潜（seastar口碑船司+登小皇帝岛+蜜月岛追海豚+可加拍深潜+中文导游）</div>
                        <p>
                            <em>￥</em>
                            <strong>159</strong>
                            起
                        </p>
                    </li>
                    <li className={style.slide}>
                        <img src="https://b3-q.mafengwo.net/s2/M00/FC/9C/wKgIDFzyPo2AVF4jABN8wsdwrNQ300.gif?imageMogr2%2Fthumbnail%2F%21210x140r%2Fgravity%2FCenter%2Fcrop%2F%21210x140%2Fquality%2F90" alt="" />
                        <div>【住家庭蜜月套房·可减500】全国出发~泰国普吉岛6天5晚半自助游（1天自由行+快艇出海PP岛+沙发里四合一+大堡礁浮潜+泰式按摩+人妖秀）</div>
                        <p>
                            <em>￥</em>
                            <strong>3280</strong>
                            起
                        </p>
                    </li>
                    <li className={style.slide}>
                        <img src="https://p2-q.mafengwo.net/s14/M00/B4/B9/wKgE2l0MgPaAQQuEAAFZREdJtL491.jpeg?imageMogr2%2Fthumbnail%2F%21210x140r%2Fgravity%2FCenter%2Fcrop%2F%21210x140%2Fquality%2F90" alt="" />
                        <div>【嘉尔网红同款小皇帝岛】普吉岛大小皇帝岛一日游+蜜月岛出海浮深潜（seastar口碑船司+登小皇帝岛+蜜月岛追海豚+可加拍深潜+中文导游）</div>
                        <p>
                            <em>￥</em>
                            <strong>159</strong>
                            起
                        </p>
                    </li>
                    <li className={style.slide}>
                        <img src="https://b3-q.mafengwo.net/s2/M00/FC/9C/wKgIDFzyPo2AVF4jABN8wsdwrNQ300.gif?imageMogr2%2Fthumbnail%2F%21210x140r%2Fgravity%2FCenter%2Fcrop%2F%21210x140%2Fquality%2F90" alt="" />
                        <div>【住家庭蜜月套房·可减500】全国出发~泰国普吉岛6天5晚半自助游（1天自由行+快艇出海PP岛+沙发里四合一+大堡礁浮潜+泰式按摩+人妖秀）</div>
                        <p>
                            <em>￥</em>
                            <strong>3280</strong>
                            起
                        </p>
                    </li>
                </ul>
                <div className={style.selling}>
                    <img src="https://b3-q.mafengwo.net/s7/M00/5F/B4/wKgB6lTdqXaAD7slAAM89OKgZkw23.jpeg?imageMogr2%2Fthumbnail%2F%21750x210r%2Fgravity%2FCenter%2Fcrop%2F%21750x210%2Fquality%2F90" alt="" />
                    <div>清迈</div>
                </div>
                <ul className={style.scoll}>
                    <li className={style.slide}>
                        <img src="https://n4-q.mafengwo.net/s13/M00/EF/60/wKgEaVzSfN2AOY3oAAR8MSPVw2Q76.jpeg?imageMogr2%2Fthumbnail%2F%21210x140r%2Fgravity%2FCenter%2Fcrop%2F%21210x140%2Fquality%2F90" alt="" />
                        <div>【 第二人半价 】清迈·清莱黑白蓝庙纯玩中文一日游（一车一导+白庙祈福风铃+可清莱出发+芒果糯米饭+网红椰子冰淇淋+星级河畔酒店自助餐）</div>
                        <p>
                            <em>￥</em>
                            <strong>159</strong>
                            起
                        </p>
                    </li>
                    <li className={style.slide}>
                        <img src="https://p2-q.mafengwo.net/s12/M00/A6/88/wKgED1v2WzaAL5IwAA4s6eKryCI203.gif?imageMogr2%2Fthumbnail%2F%21210x140r%2Fgravity%2FCenter%2Fcrop%2F%21210x140%2Fquality%2F90" alt="" />
                        <div>【下单送金卡】浪漫一夏 普吉双岛7日定制游微笑国度的夏日狂欢 （海景泳池套房+网红悬崖餐厅+双体帆船赏日落+玫瑰下午茶+夜市美食+海滩火把秀）</div>
                        <p>
                            <em>￥</em>
                            <strong>4988</strong>
                            起
                        </p>
                    </li>
                    <li className={style.slide}>
                        <img src="https://n4-q.mafengwo.net/s13/M00/EF/60/wKgEaVzSfN2AOY3oAAR8MSPVw2Q76.jpeg?imageMogr2%2Fthumbnail%2F%21210x140r%2Fgravity%2FCenter%2Fcrop%2F%21210x140%2Fquality%2F90" alt="" />
                        <div>【 第二人半价 】清迈·清莱黑白蓝庙纯玩中文一日游（一车一导+白庙祈福风铃+可清莱出发+芒果糯米饭+网红椰子冰淇淋+星级河畔酒店自助餐）</div>
                        <p>
                            <em>￥</em>
                            <strong>159</strong>
                            起
                        </p>
                    </li>
                    <li className={style.slide}>
                        <img src="https://p2-q.mafengwo.net/s12/M00/A6/88/wKgED1v2WzaAL5IwAA4s6eKryCI203.gif?imageMogr2%2Fthumbnail%2F%21210x140r%2Fgravity%2FCenter%2Fcrop%2F%21210x140%2Fquality%2F90" alt="" />
                        <div>【下单送金卡】浪漫一夏 普吉双岛7日定制游微笑国度的夏日狂欢 （海景泳池套房+网红悬崖餐厅+双体帆船赏日落+玫瑰下午茶+夜市美食+海滩火把秀）</div>
                        <p>
                            <em>￥</em>
                            <strong>4988</strong>
                            起
                        </p>
                    </li>
                    <li className={style.slide}>
                        <img src="https://n4-q.mafengwo.net/s13/M00/EF/60/wKgEaVzSfN2AOY3oAAR8MSPVw2Q76.jpeg?imageMogr2%2Fthumbnail%2F%21210x140r%2Fgravity%2FCenter%2Fcrop%2F%21210x140%2Fquality%2F90" alt="" />
                        <div>【 第二人半价 】清迈·清莱黑白蓝庙纯玩中文一日游（一车一导+白庙祈福风铃+可清莱出发+芒果糯米饭+网红椰子冰淇淋+星级河畔酒店自助餐）</div>
                        <p>
                            <em>￥</em>
                            <strong>159</strong>
                            起
                        </p>
                    </li>
                    <li className={style.slide}>
                        <img src="https://p2-q.mafengwo.net/s12/M00/A6/88/wKgED1v2WzaAL5IwAA4s6eKryCI203.gif?imageMogr2%2Fthumbnail%2F%21210x140r%2Fgravity%2FCenter%2Fcrop%2F%21210x140%2Fquality%2F90" alt="" />
                        <div>【下单送金卡】浪漫一夏 普吉双岛7日定制游微笑国度的夏日狂欢 （海景泳池套房+网红悬崖餐厅+双体帆船赏日落+玫瑰下午茶+夜市美食+海滩火把秀）</div>
                        <p>
                            <em>￥</em>
                            <strong>4988</strong>
                            起
                        </p>
                    </li>
                    <li className={style.slide}>
                        <img src="https://n4-q.mafengwo.net/s13/M00/EF/60/wKgEaVzSfN2AOY3oAAR8MSPVw2Q76.jpeg?imageMogr2%2Fthumbnail%2F%21210x140r%2Fgravity%2FCenter%2Fcrop%2F%21210x140%2Fquality%2F90" alt="" />
                        <div>【 第二人半价 】清迈·清莱黑白蓝庙纯玩中文一日游（一车一导+白庙祈福风铃+可清莱出发+芒果糯米饭+网红椰子冰淇淋+星级河畔酒店自助餐）</div>
                        <p>
                            <em>￥</em>
                            <strong>159</strong>
                            起
                        </p>
                    </li>
                    <li className={style.slide}>
                        <img src="https://p2-q.mafengwo.net/s12/M00/A6/88/wKgED1v2WzaAL5IwAA4s6eKryCI203.gif?imageMogr2%2Fthumbnail%2F%21210x140r%2Fgravity%2FCenter%2Fcrop%2F%21210x140%2Fquality%2F90" alt="" />
                        <div>【下单送金卡】浪漫一夏 普吉双岛7日定制游微笑国度的夏日狂欢 （海景泳池套房+网红悬崖餐厅+双体帆船赏日落+玫瑰下午茶+夜市美食+海滩火把秀）</div>
                        <p>
                            <em>￥</em>
                            <strong>4988</strong>
                            起
                        </p>
                    </li>
                    <li className={style.slide}>
                        <img src="https://n4-q.mafengwo.net/s13/M00/EF/60/wKgEaVzSfN2AOY3oAAR8MSPVw2Q76.jpeg?imageMogr2%2Fthumbnail%2F%21210x140r%2Fgravity%2FCenter%2Fcrop%2F%21210x140%2Fquality%2F90" alt="" />
                        <div>【 第二人半价 】清迈·清莱黑白蓝庙纯玩中文一日游（一车一导+白庙祈福风铃+可清莱出发+芒果糯米饭+网红椰子冰淇淋+星级河畔酒店自助餐）</div>
                        <p>
                            <em>￥</em>
                            <strong>159</strong>
                            起
                        </p>
                    </li>
                    <li className={style.slide}>
                        <img src="https://p2-q.mafengwo.net/s12/M00/A6/88/wKgED1v2WzaAL5IwAA4s6eKryCI203.gif?imageMogr2%2Fthumbnail%2F%21210x140r%2Fgravity%2FCenter%2Fcrop%2F%21210x140%2Fquality%2F90" alt="" />
                        <div>【下单送金卡】浪漫一夏 普吉双岛7日定制游微笑国度的夏日狂欢 （海景泳池套房+网红悬崖餐厅+双体帆船赏日落+玫瑰下午茶+夜市美食+海滩火把秀）</div>
                        <p>
                            <em>￥</em>
                            <strong>4988</strong>
                            起
                        </p>
                    </li>
                    
                </ul>
                <div className={style.bodyAll}>
                    {
                        this.state.goodsAll.map((item, index) => {
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