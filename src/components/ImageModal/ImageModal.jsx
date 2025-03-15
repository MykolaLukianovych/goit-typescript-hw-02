import Modal from "react-modal";
import s from "./ImageModal.module.css"


const ImageModal = ({ image, onClose }) => {

    const handleOverlayClick = (e) => {
    if (e.target.classList.contains(s.overlay)) {
      onClose()
    };
  };


  return (
    <Modal isOpen={!!image} onRequestClose={onClose} className={s.modal}>
      <div className={s.overlay} onClick={handleOverlayClick}>
        {image && (
          <>
            <img className={s.img} src={image.urls.regular} alt={image.alt_description} />
          </>
        )}
      </div>
    </Modal>
  );
};

export default ImageModal;