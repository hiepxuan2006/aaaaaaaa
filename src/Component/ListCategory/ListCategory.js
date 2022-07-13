import Tippy from "@tippyjs/react";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "tippy.js/dist/tippy.css";
import { baseURL } from "~/utils/Contant";
import * as httpRequest from "~/utils/httpRequest";
import style from "./ListCategory.module.scss";

const cx = classNames.bind(style);
function ListCategory() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const result = await httpRequest.get("category");
        setData(result.data);
      } catch (error) {}
    };
    fetchApi();
  }, []);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("wrapper-content")}>
        <div className={cx("heading")}>
          <p></p>
          <h1>Mua sản phẩm</h1>
        </div>
        <div className={cx("logo-cate")}>
          <div className="row wrap">
            {data.map((item, index) => {
              return (
                <Tippy placement="bottom" content={item.name} key={index}>
                  <div className="col l-2 m-4 c-2">
                    <Link
                      to={`/cua-hang/${item.slug}`}
                      className={`${cx("link")}`}
                    >
                      <div className={cx("logo-img", "hidden-mobile")}>
                        <img src={`${baseURL}/${item.image_path}`} alt="" />
                      </div>
                      <div
                        className={cx(
                          "name-logo",
                          "logo-tablet",
                          "logo-mobile"
                        )}
                      >
                        <h3>{item.name}</h3>
                      </div>
                    </Link>
                  </div>
                </Tippy>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListCategory;
