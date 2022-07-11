import classNames from "classnames/bind";
import { useContext, useState } from "react";
import { DataContext } from "../DataProvider";
import style from "./Acount.module.scss";
import ConfirmOtp from "./ConfirmOtp";
import Login from "./Login";
import Register from "./Register";

const cx = classNames.bind(style);
function Acount() {
  const [showLogin, setShowLogin] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [close, setClose] = useState(true);
  const { showAcount, setShowAcount } = useContext(DataContext);
  return (
    <div className={`${cx("model")} ${showAcount ? " " : cx("close")}`}>
      <div
        onClick={() => setShowAcount(false)}
        className={`${cx("model-overlay")} ${showAcount ? " " : cx("close")}`}
      ></div>
      <div className={cx("content")}>
        {!showLogin && !showConfirm && (
          <Register
            setShowLogin={setShowLogin}
            setShowConfirm={setShowConfirm}
          />
        )}
        {showLogin && !showConfirm && <Login setShowLogin={setShowLogin} />}

        {!showLogin && showConfirm && (
          <ConfirmOtp setShowConfirm={setShowConfirm} />
        )}
      </div>
    </div>
  );
}

export default Acount;
