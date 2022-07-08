import style from "./Blog.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(style);

function Blog() {
  return (
    <div className={cx("wrapper")}>
      <Link to="#" className={cx("post")}>
        <div className={cx("image")}>
          <img
            src="https://bactom.com/wp-content/uploads/2022/06/Ngay-ram-tai-Bac-Tom-300x166.webp"
            alt=""
          />
        </div>
        <div className={cx("content")}>
          <div className={cx("heading")}>
            <h1>Những thứ không thể thiếu trong ngày rằm</h1>
          </div>
          <div className={cx("desc")}>
            <p>
              🙏🙏 Cứ ngày rằm, nhất là rằm thág 7 này thì những sản phẩm trên
              nhà em không thiếu thứ gì đâu ạ. Hàng về đều tươi mới trong ngày,
              các chị muốn đặt trước thì cứ liên hệ nhà em nhé
            </p>
          </div>
        </div>
      </Link>
      <Link to="#" className={cx("post")}>
        <div className={cx("image")}>
          <img
            src="https://bactom.com/wp-content/uploads/2022/06/Ngay-ram-tai-Bac-Tom-300x166.webp"
            alt=""
          />
        </div>
        <div className={cx("content")}>
          <div className={cx("heading")}>
            <h1>Những thứ không thể thiếu trong ngày rằm</h1>
          </div>
          <div className={cx("desc")}>
            <p>
              🙏🙏 Cứ ngày rằm, nhất là rằm thág 7 này thì những sản phẩm trên
              nhà em không thiếu thứ gì đâu ạ. Hàng về đều tươi mới trong ngày,
              các chị muốn đặt trước thì cứ liên hệ nhà em nhé
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Blog;
