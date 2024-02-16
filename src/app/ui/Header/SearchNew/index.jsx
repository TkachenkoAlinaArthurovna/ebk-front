import React from 'react';
// import { useDispatch } from "react-redux";
import debounce from 'lodash.debounce';
import { Search } from '@/app/ui/Header/HeaderStyles';

import styles from './Search.module.scss';
// import { setSearchValue } from "../redux/slices/filterSlice";

const SearchNew = () => {
  // const dispatch = useDispatch()
  const [value, setValue] = React.useState('');
  const inputRef = React.useRef();

  const onClickClear = () => {
    // dispatch(setSearchValue(""));
    setValue('');
    inputRef.current.focus();
  };

  // функция задержки поиска => которая записивает инпут в редакс из которой достается и делается запрос или сразу запрос..
  // => полученний массив из бека вставляем в всплывающее окно внизу инпута
  // => если есть ответ то виводим ответ от бека под инрут
  // => ссылка на товар или категорию
  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 250),
    [],
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    // updateSearchValue(event.target.value);
  };
  console.log(value);
  return (
    <Search>
      <div className={styles.root}>
        <svg
          className={styles.icon}
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M27.0215,24.6064,22.0254,19.61a9.0257,9.0257,0,1,0-1.4141,1.414l4.9961,4.9961a1,1,0,1,0,1.4141-1.4141ZM8,14a7,7,0,1,1,7,7A7.0081,7.0081,0,0,1,8,14Z" />
        </svg>
        <input
          ref={inputRef}
          value={value}
          onChange={onChangeInput}
          className={styles.input}
          placeholder="Я шукаю..."
        />
        {value && (
          <ul className={styles.list}>
            <li>список найденній товаров з затримкою </li>
          </ul>
        )}

        {value && (
          <svg
            onClick={onClickClear}
            className={styles.closeIcon}
            viewBox="0 0 20 19.84"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.17,10l3.89-3.89a.37.37,0,1,0-.53-.53L9.64,9.43,5.75,5.54a.37.37,0,1,0-.53.53L9.11,10,5.22,13.85a.37.37,0,0,0,0,.53.34.34,0,0,0,.26.11.36.36,0,0,0,.27-.11l3.89-3.89,3.89,3.89a.34.34,0,0,0,.26.11.35.35,0,0,0,.27-.11.37.37,0,0,0,0-.53Z" />
          </svg>
        )}
      </div>
    </Search>
  );
};

export default SearchNew;
