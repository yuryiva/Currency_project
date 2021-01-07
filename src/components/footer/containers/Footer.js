import React from 'react'
import Footer from '../components/footer'
import Icon from '../components/icons'

export default function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>About Us</Footer.Title>
                    <Footer.Link href="#">Nikolai</Footer.Link>
                    <Footer.Link href="https://github.com/valiant9191" target='_blank'>Valentine</Footer.Link>
                    <Footer.Link href="https://github.com/yuryiva#" target='_blank'>Yury</Footer.Link>
                </Footer.Column>
               
                <Footer.Column>
                <Footer.Title>Our school</Footer.Title>
                    <Footer.Link href="https://www.wildcodeschool.com/en-GB" target="_blank">Wild Code School</Footer.Link>
                    
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="https://www.facebook.com/dmitry.piskun.5" target="_blank"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link href="https://www.instagram.com/dmitry_piskun/" target="_blank"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="https://github.com/DzmitryPS/Currency_project" target="_blank"><Icon className="fab fa-github" />Gitgub</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}
