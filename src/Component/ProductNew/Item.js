import classNames from "classnames/bind";
import style from "./item.module.scss";

import { setVND } from "~/utils/curentVND";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(style);

const Item = () => {
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
    <div className={cx("item")}>
      <div className={cx("image")}>
        <img
          src="https://product.hstatic.net/200000301988/product/121_626ac4cc084948f897fbc8d171473802_large.jpeg"
          alt=""
        />
      </div>
      <div className={cx("content")}>
        <h3>Cai ngot</h3>
        <p className={cx("price")}>{setVND(100000)}</p>
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
          <div className={cx("add")}>
            <FontAwesomeIcon className={cx("icon")} icon={faShoppingBasket} />
            <p>Thêm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
