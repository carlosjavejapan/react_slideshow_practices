import React from 'react';
import {Slideshow, Slide, TextSlide} from './componentes/Slideshow';
import './style.css';
import styled from 'styled-components';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';
import img5 from './img/5.jpg';
import img6 from './img/6.jpg';
import img7 from './img/7.jpg';
import img8 from './img/8.jpg';

const App = () => {
    return (
        <main>
            <Titulo>Productos en descuento</Titulo>
            <Slideshow controles={true}>
                <Slide>
                    <a href="https://carlosjavejapan.github.io/2021-portfolio/">
                        <img src={img1} alt="foto1"/>
                    </a>
                    <TextSlide colorFondo='rgb(129 49 43)' colorTexto='#fff'>
                        <p>20% descuento en productos Amazon</p>
                    </TextSlide>
                </Slide>
                <Slide>
                    <a href="https://carlosjavejapan.github.io/2021-portfolio/">
                        <img src={img2} alt="foto1"/>
                    </a>
                    <TextSlide colorFondo='rgb(85 127 157)' colorTexto='#fff'>
                        <p>20% descuento en productos Amazon</p>
                    </TextSlide>
                </Slide>
                <Slide>
                    <a href="https://carlosjavejapan.github.io/2021-portfolio/">
                        <img src={img3} alt="foto1"/>
                    </a>
                    <TextSlide colorFondo='rgb(60 66 74)' colorTexto='#fff'>
                        <p>20% descuento en productos Amazon</p>
                    </TextSlide>
                </Slide>
                <Slide>
                    <a href="https://carlosjavejapan.github.io/2021-portfolio/">
                        <img src={img4} alt="foto1"/>
                    </a>
                    <TextSlide colorFondo='rgb(214 189 218)' colorTexto='#fff'>
                        <p>20% descuento en productos Amazon</p>
                    </TextSlide>
                </Slide>
            </Slideshow>

            <Titulo>Productos en descuento 2</Titulo>
            <Slideshow controles={true}  autoplay={true} velocidad={500} intervalo={4000}>
                <Slide>
                    <a href="https://carlosjavejapan.github.io/2021-portfolio/">
                        <img src={img5} alt="foto1"/>
                    </a>
                    <TextSlide>
                        <p>20% descuento en productos Amazon</p>
                    </TextSlide>
                </Slide>
                <Slide>
                    <a href="https://carlosjavejapan.github.io/2021-portfolio/">
                        <img src={img6} alt="foto1"/>
                    </a>
                    <TextSlide>
                        <p>20% descuento en productos Amazon</p>
                    </TextSlide>
                </Slide>
                <Slide>
                    <a href="https://carlosjavejapan.github.io/2021-portfolio/">
                        <img src={img7} alt="foto1"/>
                    </a>
                    <TextSlide>
                        <p>20% descuento en productos Amazon</p>
                    </TextSlide>
                </Slide>
                <Slide>
                    <a href="https://carlosjavejapan.github.io/2021-portfolio/">
                        <img src={img8} alt="foto1"/>
                    </a>
                    <TextSlide>
                        <p>20% descuento en productos Amazon</p>
                    </TextSlide>
                </Slide>
            </Slideshow>
        </main>
    );
}

const Titulo = styled.p`
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 10px;
    margin-top: 40px;
`;
 
export default App;