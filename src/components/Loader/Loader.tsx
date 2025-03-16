import { ClipLoader } from "react-spinners";
import s from "./Loader.module.css"


const Loader = () => {
  return (
    <div className={s.loader}>
      <ClipLoader className={s.clip} size={50}/>
    </div>
  );
};

export default Loader;