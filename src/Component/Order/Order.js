import React, { Fragment } from 'react';
import style from './Order.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { useContext } from 'react';
import { DataContext } from '../DataProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import productService from '~/service/ProductService';
import { baseURL } from '~/utils/Contant';
import { toast } from 'react-toastify';
import { setVND } from '~/utils/curentVND';
import { Link } from 'react-router-dom';
const cx = classNames.bind(style);

function Order(props) {
   const { isLogin, user } = useContext(DataContext);
   const [order, setOrder] = useState();
   const [ma_dh, setMa_dh] = useState();
   const handleChange = (e) => {
      const ma_dh = e.target.value;
      setMa_dh(ma_dh);
   };
   const handleSearchOrder = async () => {
      setOrder([]);
      try {
         const results = await productService.searchOrder({ ma_dh });
         if (results.success) {
            if (results.data.length > 0) {
               setOrder(results.data);
            } else {
               toast.warning('Không tìm thấy đơn hàng bạn cần tìm!');
            }
         }
      } catch (error) {
         toast.danger('Lỗi,vui lòng thử lại!');
      }
   };
   useEffect(() => {
      if (!isLogin) {
         setOrder([]);
         return;
      } else {
         const fetchApi = async () => {
            try {
               let results = await productService.getOrder({
                  email: user.email,
               });
               // results = results.data.map((item) => {
               //    return item.Products;
               // });
               // console.log(results);
               setOrder(results.data);
            } catch (error) {
               toast.warning('Không tải được dữ liệu đơn hàng');
            }
         };
         fetchApi();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [isLogin]);
   return (
      <div className={cx('wrapper')}>
         {isLogin ? (
            <ul className={cx('nav-bar')}>
               <li className={cx('nav-item')}>
                  <p>Tất cả</p>
               </li>
               <li className={cx('nav-item')}>
                  <p>Chờ xác nhận</p>
               </li>
               <li className={cx('nav-item')}>
                  <p>Chờ lấy hàng</p>
               </li>
               <li className={cx('nav-item')}>
                  <p>Đang giao</p>
               </li>
               <li className={cx('nav-item')}>
                  <p>Đã giao</p>
               </li>
            </ul>
         ) : (
            <div className={cx('search-order')}>
               <h3>Bạn chưa đăng nhập!</h3>
               <p>Vui lòng nhập mẫ để kiểm tra đơn hàng !</p>
               <div className={cx('search-input')}>
                  <input name="ma_dh" onChange={handleChange} type="text" />
                  <div
                     className={cx('icon')}
                     onClick={(e) => handleSearchOrder(e)}
                  >
                     <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                  </div>
               </div>
            </div>
         )}
         <div className={cx('list-order')}>
            {order ? (
               order.map((item, key) => {
                  return (
                     <div className={cx('order-item')}>
                        {item.Products &&
                           item.Products.map((i, k) => {
                              return (
                                 <Link
                                    to={'/don-hang/chi-tiet'}
                                    key={k}
                                    className={cx('infor')}
                                 >
                                    <div className={cx('image')}>
                                       <img
                                          src={`${baseURL}/${i.feature_image_path}`}
                                          alt=""
                                       />
                                    </div>
                                    <div className={cx('infor-order')}>
                                       <h2>{i.name}</h2>
                                       <h3>Danh mục:</h3>
                                       <h3>x {i.Order_item.quantity}</h3>
                                    </div>
                                    <div className={cx('price')}>
                                       <h3>
                                          {setVND(
                                             i.price * i.Order_item.quantity,
                                          )}
                                       </h3>
                                    </div>
                                 </Link>
                              );
                           })}
                        <div className={cx('price-order')}>
                           <div className={cx('desc')}>
                              <h3>Tổng số tiền:{setVND(item.price_total)}</h3>
                              <p>
                                 Tình trạng đơn hàng:<h3> {item.status}</h3>
                              </p>
                           </div>
                        </div>
                     </div>
                  );
               })
            ) : (
               <div>
                  <h2>Chưa có đơn hàng</h2>
               </div>
            )}
         </div>
      </div>
   );
}

export default Order;
