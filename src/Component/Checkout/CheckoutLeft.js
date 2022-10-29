import classNames from 'classnames/bind';
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../DataProvider";
import Location from "../Location";
import style from "./Checkout.module.scss";
import validator from "validator";
import productService from "~/service/ProductService";
import { toast } from "react-toastify";
const cx = classNames.bind(style);
function CheckoutLeft(props) {
  const { setShowAcount, cart, setCart, isLogin, user } =
    useContext(DataContext);
  const navigate = useNavigate();
  const [value, setValue] = useState({
    name: "",
    phone: "",
    email: "",
    addressDetail: "",
    user_id: "",
  });
  const { name, phone, email, addressDetail, user_id } = value;
  useEffect(() => {
    if (isLogin)
      setValue({
        ...value,
        name: user.name,
        email: user.email,
        user_id: user.id,
      });
  }, [isLogin]);
  const [error, sertError] = useState({});
  const hanldeChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    sertError({ ...error, [e.target.name]: "" });
  };
  const [address, setAddress] = useState({
    city: "",
    district: "",
    ward: "",
  });
  const { city, district, ward } = address;

  const validateAll = () => {
    const msg = {};
    if (validator.isEmpty(email)) {
      msg.email = "Vui lòng nhập email";
    }
    if (!validator.isLength(phone, { min: 10 })) {
      msg.phone = "Vui lòng nhập lại số điện thoại";
    }
    if (validator.isEmpty(name)) {
      msg.name = "Vui lòng nhập tên";
    }
    if (!validator.isEmail(email)) {
      msg.email = "Vui lòng nhập đúng email";
    }
    if (validator.isEmpty(addressDetail)) {
      msg.addressDetail = "Vui lòng nhập địa chỉ";
    }
    if (validator.isEmpty(city)) {
      msg.city = "Vui lòng chọn";
    }
    if (validator.isEmpty(district)) {
      msg.district = "Vui lòng chọn";
    }
    if (validator.isEmpty(ward)) {
      msg.ward = "Vui lòng chọn";
    }
    sertError(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateAll();
    if (!isValid) {
      return;
    } else {
      try {
        const totalPrice = cart.reduce((acumalator, currentValue) => {
          return (
            acumalator + currentValue.product.price * currentValue.quantity
          );
        }, 30000);
        const product = cart.map(({ product, quantity }) => {
          return {
            product: {
              id: product.id,
              product_name: product.name,
              price: product.price,
            },
            quantity,
          };
        });

        const newOrder = {
          user_id,
          name,
          phone,
          email,
          address: `${addressDetail}, ${ward},${district},${city}`,
          price_total: totalPrice,
          product,
        };
        const order = await productService.order(newOrder);
        if (order.success) {
          setCart([]);
          toast.success("Đặt hàng thành công !", {
            className: "toast__item",
          });
          return navigate("/");
        }
      } catch (error) {}
    }
  };
  return (
    <div className={cx("wrapper")}>
      <form className={cx("shipper")} onSubmit={handleSubmit}>
        <div className={cx("header")}>
          <h3>Thông tin thanh toán</h3>
        </div>
        <div className={cx("is-login")}>
          <p>Bạn đã có tài khản ?</p>
          <div className={cx("login")} onClick={() => setShowAcount(true)}>
            Đăng nhập
          </div>
        </div>
        <div className={cx("infor")}>
          <div className={cx("form-control")}>
            <input
              className={`${error.name ? cx("form-input") : ""}`}
              value={name}
              name="name"
              type="text"
              placeholder="Họ và tên"
              id=""
              onChange={hanldeChange}
            />
            <p className={cx("error")}>{error.name}</p>
          </div>
          <div className={cx("form-control")}>
            <input
              className={`${error.phone ? cx("form-input") : ""}`}
              name="phone"
              value={phone}
              type="text"
              placeholder="Số điện thoại"
              onChange={hanldeChange}
              id=""
            />
            <p className={cx("error")}>{error.phone}</p>
          </div>
          <div className={cx("form-control")}>
            <input
              className={`${error.email ? cx("form-input") : ""}`}
              name="email"
              value={email}
              type="text"
              placeholder="email"
              onChange={hanldeChange}
              id=""
            />
            <p className={cx("error")}>{error.email}</p>
          </div>
          <div className={cx("form-control")}>
            <input
              className={`${error.addressDetail ? cx("form-input") : ""}`}
              name="addressDetail"
              value={addressDetail}
              type="text"
              placeholder="Địa chỉ chi tiết (số nhà,ngõ,...)"
              onChange={hanldeChange}
              id=""
            />
            <p className={cx("error")}>{error.addressDetail}</p>
          </div>
        </div>
        <Location
          sertError={sertError}
          error={error}
          setAddress={setAddress}
          address={address}
        />
        <div className={cx("node")}>
          <h3>Thông tin bổ sung</h3>
          <h4>Ghi chú đơn hàng (Tùy chọn )</h4>
          <textarea
            placeholder="Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn."
            rows="2"
            cols="5"
          ></textarea>
        </div>
        <div className={cx("link")}>
          <Link to={"/cart"}>Quay về giỏ hàng</Link>
        </div>
        {cart && cart.length > 0 ? (
          <div className={`${cx("btn")}`}>
            <button>Hoàn tất đơn hàng</button>
          </div>
        ) : (
          ""
        )}
      </form>
    </div>
  );
}

export default CheckoutLeft;
