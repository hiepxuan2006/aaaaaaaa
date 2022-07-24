import React from 'react';
import style from './OrderDetail.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(style);

function OrderDeatails(props) {
   return (
      <div className={cx('wrapper')}>
         <div>
            <h1>Đơn hàng của bạn</h1>
         </div>
         <div className={cx('body')}>
            {/* <div className="row">
               <div className="col l-6 m-6 c-12"> */}
            <div className={cx('infor-order')}>
               <div>
                  <table>
                     <tr>
                        <th>
                           <h3>Thông tin đơn hàng</h3>
                        </th>
                     </tr>
                     <tr>
                        <td>Người đặt:</td>
                     </tr>
                     <tr>
                        <td>Số điện thoại:</td>
                     </tr>
                     <tr>
                        <td>Email:</td>
                     </tr>
                     <tr>
                        <td>Địa chỉ:</td>
                     </tr>
                     <tr>
                        <td>Thời gian đặt:</td>
                     </tr>
                     <tr>
                        <td>Mã đơn hàng:</td>
                     </tr>
                  </table>
                  <table>
                     <tr>
                        <th>STT</th>
                        <th>ID</th>
                        <th>Sản phẩm</th>
                        <th>Thành tiền</th>
                     </tr>
                     <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                  </table>
                  {/* </div>
                  </div> */}
               </div>
               {/* <div className="col l-6 m-6 c-12">
                  <div className={cx('product-order')}>
                     <div>
                       
                     </div>
                  </div>
               </div> */}
            </div>
         </div>
      </div>
   );
}

export default OrderDeatails;
