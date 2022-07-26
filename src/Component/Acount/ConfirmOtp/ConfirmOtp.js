import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './ConfirmOtp.module.scss';
import classNames from 'classnames/bind';
import validator from 'validator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { AcountService } from '~/service';
import { toast } from 'react-toastify';

const cx = classNames.bind(style);
ConfirmOtp.propTypes = {
   emailVerify: PropTypes.string,
};

function ConfirmOtp({
   setShowConfirm,
   setShowRegister,
   emailVerify,
   setEmailVerify,
}) {
   const [value, setValue] = useState({
      otp: '',
      email: '',
   });
   const [loading, setLoading] = useState(false);

   const [err, setErr] = useState({});
   const { otp, email } = value;
   const handleChange = (e) => {
      setValue({ ...value, [e.target.name]: e.target.value });
   };
   const valudatorAll = () => {
      const msg = {};
      if (emailVerify) {
         if (!validator.isLength(otp, { min: 6, max: 7 })) {
            msg.otp = 'nhập mã OTP gồm 6 chử số';
         }
         if (validator.isEmpty(otp)) {
            msg.otp = 'Vui lòng nhập mã !';
         }
      } else {
         if (!validator.isEmail(email)) {
            msg.email = 'Email không hợp lệ !';
         }
         if (validator.isEmpty(email)) {
            msg.email = 'Vui lòng nhập email !';
         }
      }

      setErr(msg);
      return Object.keys(msg).length > 0 ? false : true;
   };
   console.log(err);
   const handleSubmit = async (e) => {
      e.preventDefault();
      const isValid = valudatorAll();
      if (isValid && emailVerify) {
         try {
            setLoading(true);
            const results = await AcountService.verify({
               email: emailVerify,
               otp,
            });
            if (results.success) {
               setLoading(false);
               toast.success('Đăng ký thành công!');
               setShowConfirm(false);
            }
         } catch (error) {
            setLoading(false);
            toast.warning(error.response.data.message);
         }
      }
   };
   const handleSubmitSearch = async (e) => {
      e.preventDefault();
      const isValid = valudatorAll();
      if (isValid) {
         try {
            setLoading(true);
            const results = await AcountService.search({ email: email });
            if (results.success) {
               setValue({ ...value, email: '' });
               setLoading(false);
               setEmailVerify(results.email);
            }
         } catch (error) {
            setLoading(false);
            toast.warning(error.response.data.message);
         }
      }
   };
   return (
      <div className={cx('wrapper')}>
         {emailVerify ? (
            <div className={cx('body-left')}>
               <div
                  onClick={() => {
                     setShowRegister(true);
                     setShowConfirm(false);
                  }}
                  className={cx('back')}
               >
                  <FontAwesomeIcon icon={faCircleLeft} />
               </div>

               <form action="" onSubmit={handleSubmit}>
                  <div className={cx('title')}>
                     <h2>Nhập mã xác minh</h2>
                     <p>
                        Để xác minh tài khoản, nhập mã gồm 6 chữ số vừa được gửi
                        đến email : {emailVerify}
                     </p>
                  </div>
                  <div className={cx('form-input')}>
                     <input
                        name="otp"
                        onChange={handleChange}
                        type="text"
                        value={otp}
                        placeholder="000000"
                        className={cx('input-otp')}
                     />
                     <p className={cx('err')}>{err.otp}</p>
                  </div>
                  <div className={cx('action-btn')}>
                     {loading ? (
                        <button disabled className="loading">
                           <FontAwesomeIcon
                              icon={faSpinner}
                              className="loading_icon"
                           />
                        </button>
                     ) : (
                        <button>Xác minh</button>
                     )}
                  </div>
               </form>
               <div className={cx('confirm')}>
                  <p>Không nhận được mã ? </p>
                  <a href="">Gửi lại mã</a>
               </div>
               <div className={cx('node')}>
                  <span>Mã xác minh có hiệu lực trong 15 phút</span>
               </div>
            </div>
         ) : (
            <div className={cx('body-left')}>
               <div
                  onClick={() => {
                     setShowRegister(true);
                     setShowConfirm(false);
                  }}
                  className={cx('back')}
               >
                  <FontAwesomeIcon icon={faCircleLeft} />
               </div>

               <form action="" onSubmit={handleSubmitSearch}>
                  <div className={cx('title')}>
                     <h2>Nhập email</h2>
                  </div>
                  <div className={cx('form-input')}>
                     <input
                        className={cx('input-email')}
                        name="email"
                        onChange={handleChange}
                        type="search"
                     />
                     <p className={cx('err')}>{err.email}</p>
                  </div>
                  <div className={cx('action-btn')}>
                     {loading ? (
                        <button disabled className="loading">
                           <FontAwesomeIcon
                              icon={faSpinner}
                              className="loading_icon"
                           />
                        </button>
                     ) : (
                        <button>Tìm kiếm</button>
                     )}
                  </div>
               </form>
            </div>
         )}
         {/* <div className={cx("body-right")}>
        <img src={phone} alt="" />
    </div> */}
      </div>
   );
}

export default ConfirmOtp;
