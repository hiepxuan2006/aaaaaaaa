import React, { useContext } from 'react';
import style from './Checkout.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { DataContext } from '../DataProvider';

const cx = classNames.bind(style);
function CheckoutLeft(props) {
    const { theme, cart, setCLose, showNavbar, setShowNavbar, setShowAcount } =
        useContext(DataContext);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('shipper')}>
                <div className={cx('header')}>
                    <h3>Thông tin thanh toán</h3>
                </div>
                <div className={cx('is-login')}>
                    <p>Bạn đã có tài khản ?</p>
                    <div
                        className={cx('login')}
                        onClick={() => setShowAcount(true)}
                    >
                        Đăng nhập
                    </div>
                </div>
                <div className={cx('infor')}>
                    <div className={cx('name')}>
                        <input type="text" placeholder="Họ và tên" id="" />
                    </div>
                    <div className={cx('phone')}>
                        <input type="text" placeholder="Số điện thoại" id="" />
                    </div>
                    <div className={cx('infor-address')}>
                        <input type="text" placeholder="Địa chỉ" id="" />
                    </div>
                </div>
                <div className={cx('address')}>
                    <select name="" id="">
                        <option value="null" selected>
                            Chọn tỉnh/thành phố
                        </option>
                    </select>
                    <select name="" id="">
                        <option value="null" selected>
                            Chọn quận/huyện
                        </option>
                    </select>
                    <select name="" id="">
                        <option value="null" selected>
                            Chọn phường/xã
                        </option>
                    </select>
                </div>
                <div className={cx('node')}>
                    <h3>Thông tin bổ sung</h3>
                    <h4>Ghi chú đơn hàng (Tùy chọn )</h4>
                    <textarea
                        placeholder="Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn."
                        rows="2"
                        cols="5"
                    ></textarea>
                </div>
                <div className={cx('link')}>
                    <Link to={'/cart'}>Quay về giỏ hàng</Link>
                </div>
            </div>
        </div>
    );
}

export default CheckoutLeft;
