import React from 'react';
import './styles/PagStyle.css';
import tesoro from '../img/tesoro.jpg';

class Place extends React.Component{
    render(){
        return(
        <section id="place-time">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-lg-6 pl-0 pr-0">
                    <img src={tesoro} alt="El Tesoro"/>
                </div>
                <div class="col-12 col-lg-6 pt-4 pb-4 ">
                    <h4>Centrol Comercial el Tesoro - Agosto 2019</h4>
                    <p>Centro comercial en Medellín, con una variada 
                        oferta en moda, servicios, tecnología, 
                        restaurantes, entretenimiento y mucho más. 
                        Un parque comercial para toda la familia.
                    </p>
                    <a class="btn btn-outline-light " href="https://eltesoro.com.co/">Conoce más</a>
                </div>
            </div>
        </div>

    </section>
        );
    }
}

export default Place;