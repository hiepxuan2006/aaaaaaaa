import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Fragment, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productService from '~/service/productService';
import { baseURL } from '~/utils/Contant';
import { setVND } from '~/utils/curentVND';
import Shipper from '~/utils/Shipper';
import { DataContext } from '../DataProvider';
import ItemProduct from '../ListProduct/ItemProduct';
import style from './DetailsProduct.module.scss';

const cx = classNames.bind(style);

function DetailsProduct() {
   const [quantity, setQuantity] = useState(1);
   const updateQuantity = (type) => {
      if (type === 'plus') {
         setQuantity(quantity + 1);
      } else if (type === 'minus') {
         setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
      }
   };
   const [isDescProduct, setIsDescProduct] = useState(true);
   const handleInfor = () => {
      setIsDescProduct(true);
   };
   const handleShipper = () => {
      setIsDescProduct(false);
   };
   const { product } = useParams('');
   const [data, setData] = useState();
   const [listProduct, setListProduct] = useState();
   useEffect(() => {
      const fethApi = async () => {
         //  const result = await sliderService.getAll('');

         const result = await productService.getProduct(product);
         const resultLike = await productService.getRandom('');
         setData(result.data);
         //  console.log(resultLike);
         setListProduct(resultLike.data);
      };
      fethApi();
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
   }, [product]);
   const [show, setShow] = useState(false);
   const handlePlus = () => {
      setShow(!show);
   };

   const value = useContext(DataContext);
   return (
      <Fragment>
         {data && (
            <div className={cx('wrapper')}>
               <div className={cx('infor')}>
                  <div className={cx('image')}>
                     <img
                        src={`${baseURL}/${data.feature_image_path}`}
                        alt=""
                     />
                  </div>
                  <div className={cx('content')}>
                     <div className={cx('heading')}>
                        <h2>{data.name}</h2>
                     </div>
                     <span className={cx('price')}>{setVND(data.price)}</span>
                     <div className={cx('action-buy')}>
                        <div className={cx('btn-quantity')}>
                           <div
                              className={cx('minus')}
                              onClick={() => updateQuantity('minus')}
                           >
                              <FontAwesomeIcon icon={faMinus} />
                           </div>
                           <div className={cx('quantity')}>{quantity}</div>
                           <div
                              className={cx('plus')}
                              onClick={() => updateQuantity('plus')}
                           >
                              <FontAwesomeIcon icon={faPlus} />
                           </div>
                        </div>
                        <div className={cx('action-btn')}>
                           <button
                              className={cx('add-cart')}
                              onClick={() => {
                                 value.addCart(data, quantity);
                                 // toast.success("Thêm giỏ hàng thành công !");
                              }}
                           >
                              Thêm vào giỏ hàng
                           </button>
                           <button className={cx('buy')}>Mua hàng</button>
                        </div>
                     </div>
                     <div className={cx('category')}>
                        <h3>Danh mục</h3>
                        <p>{data.Category.name}</p>
                     </div>
                  </div>
               </div>
               <div className={cx('desc')}>
                  <div className={cx('action')}>
                     <button
                        className={`${
                           isDescProduct ? cx('active') : cx('un-active')
                        }`}
                        onClick={handleInfor}
                     >
                        Thông tin chi tiết sản phẩm
                     </button>
                     <button
                        className={` ${
                           isDescProduct ? cx('un-active') : cx('active')
                        }`}
                        onClick={handleShipper}
                     >
                        Chính sách giao hàng sách giao hàng
                     </button>
                     <button
                        className={` ${
                           isDescProduct ? cx('un-active') : cx('un-active')
                        }`}
                        onClick={handleShipper}
                     >
                        Đánh giá
                     </button>
                  </div>
                  <div className={cx('desc-text')}>
                     <div
                        className={`${cx('shipper')} ${
                           isDescProduct ? cx('disable') : cx('un-disable')
                        } ${show ? cx('lange') : cx('small')}`}
                     >
                        <Shipper />
                        <p
                           onClick={handlePlus}
                           className={`${cx('load')}  ${
                              show ? cx('hide') : cx('show')
                           }`}
                        >
                           {'<<< Xem thêm >>>'}
                        </p>
                        <p
                           onClick={handlePlus}
                           className={`${cx('load')} ${
                              show ? cx('show') : cx('hide')
                           }`}
                        >
                           {'<<< Thu gọn >>>'}
                        </p>
                     </div>
                     {/* //// */}
                     <div
                        className={`${cx('desc-product')} ${
                           isDescProduct ? cx('un-disable') : cx('disable')
                        } ${show ? cx('lange') : cx('small')}`}
                     >
                        <p
                           className={`${cx('text')}`}
                           dangerouslySetInnerHTML={{
                              __html: data.content,
                           }}
                        ></p>
                        <p
                           onClick={handlePlus}
                           className={`${cx('load')}  ${
                              show ? cx('hide') : cx('show')
                           }`}
                        >
                           {'<<< Xem thêm >>>'}
                        </p>
                        <p
                           onClick={handlePlus}
                           className={`${cx('load')} ${
                              show ? cx('show') : cx('hide')
                           }`}
                        >
                           {'<<< Thu gọn >>>'}
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         )}
         <div className={cx('may-like')}>
            <div className={cx('title')}>
               <h2>Có thể bạn thích</h2>
               <p></p>
            </div>
            <div className="row">
               {listProduct &&
                  listProduct.map((item, index) => {
                     return (
                        <div className="col l-4 m-4 c-12">
                           <ItemProduct item={item} key={index} />
                        </div>
                     );
                  })}
            </div>
         </div>
      </Fragment>
   );
}

export default DetailsProduct;
