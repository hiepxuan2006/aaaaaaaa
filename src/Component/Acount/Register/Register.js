import {
   faEye,
   faEyeSlash,
   faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { toast } from 'react-toastify';
import validator from 'validator';
import { AcountService } from '~/service';
import style from './Register.module.scss';
const cx = classNames.bind(style);
function Register({ setShowRegister, setShowConfirm, setEmailVerify }) {
   const [showPass, setShowPass] = useState(false);
   //    const [showPassConf, setShowPassConf] = useState(false);
   const [loading, setLoading] = useState(false);
   const [err, setErr] = useState({});
   const [ValueForm, setValueForm] = useState({
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
   });
   const { name, email, password, passwordConfirm } = ValueForm;

   const handleCHange = (e) => {
      setValueForm({ ...ValueForm, [e.target.name]: e.target.value });
   };
   const validatorAll = () => {
      const msg = {};
      if (!validator.isLength(name, { min: 4 })) {
         msg.name = 'Vui lòng nhập lại';
      }
      if (!validator.isEmail(email)) {
         msg.email = 'Vui lòng nhập đúng email';
      }

      if (password !== passwordConfirm) {
         msg.passwordConfirm = 'Không trùng với mật khẩu.vui lòng nhập lại';
      }
      if (!validator.isLength(password, { min: 6 })) {
         msg.password = 'Mật khẩu ít nhất phải 6 kí tự';
      }
      if (validator.isEmpty(email)) {
         msg.email = 'Vui lòng nhập';
      }
      if (validator.isEmpty(password)) {
         msg.password = 'Vui lòng nhập';
      }
      if (validator.isEmpty(name)) {
         msg.name = 'Vui lòng nhập';
      }
      if (validator.isEmpty(passwordConfirm)) {
         msg.passwordConfirm = 'Vui lòng nhập';
      }
      setErr(msg);
      if (Object.keys(msg).length > 0) return false;
      return true;
   };
   const handleSubmit = async (e) => {
      e.preventDefault();
      const isValid = validatorAll();
      if (!isValid) {
         return;
      } else {
         try {
            setLoading(true);
            const results = await AcountService.register(ValueForm);
            setLoading(false);
            if (results.success) {
               setEmailVerify(results.data.email);
               setShowConfirm(true);
               setShowRegister(false);
            }
         } catch (error) {
            console.log(error);
            setLoading(false);
            toast.warning(error.response.data.message);
         }
      }
   };
   return (
      <div className={cx('wrapper')}>
         <div className={cx('body')}>
            <div className={cx('title')}>
               <h2>Đăng ký</h2>
            </div>
            <div className={cx('body-left')}>
               <form
                  action="#"
                  className={cx('form-control')}
                  onSubmit={handleSubmit}
               >
                  <div className={cx('form-input')}>
                     <input
                        type="text"
                        name="name"
                        placeholder="Nhập username"
                        onChange={handleCHange}
                     />
                     <p className={cx('err')}>{err.name}</p>
                  </div>

                  <div className={cx('form-input')}>
                     <input
                        type="text"
                        name="email"
                        onChange={handleCHange}
                        placeholder="Nhập email"
                     />
                     <p className={cx('err')}>{err.email}</p>
                  </div>
                  <div className={cx('form-input')}>
                     <input
                        name="password"
                        placeholder="Nhập mật khẩu"
                        onChange={handleCHange}
                        type={showPass ? 'text' : 'password'}
                     />
                     <p className={cx('err')}>{err.password}</p>
                     {showPass ? (
                        <FontAwesomeIcon
                           onClick={() => setShowPass(false)}
                           className={cx('hide-pasword')}
                           icon={faEye}
                        />
                     ) : (
                        <FontAwesomeIcon
                           onClick={() => setShowPass(true)}
                           className={cx('show-pasword')}
                           icon={faEyeSlash}
                        />
                     )}
                  </div>
                  <div className={cx('form-input')}>
                     <input
                        type={'password'}
                        name="passwordConfirm"
                        onChange={handleCHange}
                        placeholder="Nhập lại mật khẩu"
                     />
                     <p className={cx('err')}>{err.passwordConfirm}</p>
                     {/* {showPassConf ? (
                        <FontAwesomeIcon
                           onClick={() => setShowPassConf(false)}
                           className={cx('hide-pasword')}
                           icon={faEye}
                        />
                     ) : (
                        <FontAwesomeIcon
                           onClick={() => setShowPassConf(true)}
                           className={cx('show-pasword')}
                           icon={faEyeSlash}
                        />
                     )} */}
                  </div>

                  <div className={cx('action-resume')}>
                     {loading ? (
                        <button disabled className="loading">
                           <FontAwesomeIcon
                              icon={faSpinner}
                              className="loading_icon"
                           />
                        </button>
                     ) : (
                        <button>Tiếp tục</button>
                     )}
                  </div>
               </form>
               <div className={cx('login-email')}>
                  <p onClick={() => setShowRegister(false)}>Đăng nhập </p>
                  <p
                     onClick={() => {
                        setShowConfirm(true);
                        setShowRegister(false);
                     }}
                  >
                     Xác nhận tài khoản
                  </p>
               </div>
               {/* <div className={cx("node")}>
            <h4>Hoặc tiếp tục bằng</h4>
            <p></p>
          </div>
          <div className={cx("action-other")}>
            <div className={cx("facebook")}>
              <FontAwesomeIcon icon={faFacebookF} />
            </div>
            <div className={cx("gmail")}>
              <FontAwesomeIcon icon={faG} />
            </div>
          </div> */}
            </div>
         </div>
      </div>
   );
}

export default Register;
