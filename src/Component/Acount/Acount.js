import { faCircleXmark, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useContext, useState } from "react";
import { DataContext } from "../DataProvider";
import style from "./Acount.module.scss";
import ConfirmOtp from "./ConfirmOtp";
import Login from "./Login";
import Register from "./Register";

const cx = classNames.bind(style);
function Acount() {
  const [showRegister, setShowRegister] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [close, setClose] = useState(true);
  const { showAcount, setShowAcount } = useContext(DataContext);
  const resetForm = () => {};
  const phone = require("~/assets/img/login.png");

  return (
    <div className={`${cx("model")} ${showAcount ? " " : cx("close")}`}>
      <div
        onClick={() => setShowAcount(false)}
        className={`${cx("model-overlay")} ${showAcount ? " " : cx("close")}`}
      ></div>
      <div className={cx("content")}>
        <div className={cx("close-modal")} onClick={() => setShowAcount(false)}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </div>
        {!showRegister && !showConfirm && (
          <Login
            setShowRegister={setShowRegister}
            setShowAcount={setShowAcount}
            showAcount={showAcount}
          />
        )}
        {showRegister && !showConfirm && (
          <Register setShowRegister={setShowRegister} />
        )}

        {!showRegister && showConfirm && (
          <ConfirmOtp setShowConfirm={setShowConfirm} />
        )}
        <div className={cx("body-right")}>
          <img src={phone} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Acount;
