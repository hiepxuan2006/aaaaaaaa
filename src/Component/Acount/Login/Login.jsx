/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import classNames from "classnames/bind";
import style from "./Login.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleLeft,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);
function Login({ setShowRegister }) {
  const phone = require("~/assets/img/login.png");
  const [showPass, setShowPass] = useState(false);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("body-left")}>
        {/* <div className={cx("back")}>
          <FontAwesomeIcon
            icon={faCircleLeft}
          />
        </div> */}
        <div className={cx("header")}>
          <h2>Đăng nhập</h2>
        </div>
        <div className={cx("title")}>
          <h3>Đăng nhập bằng email</h3>
          <p>Nhập email và tài khoản mật khẩu của bạn</p>
        </div>
        <form action="">
          <div className={cx("form-input")}>
            <input type="text" required placeholder="abc@gmail.com" />
          </div>
          <div className={cx("form-input")}>
            <input
              type={showPass ? "text" : "password"}
              required
              placeholder="Nhập mật khẩu"
            />
            {showPass ? (
              <FontAwesomeIcon
                onClick={() => setShowPass(false)}
                className={cx("hide-pasword")}
                icon={faEye}
              />
            ) : (
              <FontAwesomeIcon
                onClick={() => setShowPass(true)}
                className={cx("show-pasword")}
                icon={faEyeSlash}
              />
            )}
          </div>
          <div className={cx("action-btn")}>
            <button type="submit">Đăng nhập</button>
          </div>
        </form>
        <div className={cx("forgot-password")}>
          <div className={cx("login")} onClick={() => setShowRegister(true)}>
            Đăng ký
          </div>
          <div>Quên mật khẩu ?</div>
        </div>
      </div>
      {/* <div className={cx("body-right")}>
        <img src={phone} alt="" />
      </div> */}
    </div>
  );
}

export default Login;
