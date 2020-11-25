import React, { Component } from 'react';
import Button from '../button/Button';
import Modal from '../modal/Modal';
import './Footer.css';
import Logo from './cut.png'

class Footer extends Component {

    state = {
        showAboutUs: false,
        showFaq: false,
        showContact: false
    }

    onBtnClick = (e) => {
        this.setState({
            showAboutUs: true,
            showFaq: false,
            showContact: false
        })
    }
    onBtnFaqClick = (e) => {
        this.setState({
            showAboutUs: false,
            showFaq: true,
            showContact: false
        })
    }
    onBtnContactClick = (e) => {
        this.setState({
            showAboutUs: false,
            showFaq: false,
            showContact: true
        })
    }

    onBtnClose = (e) => {
        this.setState({
            showAboutUs: false,
            showFaq: false,
            showContact: false
        })
    }

    render() {
        //  const { show } = this.state;
        return (
            <div className="footer">
                <div className='pictureDiv'></div>
                <div className='columnDiv'>
                    <Button
                        onBtnClick={this.onBtnClick}
                        name={'About us'} />
                    {this.state.showAboutUs && <Modal className={'aboutUs'}
                        text1={<a href='https://github.com/DzmitryPS'>DIMA GITHUB</a>}
                        text2={<a href='https://github.com/valiant9191'>VALENTIN GITHUB</a>}
                        text3={'NIKOLAI GITHUB'}
                        text4={<a href='https://github.com/yuryiva'>YURY GITHUB</a>}
                        close={this.onBtnClose}
                    />}
                </div>
                <div className='columnDiv'>
                    <Button
                        onBtnClick={this.onBtnFaqClick}
                        name={'FAQ'} />
                    {this.state.showFaq && <Modal className={'faq'}
                        text1={<b>"How do I purchase cryptocurrency?"</b>}
                        text2={<p>Our webpage reports on the trading activities of thousands of markets but does not directly sell any cryptocurrency. The best way to find where to buy is by looking on the markets section for the cryptocurrency. </p>}
                        text3={<b>"What is <em>Market Capitalization</em> and how is it calculated?"</b>}
                        text4={<p><em>Market Capitalization</em> is one way to rank the relative size of a cryptocurrency. It's calculated by multiplying the Price by the Circulating Supply.
                                Market Cap = Price X Circulating Supply"
                              </p>}
                        close={this.onBtnClose}
                    />
                    }
                </div>
                <div className='columnDiv'>
                    <Button
                        onBtnClick={this.onBtnContactClick}
                        name={'Contact'} />
                    {this.state.showContact && <Modal className='contactUs'
                    text1={'crypto@crypto.com'}
                    close={this.onBtnClose}
                    />}
                    
                </div>
            </div>
        )
    }
}

export default Footer;