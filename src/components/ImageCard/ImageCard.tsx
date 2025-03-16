import { Image } from "../../App";
import s from "./ImageCard.module.css"


type Props = {
  image: Image;
  openModal: (image: Image) => void;
};


const ImageCard = ({ image, openModal }: Props) => {
  return (
    <div className={s.imageCard} onClick={() => openModal(image)}>
      <img src={image.urls.small} alt={image.alt_description}/>
    </div>
  );
};

export default ImageCard;