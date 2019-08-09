import React, { Component } from 'react';
import style from './Goodsinfo.module.css';
import { Carousel, WingBlank } from 'antd-mobile';
class Goodsinfo extends Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
    }
    render() {
        return (
            <div className={style.goodsinfo}>
                <h3>我的订单</h3>
                <WingBlank className={style.lbt} >
                    <Carousel
                        autoplay={false}
                        infinite
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                        dots={false}
                    >
                        {this.state.data.map(val => (
                            <a
                                key={val}
                                href="http://www.alipay.com"
                                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                                <img
                                    src={`https://b3-q.mafengwo.net/s14/M00/07/64/wKgE2l0S4vqAPFQsAADGKOcltIo008.png`}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>
                </WingBlank>
                <div className={style.dao}>
                    <div>全部</div>
                    <div>待支付</div>
                    <div>待出行</div>
                    <div>待点评</div>
                    <div>取消/退款</div>
                </div>
                <div className={style.body}></div>
            </div>
        );
    }
}

export default Goodsinfo;