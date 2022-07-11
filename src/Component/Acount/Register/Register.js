import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faG } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import style from "./Register.module.scss";

const cx = classNames.bind(style);
function Register({ setShowLogin, setShowConfirm }) {
  const phone = require("~/assets/img/login.png");

  return (
    <div>
      <div className={cx("title")}>
        <h2>Xin Chào</h2>
      </div>
      <div className={cx("body")}>
        <div className={cx("body-left")}>
          <form action="#" className={cx("form-control")}>
            <div className={cx("phone")}>
              <input
                type="text"
                required
                name="phone"
                placeholder="Nhập số điện thoại"
              />
            </div>
            <div className={cx("action-resume")}>
              <div
                onClick={() => {
                  setShowConfirm(true);
                }}
              >
                Tiếp tục
              </div>
            </div>
          </form>
          <div onClick={() => setShowLogin(true)} className={cx("login-email")}>
            <p>Đăng nhập bằng email</p>
          </div>
          <div className={cx("node")}>
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
          </div>
          <div className={cx("role")}>
            <span>Bằng việc tiếp tục, bạn đã chấp nhận điều khoản sử dụng</span>
          </div>
        </div>
        {/* <div className={cx("body-right")}>
          <img src={phone} alt="" />
        </div> */}
      </div>
    </div>
  );
}

export default Register;
