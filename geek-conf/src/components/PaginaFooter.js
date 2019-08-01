import React from 'react';
import './styles/PagStyle.css';

class Footer extends React.Component{
    render(){
        return(
            <footer id="footer" class="pb-4 pt-4">
        <div class="container">
            <div class="row text-center">
                <div class="col-12 col-lg">
                    <a href="#">Preguntas Frecuentes</a>
                </div>
                <div class="col-12 col-lg">
                    <a href="#">Contáctanos</a>
                </div>
                <div class="col-12 col-lg">
                    <a href="#">Prensa</a>
                </div>
                <div class="col-12 col-lg">
                    <a href="#">Terminos y condiciones</a>
                </div>
                <div class="col-12 col-lg">
                    <a href="#">Privacidad</a>
                </div>
                <div class="col-12 col-lg">
                    <a href="#">Estudiantes</a>
                </div>
            </div>
        </div>
    </footer>
        );
    }
}

export default Footer;