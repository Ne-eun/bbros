import style from "./CatImage.module.scss";

type Props = {
  url: string;
  name: string;
};
function CatImage({ url, name }: Props) {
  return (
    <div className={style.cat_img}>
      <img src={url} alt={name} />
      <p>{name}</p>
    </div>
  );
}

export default CatImage;
