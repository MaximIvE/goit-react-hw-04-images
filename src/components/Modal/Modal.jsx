import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalContetn } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component{
    //Цей метод запускається, коли модальне вікно монтується
    componentDidMount(){
        window.addEventListener('keydown', this.closeModalEsc);
    }

    //Цей метод запускається, коли модалка розмонтується
    componentWillUnmount(){
        window.removeEventListener('keydown', this.closeModalEsc);
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
        return createPortal(<Overlay onClick={this.closeModalBackdrop}>
            <ModalContetn >
                <img src="" alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, facilis error cumque harum, et illum maxime itaque reprehenderit aliquam esse qui repellat impedit sequi obcaecati dolores consectetur ullam possimus asperiores.</p>
            </ModalContetn>
        </Overlay>, modalRoot);
    }
}

