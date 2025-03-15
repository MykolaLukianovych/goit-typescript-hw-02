import s from "./LoadMoreBtn.module.css"

const LoadMoreBtn = ({ onClick }) => (
    <button className={s.loadMore} onClick={onClick}>
    Load more
  </button>
);

export default LoadMoreBtn;