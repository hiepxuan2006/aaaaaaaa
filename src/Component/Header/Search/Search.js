import { faClose, faRotate, faSearch } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { useEffect, useRef, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Wrapper } from '~/Component/Popper';
import { useDebounce } from '~/hook';
import productService from '~/service/ProductService';
import ResultItem from '../ResultItem/ResultItem';
import style from './Search.module.scss';
const cx = classNames.bind(style);
function Search(props) {
   const [visible, setVisible] = useState(true);
   const [searchValue, setSearchValue] = useState('');
   const [searchResult, setSearchResult] = useState([]);
   const [loading, setLoading] = useState(false);
   const inputRef = useRef();
   const handleHideResult = () => {
      setVisible(false);
   };
   const debounce = useDebounce(searchValue, 800);
   useEffect(() => {
      const fethApi = async () => {
         if (!debounce.trim()) {
            setSearchResult([]);
            return;
         }

         setLoading(true);
         const paramString = { q: debounce, type: 'less' };
         const data = await productService.getSearch(paramString);
         setSearchResult(data.data);
         setLoading(false);
      };
      fethApi();
   }, [debounce]);

   return (
      <HeadlessTippy
         interactive
         visible={visible && searchResult && searchResult.length > 0}
         render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
               <Wrapper>
                  <h4 className={cx('search-title')}>Sản phẩm </h4>
                  {searchResult &&
                     searchResult.map((item, index) => {
                        return <ResultItem key={index} data={item} />;
                     })}
               </Wrapper>
            </div>
         )}
         onClickOutside={handleHideResult}
      >
         <div className={cx('search', 'hidden-mobile')}>
            <input
               ref={inputRef}
               type="text"
               name="search"
               value={searchValue}
               onChange={(e) => setSearchValue(e.target.value)}
               onFocus={() => setVisible(true)}
               placeholder="Tìm kiếm sản phẩm"
            />
            {!!searchValue && !loading && (
               <div
                  className={cx('clear')}
                  onClick={() => {
                     inputRef.current.focus();
                     setSearchResult([]);
                     setSearchValue('');
                  }}
               >
                  <FontAwesomeIcon icon={faClose} />
               </div>
            )}
            {loading ? (
               <div className={cx('loading')}>
                  <FontAwesomeIcon icon={faRotate} />
               </div>
            ) : (
               ''
            )}
            <button className={cx('btn-search')}>
               <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
            </button>
         </div>
      </HeadlessTippy>
   );
}

export default Search;
