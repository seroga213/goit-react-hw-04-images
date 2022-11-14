import { createPortal } from 'react-dom';
import { BakcDrop, ModalWindow } from './Modal.styled';
import { useEffect } from 'react';


const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, children }) => {
    useEffect(() => {
        const handlecloseEscape = (e) => {

            if (e.code === 'Escape') {
                onClose();
            }
        }

        window.addEventListener('keydown', handlecloseEscape)
    
        return (() => { window.removeEventListener('keydown', handlecloseEscape) })
    
    },[onClose])




    const closeModal = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
  }



    return createPortal(
            <BakcDrop onClick={closeModal}>
                <ModalWindow> 
                    {children}
                </ModalWindow>
            </BakcDrop>,
            
            modalRoot)
    
}