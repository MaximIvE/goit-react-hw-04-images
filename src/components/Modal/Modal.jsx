import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalContetn } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component{
    //Цей метод запускається, коли модальне вікно монтується
    componentDidMount(){
        window.addEventListener('keydown', this.closeModalEsc);
        document.documentElement.style.overflow='hidden';
    }

    //Цей метод запускається, коли модалка розмонтується
    componentWillUnmount(){
        window.removeEventListener('keydown', this.closeModalEsc);
        document.documentElement.style.overflow=null;
    }

    closeModalEsc = (e) => {
        if(e.code === 'Escape'){
            this.props.onClose();
        }
    }

    closeModalBackdrop = (e) =>{
        if(e.target === e.currentTarget){ this.props.onClose()}
    }

    render(){
        const {children} = this.props;
        return createPortal(<Overlay onClick={this.closeModalBackdrop}>
            <ModalContetn >
                {children}
            </ModalContetn>
        </Overlay>, modalRoot);
    }
}

