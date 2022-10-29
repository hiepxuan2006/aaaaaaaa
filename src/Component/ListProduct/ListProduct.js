import style from './ListProduct.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import ItemProduct from './ItemProduct';
import { useEffect, useState } from 'react';
import { ProductService } from '~/service';
const cx = classNames.bind(style);
const icon = require("~/assets/img/review/icon_policy_new.webp");

function ListProduct() {
  let [data, setData] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const params = { limit: 8 };
        const result = await ProductService.getAll(params);
        setData(result.data);
      } catch (error) {}
    };
    fetchApi();
  }, []);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("wrapper-content")}>
        <div className={cx("heading")}>
          <div className={cx("heading-left")}>
            <h1>Sản phẩm nổi bật</h1>
            <p>
              Mua rau sạch online còn là một hoạt động mua sắm vô cùng thú vị và
              tiện lợi, tiết kiệm đáng kể thời gian cho các bà nội trợ so với
              mua sắm truyền thống. Chỉ cần vài thao tác đơn giản, mọi sản phẩm
              mà bạn đã lựa chọn trên trang mạng sẽ được nhà cung ứng vận chuyển
              đến tận nhà với chi phí rẻ nhất và nhanh chóng
            </p>
            <div className={cx("icon")}>
              <img src={icon} alt="" />
            </div>
          </div>
          <div className={cx("heading-right")}>
            <Link to={"/cua-hang"} className={cx("link")}>
              <p>Xem tất cả</p>
              <FontAwesomeIcon icon={faAngleRight} />
            </Link>
          </div>
        </div>
        <div className={cx("content")}>
          <div className="row wrap ">
            {data.map((item, index) => {
              return (
                <div className="col l-4 m-6 c-6 mt2" key={index}>
                  <ItemProduct item={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListProduct;
