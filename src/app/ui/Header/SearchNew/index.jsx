'use client';
import { useState, useEffect, useRef, useCallback, use } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';
import { Search } from '@/app/ui/Header/HeaderStyles';
import { useRouter } from 'next/navigation';
import styles from './Search.module.scss';
import {
  setSearchedProducts,
  cleareSearchedProducts,
  // setSearchValue,
} from '@/redux/slices/SearchProductSlice';
import { createLinkProduct } from '@/app/lib/createLinkProduct';

const SearchNew = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const inputRef = useRef();
  const listRef = useRef(null);
  const router = useRouter();
  const { catalogLinks } = useSelector((state) => state.catalogLinks);
  const { searchedProducts } = useSelector((state) => state.search);
  // const { searchValue } = useSelector((state) => state.search);


  const getProducts = async () => {
    try {
      let res;
      const search = searchValue ? `searchQuery=${searchValue}&` : '';
      if (search) {
        res = await fetch(
          `https://stage.eco-bike.com.ua/api/search?${search}&page=1&limit=10`,
          { next: { revalidate: 3600 } },
        );
      }

      if (res) {
        const data = await res.json();
        if (data) {
          dispatch(setSearchedProducts(data.results));
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const updateSearchValue = useCallback(
    debounce((str) => {
      // dispatch(setSearchValue(str));
      setSearchValue(str);
    }, 350),
    [],
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  const onClickClear = () => {
    dispatch(cleareSearchedProducts());
    setValue('');
    inputRef.current.focus();
  };

  const onClickProduct = (event) => {
    const id = event.target.id;
    const text = event.target.innerHTML;
    const { link } = catalogLinks.find((obj) => obj._id === id);
    const productName = createLinkProduct(text);
    router.push(`/${link}/${productName}`);
    dispatch(cleareSearchedProducts());
    setValue('');
  };

  useEffect(() => {
    getProducts();
  }, [searchValue]);

  // const useCallback = (listRef) => {
  //   const handleClickOutside = (ev) => {
  //     if (listRef && !listRef.current.containes(ev.target)) {
  //       console.log('outside');
  //     } else {
  //       console.log('inside');
  //     }
  //   };
  //   useEffect(() => {
  //     document.addEventListener('click', handleClickOutside);
  //     return () => {
  //       document.removeEventListener('click', handleClickOutside);
  //     };
  //   });
  // };
  

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
        {value && searchedProducts && (
          <ul className={styles.list}>
            {searchedProducts.map((obj) => (
              <li
                onClick={onClickProduct}
                key={obj._id}
                style={{
                  display: 'flex',
                  marginBottom: '10px',
                  cursor: 'pointer',
                }}
              >
                <img
                  style={{ width: '40px', marginRight: '10px' }}
                  src={obj.picture[0]}
                  alt="img"
                />
                <p id={obj.category}>{obj.name}</p>
              </li>
            ))}
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
