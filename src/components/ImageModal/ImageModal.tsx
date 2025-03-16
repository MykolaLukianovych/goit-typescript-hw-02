
import Modal from "react-modal";
import s from "./ImageModal.module.css"
import { Image } from "../../App";
import { MouseEvent } from "react";



type Props = {
  image: Image | null;
  onClose: () => void;
};

const ImageModal = ({ image, onClose }: Props) => {

    const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).classList.contains(s.overlay)) {
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