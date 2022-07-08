import React from "react";
import style from "./ConfirmOtp.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);
function ConfirmOtp({ setShowConfirm }) {
  const phone = require("~/assets/img/login.png");

  return (
    <div className={cx("wrapper")}>
      <div className={cx("body-left")}>
        <div onClick={() => setShowConfirm(false)} className={cx("back")}>
          <FontAwesomeIcon icon={faCircleLeft} />
        </div>
        <div className={cx("title")}>
          <h2>Nhập mã xác minh</h2>
          <p>
            Để xác minh số điện thoại của bạn, nhập mã gồm 6 chữ số vừa được gửi
            đến 0987654321
          </p>
        </div>
        <div className={cx("form-input")}>
          <input type="text" placeholder="0" />
          <input type="text" placeholder="0" />
          <input type="text" placeholder="0" />
          <input type="text" placeholder="0" />
          <input type="text" placeholder="0" />
          <input type="text" placeholder="0" />
        </div>

        <div className={cx("action-btn")}>
          <button>Xác minh</button>
        </div>
        <div className={cx("confirm")}>
          <p>Không nhận được mã ? </p>
          <a href="">Gửi lại mã</a>
        </div>
        <div className={cx("node")}>
          <span>Mã xác minh có hiệu lực trong 15 phút</span>
        </div>
      </div>
      <div className={cx("body-right")}>
        <img src={phone} alt="" />
      </div>
    </div>
  );
}

export default ConfirmOtp;
