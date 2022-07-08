/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import classNames from "classnames/bind";
import style from "./Login.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);
function Login({ setShowLogin }) {
  const phone = require("~/assets/img/login.png");

  return (
    <div className={cx("wrapper")}>
      <div className={cx("body-left")}>
        <div className={cx("back")}>
          <FontAwesomeIcon
            icon={faCircleLeft}
            onClick={() => setShowLogin(false)}
          />
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
            <input type="password" required placeholder="Nhập mật khẩu" />
          </div>
          <div className={cx("action-btn")}>
            <button type="submit">Đăng nhập</button>
          </div>
        </form>
        <div className={cx("forgot-password")}>
          <a href="">Quên mật khẩu ?</a>
        </div>
      </div>
      <div className={cx("body-right")}>
        <img src={phone} alt="" />
      </div>
    </div>
  );
}

export default Login;
