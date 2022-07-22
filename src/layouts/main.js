import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import './main.css';
import Block from '../components/block';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import './main.css';
import Phone from '../components/phone';

export default class Main extends Component {
    state = { active: 0 };

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = event => {
        const { pageYOffset,innerHeight } = window;
        const { active } = this.state;
        console.log(innerHeight)
        console.log(pageYOffset)
        this.setState({active : (pageYOffset-(pageYOffset%innerHeight))/innerHeight})
    };



    urls = [
        "https://web-images.credcdn.in/_next/assets/images/home-page/features/fold1.png",
        "https://web-images.credcdn.in/_next/assets/images/home-page/features/fold2.png",
        "https://web-images.credcdn.in/_next/assets/images/home-page/features/fold3.png",
        "https://web-images.credcdn.in/_next/assets/images/home-page/features/fold4.png"
    ]
    render() {
        const { active } = this.state;
        
        return (
            
                <div className="container-fluid" >
                    <div className="row" >
                    <div className="col-sm-6 col-2 two">
                        <Block
                        title = "My fist block"
                        content = "lets roll bitches"
                        ></Block>
                        <Block
                        title = "My fist block"
                        content = "lets roll bitches"
                        ></Block> 
                        <Block
                        title = "My fist block"
                        content = "lets roll bitches"
                        ></Block>
                        <Block
                        title = "My fist block"
                        content = "lets roll bitches"
                        ></Block>
                        
                    </div>
                        <div className="col-sm-4 offset-sm-8 fixed-top one" style={{display:"flex", top:"15vh"}}>
                            <Phone url ={this.urls[active]}></Phone>
                      </div>
                      
                </div>
            </div>
        )
    }
}
