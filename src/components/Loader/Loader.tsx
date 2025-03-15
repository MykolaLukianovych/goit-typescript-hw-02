import { ClipLoader } from "react-spinners";
import s from "./Loader.module.css"


const Loader = () => {
  return (
    <div className={s.loader}>
      <ClipLoader size={50} color="#007bff" position="center"/>
    </div>
  );
};

export default Loader;