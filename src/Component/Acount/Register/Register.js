import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState } from 'react';
import style from './Register.module.scss';

const cx = classNames.bind(style);
function Register({ setShowRegister, setShowConfirm }) {
    const phone = require('~/assets/img/login.png');
    const [showPass, setShowPass] = useState(false);
    const [showPassConf, setShowPassConf] = useState(false);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('body')}>
                <div className={cx('title')}>
                    <h2>Đăng ký</h2>
                </div>
                <div className={cx('body-left')}>
                    <form action="#" className={cx('form-control')}>
                        <div className={cx('form-input')}>
                            <input
                                type="text"
                                required
                                name="name"
                                placeholder="Nhập username"
                            />
                        </div>
                        <div className={cx('form-input')}>
                            <input
                                type="text"
                                required
                                name="email"
                                placeholder="Nhập email"
                            />
                        </div>
                        <div className={cx('form-input')}>
                            <input
                                required
                                name="password"
                                placeholder="Nhập mật khẩu"
                                type={showPass ? 'text' : 'password'}
                            />
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
                                type={showPassConf ? 'text' : 'password'}
                                required
                                name="passwordConfirm"
                                placeholder="Nhập lại mật khẩu"
                            />
                            {showPassConf ? (
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
                            )}
                        </div>

                        <div className={cx('action-resume')}>
                            <div
                                onClick={() => {
                                    setShowConfirm(true);
                                }}
                            >
                                Tiếp tục
                            </div>
                        </div>
                    </form>
                    <div
                        onClick={() => setShowRegister(false)}
                        className={cx('login-email')}
                    >
                        <p>Đăng nhập </p>
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
