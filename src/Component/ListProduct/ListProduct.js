import style from './ListProduct.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import ItemProduct from './ItemProduct';
import { useEffect, useState } from 'react';
import { ProductService } from '~/service';
const cx = classNames.bind(style);
function ListProduct() {
   let [data, setData] = useState([]);
   useEffect(() => {
      const fetchApi = async () => {
         try {
            const params = { limit: 8 };
            const result = await ProductService.getAll(params);
            setData(result.data);
         } catch (error) {}
      };
      fetchApi();
   }, []);
   return (
      <div className={cx('wrapper')}>
         <div className={cx('wrapper-content')}>
            <div className={cx('heading')}>
               <div className={cx('heading-left')}>
                  <p></p>
                  <h1>Sản phẩm nổi bật</h1>
               </div>
               <div className={cx('heading-right')}>
                  <Link to={'/cua-hang'} className={cx('link')}>
                     <p>Xem tất cả</p>
                     <FontAwesomeIcon icon={faAngleRight} />
                  </Link>
               </div>
            </div>
            <div className={cx('content')}>
               <div className="row">
                  {data.map((item, index) => {
                     return (
                        <div className="col l-3 m-4 c-12 mt2" key={index}>
                           <ItemProduct item={item} />
                        </div>
                     );
                  })}
               </div>
            </div>
         </div>
      </div>
   );
}

export default ListProduct;
