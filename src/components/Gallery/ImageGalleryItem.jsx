import { ImageGalleryItems, ImageGalleryItemImage } from './ImageGalleryItem.styled';
import { Modal } from '../Modal/Modal';
import PropTypes from 'prop-types';
import { useState } from "react";

export const ImageGalleryItem = ({webformatURL,tags,largeImageURL}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const togglModal = () => {

      setModalIsOpen(!modalIsOpen)

  }  
  


  return (
         <> 
              <ImageGalleryItems>
              <ImageGalleryItemImage
                  src={webformatURL}
                  alt={tags}
              width="240"  onClick={togglModal}/>
              </ImageGalleryItems>
              {modalIsOpen &&
                  <Modal onClose={togglModal}>
                      <img
                          src={largeImageURL}
                          alt={tags}
                      ></img>
                  </Modal>}
          </>
  
      )
}


ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL:PropTypes.string.isRequired
}