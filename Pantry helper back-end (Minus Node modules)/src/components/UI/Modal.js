import classes from './Modal.module.css';
import { Fragment } from 'react';
import ReactDom from 'react-dom';

const Backdrop =props=> {
    return <div className={classes.backdrop} onClick={props.onClose}/>
};

const ModalOverlay =props=> {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
};

const Modal = props => {
    return <Fragment>
        {ReactDom.createPortal(<Backdrop onClose={props.onClose} />, document.getElementById('overlays'))}
        {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById('overlays'))}
    </Fragment>
};
export default Modal;