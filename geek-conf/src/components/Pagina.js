import React from 'react';
import Header from './PaginaHeader.js';
import Main from './PaginaMain.js';
import Place from  './PaginaPlace.js';
import Speakers from './PaginaSpeakers';
import Orador from './PaginaOrador';
import Footer from './PaginaFooter';
import Modal from './Modal.js';
import './styles/PagStyle.css'

class Pag extends React.Component{
    render(){
        return(
          <div className="Pag">
            {/*Header */}
               <Header/>
            {/*Main*/}
                <Main/>
            {/*Speakers*/}
                <Speakers/>
            {/*Lugar y fecha */}
                <Place/>
            {/*Conviertete en orador*/}
               <Orador/> 
            {/* Footer*/}
                <Footer/>
            {/*Modal*/}
                <Modal/>
          </div>
        );
    }
}

export default Pag;