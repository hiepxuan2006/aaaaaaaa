import classNames from 'classnames/bind';
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { baseURL } from "~/utils/Contant";
import { setVND } from "~/utils/curentVND";
import { DataContext } from "../DataProvider";
import style from "./ItemProduct.module.scss";

const cx = classNames.bind(style);

function ItemProduct({ item }) {
  const value = useContext(DataContext);
  const [quantity, setQuantity] = useState(1);
  const handleQty = (type) => {
    switch (type) {
      case "minus":
        if (quantity > 1) {
          setQuantity(quantity - 1);
        } else {
          setQuantity(1);
        }
        break;
      case "plus":
        setQuantity(quantity + 1);
        break;
    }
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("wrapper-content")}>
        <div className={cx("content")}>
          <div className={cx("discount")}>
            <p>20%</p>
          </div>
          <div className={cx("img")}>
            <Link to={`/san-pham/${item.slug}`}>
              <img src={`${baseURL}/${item.feature_image_path}`} alt="" />
            </Link>
          </div>
          <div className={cx("infor")}>
            <div className={cx("name")}>
              <h3>{item.name}</h3>
            </div>
            <div className={cx("price")}>
              <p>{setVND(item.price)}</p>
            </div>
            <div className={cx("itemQuantity")}>
              <button
                onClick={() => handleQty("minus")}
                className={cx("qtyBtn")}
                data-type="minus"
              >
                -
              </button>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={quantity}
                min="1"
                className={cx("quantitySelector")}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <div className={cx("category")}></div>
              <button
                className={cx("qtyBtn")}
                onClick={() => handleQty("plus")}
                data-type="plus"
              >
                +
              </button>
            </div>
            <div className={cx("btn")}>
              <button
                onClick={() => {
                  value.addCart(item, quantity);
                }}
              >
                <p>Thêm</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemProduct;
