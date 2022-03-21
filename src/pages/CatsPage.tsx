import { useState } from "react";
import CatImage from "components/CatImage";
import SearchBar from "components/SearchBar";
import style from "./CatsPage.module.scss";
import CatsList from "./CatsList.swr";

function CatsPage() {
  const [keyword, setKeyword] = useState("");
  const { data: cats } = CatsList(keyword);

  const onSearch = (v: string) => {
    setKeyword(v);
  };

  return (
    <div className={style.cats}>
      <div className={style.header}>
        <h1>😸 고양이 사진 갤러리 😻</h1>
        <SearchBar onSearch={onSearch} />
      </div>
      <div className={style.cats_list}>
        {cats &&
          cats.map((item) => (
            <CatImage
              key={item.id}
              url={item.image?.url ? item.image.url : "/default_cat.jpg"}
              name={item.name}
            />
          ))}
      </div>
    </div>
  );
}
export default CatsPage;
