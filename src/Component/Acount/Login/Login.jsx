/* eslint-disable jsx-a11y/anchor-has-content */
import {
   faEye,
   faEyeSlash,
   faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { DataContext } from '~/Component/DataProvider';
import { AcountService } from '~/service';
import { TOKEN_NAME } from '~/utils/Contant';
import Validator from '~/utils/validate';
import style from './Login.module.scss';
const cx = classNames.bind(style);
function Login({ setShowRegister }) {
   const [showPass, setShowPass] = useState(false);
   const { setShowAcount } = useContext(DataContext);
   const [valueForm, setValueForm] = useState({ email: '', password: '' });
   const { email, password } = valueForm;
   const [error, sertError] = useState({});
   const [loading, setLoading] = useState(false);
   const handleInput = (e) => {
      e.preventDefault();
      setValueForm({ ...valueForm, [e.target.name]: e.target.value });
   };

   const rules = [
      {
         field: 'password',
         method: 'isEmpty',
         validWhen: false,
         message: 'The password field is required.',
      },
      {
         field: 'password',
         method: 'isLength',
         args: [{ min: 6 }],
         validWhen: true,
         message: 'The password must be at least 6 characters.',
      },
      {
         field: 'email',
         method: 'isEmpty',
         validWhen: false,
         message: 'The email field is required.',
      },
      {
         field: 'email',
         method: 'isEmail',
         validWhen: true,
         message: 'The email must be a valid email address.',
      },
   ];

   const validator = new Validator(rules);
   const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      const resultError = validator.validate(valueForm);
      sertError(resultError);
      if (
         resultError.email === undefined &&
         resultError.password === undefined
      ) {
         try {
            const result = await AcountService.login(valueForm);
            console.log(result);
            localStorage.setItem(TOKEN_NAME, result.token);
            // setCookie('token', result.token, 3);
            setValueForm({ email: '', password: '' });
            setLoading(false);
            setShowAcount(false);
         } catch (error) {
            setLoading(false);
            toast.warning(error.response.data.message);
         }
      } else {
         setLoading(false);
         return;
      }
   };
   return (
      <div className={cx('wrapper')}>
         <div className={cx('body-left')}>
            {/* <div className={cx("back")}>
          <FontAwesomeIcon
            icon={faCircleLeft}
          />
        </div> */}
            <div className={cx('header')}>
               <h2>Đăng nhập</h2>
            </div>
            <div className={cx('title')}>
               <h3>Đăng nhập bằng email</h3>
               <p>Nhập email và tài khoản mật khẩu của bạn</p>
            </div>
            <form action="" onSubmit={handleSubmit}>
               <div className={cx('form-input')}>
                  <input
                     type="text"
                     value={email}
                     name="email"
                     placeholder="abc@gmail.com"
                     onChange={handleInput}
                     onFocus={() => sertError({ ...error.password })}
                  />
               </div>
               <p className={cx('error')}>{error.email}</p>
               <div className={cx('form-input')}>
                  <input
                     name="password"
                     type={showPass ? 'text' : 'password'}
                     placeholder="Nhập mật khẩu"
                     value={password}
                     onChange={handleInput}
                     onFocus={() => sertError({ ...error, password: '' })}
                  />
                  <p className={cx('error')}>{error.password}</p>
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
               <div className={cx('action-btn')}>
                  {loading ? (
                     <button disabled className="loading">
                        <FontAwesomeIcon
                           className="loading_icon"
                           icon={faSpinner}
                        />
                     </button>
                  ) : (
                     <button type="submit">Đăng nhập</button>
                  )}
               </div>
            </form>
            <div className={cx('forgot-password')}>
               <div
                  className={cx('login')}
                  onClick={() => setShowRegister(true)}
               >
                  Đăng ký
               </div>
               <div>Quên mật khẩu ?</div>
            </div>
            <div className={cx('role')}>
               <span>
                  Bằng việc tiếp tục, bạn đã chấp nhận điều khoản sử dụng
               </span>
            </div>
         </div>
         {/* <div className={cx("body-right")}>
        <img src={phone} alt="" />
      </div> */}
      </div>
   );
}

export default Login;
