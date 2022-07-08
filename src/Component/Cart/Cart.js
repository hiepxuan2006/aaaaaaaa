import { faClose, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { baseURL } from "~/utils/Contant";
import { setVND } from "~/utils/curentVND";
import { DataContext } from "../DataProvider";
import style from "./CartSmall.module.scss";

const cx = classNames.bind(style);
function Cart(props) {
  const { cart } = useContext(DataContext);
  const { close, setCLose, deleteCartItem } = useContext(DataContext);
  const handleClose = () => {
    setCLose(false);
  };
  const totalPrice = cart.reduce((accmulator, currentValue, indexValue) => {
    return accmulator + currentValue.product.price * currentValue.quantity;
  }, 0);
  return (
    <div className={`${cx("model")} ${close ? " " : cx("close")}`}>
      <div
        onClick={handleClose}
        className={`${cx("model-overlay")} ${close ? " " : cx("close")}`}
      ></div>
      <div
        className={`${close ? cx("show-cart") : cx("hide-cart")} ${cx(
          "wrapper"
        )}`}
      >
        <div className={cx("header")}>
          <div className={cx("heading")}>
            <h3>Giỏ Hàng</h3>
          </div>
          <div className={cx("clear")} onClick={handleClose}>
            <FontAwesomeIcon icon={faClose} />
          </div>
        </div>
        <div className={cx("cart-content")}>
          {cart.length === 0 ? (
            <></>
          ) : (
            cart.map((item, index) => {
              return (
                <div key={index} className={cx("content")}>
                  <div className={cx("cart-image")}>
                    <img
                      src={`${baseURL}/${item.product.feature_image_path}`}
                      alt=""
                    />
                  </div>
                  <div className={cx("cart-infor")}>
                    <div className={cx("cart-name")}>
                      <h3>{item.product.name}</h3>
                    </div>
                    <div className={cx("cart-price")}>
                      <p>{setVND(item.product.price)}</p>
                    </div>
                    <div className={cx("quantity")}>
                      <p>{item.quantity}</p>
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      deleteCartItem(item.product.id);
                      toast.success("Đã xóa sản phẩm !", {
                        className: "toast__item",
                      });
                    }}
                    className={cx("cart-clear")}
                  >
                    <FontAwesomeIcon icon={faTrashCan} />
                  </div>
                </div>
              );
            })
          )}
          <div className={cx("totalPrice")}>
            <h3>Tổng tiền:</h3>
            <p>{setVND(totalPrice)}</p>
          </div>
        </div>
        <div className={cx("cart-btn")}>
          <div onClick={handleClose} className={cx("buy-ing")}>
            <button>Tiếp tục mua hàng</button>
          </div>
          <Link
            to={"/checkout"}
            onClick={handleClose}
            className={cx("check-out")}
          >
            <button>Mua hàng</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
