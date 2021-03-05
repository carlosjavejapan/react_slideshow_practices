import React, {useRef, useEffect, useCallback} from 'react';

import {ReactComponent as FlechaIzquierda} from "./../img/left-thin.svg";
import {ReactComponent as FlechaDerecha} from "./../img/right-thin.svg";
import styled from 'styled-components';

const Slideshow = ({
        children,
        controles=false,
        autoplay=false,
        velocidad=500,
        intervalo=5000
    }) => {

    const slideshow = useRef(null);
    const intervalosSlideshow = useRef(null)

    const siguiente = useCallback(() => {
        // Comprobando que el slideshow tenga elementos
        if (slideshow.current.children.length > 0) {
            console.log('siguiente');
            // Obtenemos el primer elemento del slidshow
            const primerElemento = slideshow.current.children[0];

            // Establecemos la transion para el slideshow
            slideshow.current.style.transition = `${velocidad}ms ease-out all`;

            const widthSlide = slideshow.current.children[0].offsetWidth;

            // Mover Slideshow
            slideshow.current.style.transform = `translateX(-${widthSlide}px)`;

            const transicion = () => {
                // Reiniciamos la posicion del Slideshow.
                slideshow.current.style.transition = 'none';
                slideshow.current.style.transform = `translateX(0)`;

                // Tomamos el primer elemento y lo mandamos a final.
                slideshow.current.appendChild(primerElemento);

                slideshow.current.removeEventListener('transitionend',transicion)
            }

            // EventListener para cuando termina la animacion
            slideshow.current.addEventListener('transitionend', transicion);

        }
    },[velocidad]);


    const anterior = () => {
        console.log('anterior');

        if (slideshow.current.children.length > 0) {
            const index = slideshow.current.children.length - 1;
            const ultimoElemento = slideshow.current.children[index];
            slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild);

            slideshow.current.style.transition = 'none';

            const widthSlide = slideshow.current.children[0].offsetWidth;
            slideshow.current.style.transform = `translateX(-${widthSlide}px)`;

            setTimeout(() => {
                slideshow.current.style.transition = `${velocidad}ms ease-out all`;
                slideshow.current.style.transform = `translateX(0)`;
            }, 30);
        }
    }

    useEffect(() => {
        if (autoplay) {
                intervalosSlideshow.current = setInterval(() => {
                siguiente();
            }, intervalo);

            slideshow.current.addEventListener('mouseenter', () => {
                clearInterval(intervalosSlideshow.current);
            });

            slideshow.current.addEventListener('mouseleave', () => {
                intervalosSlideshow.current = setInterval(() => {
                    siguiente();
                }, intervalo);
            });
        }
        
    }, [autoplay, intervalo, siguiente])

    return (
        <ContenedorPrincipal>
            <ContenedorSlideShow ref={slideshow}>
                {children}        
            </ContenedorSlideShow>
            
            
            {controles && <Controles>
                <Boton onClick={anterior}>
                    <FlechaIzquierda />
                </Boton>
                <Boton derecho onClick={siguiente}>
                    <FlechaDerecha />
                </Boton>
            </Controles>}
        </ContenedorPrincipal>
    );
}

const ContenedorPrincipal = styled.div`
    position: relative;
`;
const ContenedorSlideShow = styled.div`
    display: flex;
    flex-wrap: nowrap;
`;

const Slide = styled.div`
    min-width: 100%;
    overflow: hidden;
    transition: .3s ease all;
    z-index: 10;
    position: relative;
    img {
        width: 100%;
        vertical-align: top;
    }
    /* @media only screen and (max-width: 600px) {
        padding: 0 10px;
    } */
`;
const TextSlide = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;
    background: ${props => props.colorFondo ? props.colorFondo : 'rgba(0,0,0,0.2)'};
    text-align: center;
    color: #fff;
    @media only screen and (max-width: 600px) {
        position: relative;
        font-size: 12px;
    }
`;

const Controles = styled.div`
    width: 100%;
    height: 100%;
    pointer-events: none;
    position: absolute;
    top: 0;
    z-index: 20;
`;

const Boton = styled.button`
    pointer-events: all;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    width: 50px;
    height: 100%;
    position: absolute;
    transition: .3s ease all;
    &:hover {
        background: rgba(0,0,0, 0.3);
        path {
            fill: #fff;
        }
    }
    /* @media only screen and (max-width: 600px) {
        ${props => props.derecho ? 'right: 10px' : 'left: 10px'}
    } */
    path {
        filter: ${props => props.derecho ? 'drop-shadow(-2px 0px 0px #fff)' : 'drop-shadow(2px 0px 0px #fff)' }
    }

    ${props => props.derecho ? 'right: 0' : 'left: 0'}
    
`;
 
export {Slideshow, Slide, TextSlide};