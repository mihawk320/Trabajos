import React from 'react';
import './styles/PagStyle.css';

class Modal extends React.Component{
    render(){
        return(
<div class="modal fade" id="modalCompra" tabindex="-1" role="dialog" aria-labelledby="modalCompraTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="modalCompraTitle">Comprar Tickets</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <form action="">
                <div class="form-row">
                    <div class="form-group col">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">@</span>
                            </div>
                            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                    </div>
                </div>
            </form>
            <div class="alert alert-warning" role="alert">
                Recibirás un correo de confirmación si sales sorteado
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-geek">Comprar</button>
        </div>
        </div>
    </div>
    </div>
        );
    }
}

export default Modal;