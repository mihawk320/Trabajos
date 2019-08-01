import React from 'react';
import confLogo from '../img/ac-geek-logo.png';
import './styles/PagStyle.css';

class Header extends React.Component{
    render(){
        return(
        <nav id="header" class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src={confLogo} alt="Academia Geek Logo"/>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#main">La conferencia</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#speakers">Los oradores</a>
                </li>
                <li class="nav-item">
                        <a class="nav-link" href="#place-time">El lugar y la fecha</a>
                </li>
                <li class="nav-item">
                        <a class="nav-link" href="#conviertete-en-orador">Conviértete en orador</a>
                </li>
                <li class="nav-item">
                        <a class="nav-link text-ac-geek" href="#" data-toggle="modal" data-target="#modalCompra">Comprar tickets</a>
                </li>
                </ul>
                </div>
            </div>
        </nav>
        );  
    }
}

export default Header;