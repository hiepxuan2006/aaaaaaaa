/* eslint-disable jsx-a11y/anchor-has-content */
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useContext } from "react";
import { useState } from "react";
import { DataContext } from "~/Component/DataProvider";
import { TOKEN_NAME } from "~/utils/Contant";
import * as httpRequest from "~/utils/httpRequest";
import Validator from "~/utils/validate";
import style from "./Login.module.scss";
const cx = classNames.bind(style);
function Login({ setShowRegister }) {
  const [showPass, setShowPass] = useState(false);
  const { setShowAcount } = useContext(DataContext);
  const [valueForm, setValueForm] = useState({ email: "", password: "" });
  const { email, password } = valueForm;
  const [error, sertError] = useState({});
  const handleInput = (e) => {
    e.preventDefault();
    setValueForm({ ...valueForm, [e.target.name]: e.target.value });
  };
  // const requiredWith = (value, field, state) =>
  //   (!state[field] && !value) || !!value;
  const rules = [
    {
      field: "password",
      method: "isEmpty",
      validWhen: false,
      message: "The password field is required.",
    },
    {
      field: "password",
      method: "isLength",
      args: [{ min: 6 }],
      validWhen: true,
      message: "The password must be at least 6 characters.",
    },
    {
      field: "email",
      method: "isEmpty",
      validWhen: false,
      message: "The email field is required.",
    },
    {
      field: "email",
      method: "isEmail",
      validWhen: true,
      message: "The email must be a valid email address.",
    },
  ];

  const validator = new Validator(rules);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const resultError = validator.validate(valueForm);
    sertError(resultError);
    if (resultError.email === undefined && resultError.password === undefined) {
      const result = await httpRequest.post("acount/login", valueForm);
      localStorage.setItem(TOKEN_NAME, result.token);
      setValueForm({ email: "", password: "" });
      setShowAcount(false);
    }
  };
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
        <form action="" onSubmit={handleSubmit}>
          <div className={cx("form-input")}>
            <input
              type="text"
              value={email}
              name="email"
              placeholder="abc@gmail.com"
              onChange={handleInput}
              onFocus={() => sertError({ ...error.password })}
            />
          </div>
          <p className={cx("error")}>{error.email}</p>
          <div className={cx("form-input")}>
            <input
              name="password"
              type={showPass ? "text" : "password"}
              placeholder="Nhập mật khẩu"
              value={password}
              onChange={handleInput}
              onFocus={() => sertError({ ...error, password: "" })}
            />
            <p className={cx("error")}>{error.password}</p>
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
        <div className={cx("role")}>
          <span>Bằng việc tiếp tục, bạn đã chấp nhận điều khoản sử dụng</span>
        </div>
      </div>
      {/* <div className={cx("body-right")}>
        <img src={phone} alt="" />
      </div> */}
    </div>
  );
}

export default Login;
