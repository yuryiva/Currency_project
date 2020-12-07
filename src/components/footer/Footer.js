import React, { Component } from 'react';
import Button from '../button/Button';
import Modal from '../modal/Modal';
import './Footer.css';
// import Logo from './cut.png'      val:add this line to comment,  becouse this is never used, & node show's mistake

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
                        text1={<a href='https://github.com/DzmitryPS'>Dima GITHUB</a>}
                        text2={<a href='https://github.com/valiant9191'>Valentin GITHUB</a>}
                        text3={'NIKOLAI GITHUB'}
                        text4={<a href='https://github.com/yuryiva'>Yuri GITHUB</a>}
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
                        text5={<b>What is the difference between a <em>"Coin"</em> and a <em>"Token"</em> </b>}
                        text6={<p>A <em>Coin</em> is a cryptocurrency that can operate independently. A <em>Token</em> is a cryptocurrency that depends on another cryptocurrency as a platform to operate. Check out the crypto tokens listings to view a list of tokens and their respective platforms.
                                </p>}
                        text7={<b>Why is the <em>Circulating Supply</em> used in determining the market capitalization instead of <em>Total Supply?</em> </b>}
                        text8={<p>We've found that <em>Circulating Supply</em> is a much better metric for determining the market capitalization. Coins that are locked, reserved, or not able to be sold on the public market are coins that can't affect the price and thus should not be allowed to affect the market capitalization as well. The method of using the Circulating Supply is analogous to the method of using public float for determining the market capitalization of companies in traditional investing.
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