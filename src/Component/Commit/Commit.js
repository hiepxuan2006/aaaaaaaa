import style from "./Commit.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

function Commit() {
  const b1 = require("~/assets/img/title/banner1.png");
  const b2 = require("~/assets/img/title/banner2.png");
  const b3 = require("~/assets/img/title/banner3.png");
  return (
    <div className={cx("wrapper")}>
      <div className="row">
        <div className="col l-4 m-4 c-12">
          <div className={cx("item")}>
            <div className={cx("banner")}>
              <img src={b1} alt="" />
            </div>
            <div className={cx("content")}>
              <div className={cx("title")}>
                <h3>Quy trình thuận tự nhiên</h3>
              </div>
              <div className={cx("desc")}>
                <p>
                  Thuận tự nhiên là tôn chỉ của chúng tôi trong quá trình chăn
                  nuôi, trồng cấy các sản phẩm để cung cấp đến người tiêu dung
                  tại hệ thống chuỗi thực phẩm sạch chúng tôi
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col l-4 m-4 c-12">
          <div className={cx("item")}>
            <div className={cx("banner")}>
              <img src={b2} alt="" />
            </div>
            <div className={cx("content")}>
              <div className={cx("title")}>
                <h3>Chuỗi cung ứng tiêu chuẩn</h3>
              </div>
              <div className={cx("desc")}>
                <p>
                  Bộ phận kỹ sư thực địa tại Bác Tôm luôn giám sát nghiêm ngặt
                  đối với các Hợp tác xã , đối tác tham gia trong chuỗi cung ứng
                  tiêu chuẩn của chúng tôi.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col l-4 m-4 c-12">
          <div className={cx("item")}>
            <div className={cx("banner")}>
              <img src={b3} alt="" />
            </div>
            <div className={cx("content")}>
              <div className={cx("title")}>
                <h3>Nguồn gốc minh bạch</h3>
              </div>
              <div className={cx("desc")}>
                <p>
                  Sản phẩm thuận tự nhiên phải có thông tin nguồn gốc, quá trình
                  nuôi trồng, sản phẩm được công khai minh bạch theo thời gian
                  thực trên từng sản phẩm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Commit;
