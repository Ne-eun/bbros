import { ChangeEvent, KeyboardEvent, useRef } from "react";
import style from "./SearchBar.module.scss";

type Props = {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearch?: (v: string) => void;
};
function SearchBar({ onChange, onSearch }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e);
  };
  const onSearchHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch && onSearch(e.currentTarget.value);
      // remove input value after 'Enter' event
      (e.target as HTMLInputElement).value = "";
    }
  };
  const onClickHandler = () => {
    onSearch && inputRef.current && onSearch(inputRef.current.value);
  };

  return (
    <div className={style.search_bar}>
      <input
        ref={inputRef}
        type="text"
        onChange={onChangeHandler}
        onKeyPress={onSearchHandler}
      />
      <button onClick={onClickHandler}>search</button>
    </div>
  );
}

export default SearchBar;
