import classNames from "classnames/bind";
import { useState } from "react";
import Item from "./Item";
import style from "./ProductNew.module.scss";

const cx = classNames.bind(style);
const icon = require("~/assets/img/review/icon_policy_new.webp");

const pageImg = require("~/assets/img/review/page.png");
const ProductNew = () => {
  const [page, setPage] = useState(0);
  const handlePage = (type) => {
    switch (type) {
      case "prev":
        if (page === 0) {
          setPage(0);
        } else {
          setPage(page - 1);
        }
        break;
      case "next":
        if (page === 2) {
          setPage(2);
        } else {
          setPage(page + 1);
        }
        break;
        break;
    }
  };
  console.log(page);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("title")}>
        <h1>Bộ sưu tập MỚI</h1>
        <p>
          Với thời đại kinh tế nhiều biến động như hiện nay, thực phẩm nhiễm hóa
          chất nhiều vô kể được bày bán tràn lan trên thị trường nên gây ảnh
          hưởng rất lớn đến chất lượng nguồn thực phẩm cho mọi nhà! Cũng chính
          vì thế nên hình thức mua bán rau sạch online phát triển rất mạnh và
          nhanh chóng để mang lại những bữa ăn thật ngon, thật giàu dinh dưỡng
          và thật an toàn đến mọi nhu cầu tiêu dùng.
        </p>
        <div className={cx("icon")}>
          <img src={icon} alt="" />
        </div>
      </div>
      <div className={cx("btnPage")}>
        <div className={cx("prev", "btn")} onClick={() => handlePage("prev")}>
          Trang trước
        </div>
        <div className={cx("prev", "btn")} onClick={() => handlePage("next")}>
          Trang kế
        </div>
      </div>
      <div className={cx("content")}>
        <div
          className={
            page === 0 ? cx("page-left", "active") : cx("page-left", "active")
          }
        >
          <img src={pageImg} alt="" />
        </div>
        <div className={cx("page-right")}>
          <div
            className={
              page === 0 ? cx("page", "active") : cx("page", "disable")
            }
          >
            <div className={cx("heading")}>
              <h2>Rau xanh tươi mát</h2>
              <div className={cx("btn")}>
                <button>{"<"}</button>
                <button>{">"}</button>
              </div>
            </div>
            <div className={cx("page-item")}>
              <Item />
              <Item />
            </div>
            <div className={cx("stt")}>
              <p>Trang {page}</p>
            </div>
          </div>
          <div
            className={
              page === 1 ? cx("page", "active") : cx("page", "disable")
            }
          >
            <div className={cx("heading")}>
              <h2>Thịt trứng tươi ngon</h2>
              <div className={cx("btn")}>
                <button>{"<"}</button>
                <button>{">"}</button>
              </div>
            </div>
            <div className={cx("page-item")}>
              <Item />
              <Item />
            </div>
            <div className={cx("stt")}>
              <p>Trang {page}</p>
            </div>
          </div>
          <div
            className={
              page === 2 ? cx("page", "active") : cx("page", "disable")
            }
          >
            <div className={cx("heading")}>
              <h2>Hải sản tươi ngon</h2>
              <div className={cx("btn")}>
                <button>{"<"}</button>
                <button>{">"}</button>
              </div>
            </div>
            <div className={cx("page-item")}>
              <Item />
              <Item />
            </div>
            <div className={cx("stt")}>
              <p>Trang {page}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductNew;
