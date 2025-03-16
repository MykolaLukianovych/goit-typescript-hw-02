import s from "./LoadMoreBtn.module.css"


type Props = {
  onClick: () => void;
};

const LoadMoreBtn = ({ onClick }: Props) => (
    <button className={s.loadMore} onClick={onClick}>
    Load more
  </button>
);

export default LoadMoreBtn;