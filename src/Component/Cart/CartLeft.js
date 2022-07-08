import { faMinus, faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { baseURL } from "~/utils/Contant";
import { setVND } from "~/utils/curentVND";
import { DataContext } from "../DataProvider";
import style from "./Cart.module.scss";

const cx = classNames.bind(style);
function CartLeft(props) {
  const { cart, addQuantityCart, deleteCartItem } = useContext(DataContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (cart.length === 0) return <h2>Cart emty</h2>;
  return (
    <div className={cx("wrapper")}>
      <div className={cx("list-product")}>
        <table>
          <thead>
            <tr className={cx("title")}>
              <th>
                <h3>Sản phẩm</h3>
              </th>
              <th>
                <h3>Số lượng</h3>
              </th>
              <th>
                <h3>Tạm tính</h3>
              </th>
            </tr>
          </thead>

          {cart.map((item, index) => {
            return (
              <tr>
                <td className={cx("product")}>
                  <div className={cx("product-img")}>
                    <img
                      src={`${baseURL}/${item.product.feature_image_path}`}
                      alt=""
                    />
                  </div>
                  <div className={cx("product-name")}>
                    <h2>{item.product.name}</h2>
                    <p>{setVND(item.product.price)}</p>
                  </div>
                </td>
                <td>
                  <div className={cx("btn-quantity")}>
                    <div
                      className={cx("minus")}
                      onClick={() => addQuantityCart(item.product.id, "minus")}
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </div>
                    <div className={cx("quantity")}>{item.quantity}</div>
                    <div
                      className={cx("plus")}
                      onClick={() => addQuantityCart(item.product.id, "plus")}
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </div>
                  </div>
                </td>
                <td>
                  <div className={cx("action")}>
                    <p className={cx("totalPrice")}>
                      {setVND(item.quantity * item.product.price)}
                    </p>
                    <div
                      className={cx("btn-icon")}
                      onClick={() => {
                        deleteCartItem(item.product.id);
                        toast.success("Đã xóa sản phẩm !");
                      }}
                    >
                      <FontAwesomeIcon icon={faTrashCan} />
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default CartLeft;
