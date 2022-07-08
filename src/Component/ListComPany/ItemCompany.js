import style from "./ItemCompany.module.scss";
import classNames from "classnames/bind";
import { baseURL } from "~/utils/Contant";
import { Link } from "react-router-dom";

const cx = classNames.bind(style);

function ItemCompany({ item }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("wrapper-content")}>
        <Link to={`/danh-ba-nha-nong/${item.slug}`} className={cx("item")}>
          <div className={cx("company-img")}>
            <img src={`${baseURL}/${item.image_detail}`} alt="" />
          </div>
          <div className={cx("company-desc")}>
            <h3>{item.name}</h3>
            <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ItemCompany;
