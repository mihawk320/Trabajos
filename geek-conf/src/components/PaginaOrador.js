import React from 'react';
import './styles/PagStyle.css';

class Orador extends React.Component{
    render(){
        return(
<section id="conviertete-en-orador" class="pt-4 pb-3">
        <div class="container">
            <div class="row">
                <div class="col text-uppercase text-center">
                    <small >
                        Conviértete en un
                    </small>
                    <h2>ORADOR</h2>
                </div>
            </div>
            <div class="row">
                <div class="col text-center">
                    Anótate como orador para dar una charla <abbr data-toggle="tooltip" title="Charlas de 5 minutos">ignite</abbr> 
                    Cuentanos de que quieres hablar
                </div>
            </div>
            <div class="row">
                <div class="col col-md-10 offset-md-1 col-lg-8 offset-lg-2 pt-2">
                    <form>
                        <div class="form-row">
                            <div class="form-group col-12 col-md-6">
                                <input type="text" class="form-control" placeholder="Nombre"/>
                            </div>
                            <div class="form-group col-12 col-md-6">
                                <input type="text" class="form-control" placeholder="Apellido"/>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col">
                                <textarea name="text" class="form-control form-control-lg" placeholder="Sobre qué quieres hablar"></textarea>
                                <small class="form-text text-muted">
                                    Recuerda incluir un título para tu charla
                                </small>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col">
                                <button type="button" class="btn btn-geek btn-block">Enviar</button>
                            </div>
                        </div>
                        </form>
                </div>
            </div>       
        </div>
    </section>
        );
    }
}

export default Orador;