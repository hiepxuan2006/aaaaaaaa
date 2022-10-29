import classNames from "classnames/bind";
import style from "./Review.module.scss";

const cx = classNames.bind(style);
const p1 = require("~/assets/img/review/policy-item-image-1.webp");
const p2 = require("~/assets/img/review/policy-item-image-2.webp");
const p3 = require("~/assets/img/review/policy-item-image-3.webp");
const p4 = require("~/assets/img/review/policy-item-image-4.webp");
const icon = require("~/assets/img/review/icon_policy_new.webp");
const guarantee1 = require("~/assets/img/review/guarantee_item_image_1.webp");
const guarantee2 = require("~/assets/img/review/guarantee_item_image_2.webp");
const guarantee3 = require("~/assets/img/review/guarantee_item_image_3.webp");

function Review() {
  return (
    <div className={cx("container")}>
      <div className={cx("title")}>
        <h2>
          ĐÔI NÉT <b> VỀ CHÚNG TÔI</b>
        </h2>
        <p>
          Xin chào bạn, F1GEN-ORGANIC được tạo nên từ tâm huyết của những người
          mẹ, người chị muốn tạo dựng một cộng đồng thực phẩm sạch, dựa trên nền
          tảng hữu cơ (organic) và thuần từ thiên nhiên, nhằm mang lại sức khoẻ
          tốt nhất cho cộng đồng.
        </p>
        <div className={cx("icon")}>
          <img src={icon} alt="" />
        </div>
      </div>
      <div className={cx("wrap")}>
        <div className={cx("left")}>
          <div className={cx("item")}>
            <img src={p1} alt="" />
            <h3>100% Tự nhiên</h3>
            <span>
              Nông sản an toàn được đánh giá không chỉ an toàn và ngon mà còn có
              nhiều giá trị dinh dưỡng thiết thực
            </span>
            <div className="animation-circle">
              <div className="animation-circle-item"></div>
              <div className="animation-circle-item"></div>
              <div className="animation-circle-item"></div>
              <div className="animation-circle-item"></div>{" "}
            </div>
          </div>
          <div className={cx("item")}>
            <img src={p2} alt="" />
            <h3>100% Tươi mới</h3>
            <span>
              Nguồn giống khỏe giúp cây trồng đạt năng suất tốt. Giống mới đem
              đến trải nghiệm mới cho thực khách
            </span>
            <div className="animation-circle">
              <div className="animation-circle-item"></div>
              <div className="animation-circle-item"></div>
              <div className="animation-circle-item"></div>
              <div className="animation-circle-item"></div>{" "}
            </div>
          </div>
        </div>
        <div className={cx("center")}>
          <img
            className={cx("image")}
            src="https://theme.hstatic.net/200000301988/1000740970/14/policy-big-image.png?v=1403"
            alt=""
          />
        </div>
        <div className={cx("right")}>
          <div className={cx("item")}>
            <img src={p3} alt="" />
            <h3>Chất lượng tốt nhất</h3>
            <span>
              Các vườn nông sản được ứng dụng nuôi trồng theo các tiêu chí an
              toàn hữu cơ tối thiểu theo chứng nhận tốt nhất
            </span>
            <div className="animation-circle">
              <div className="animation-circle-item"></div>
              <div className="animation-circle-item"></div>
              <div className="animation-circle-item"></div>
              <div className="animation-circle-item"></div>{" "}
            </div>
          </div>
          <div className={cx("item")}>
            <img src={p4} alt="" />
            <h3>Giữ sức khỏe</h3>
            <span>
              Sản phẩm 100% từ hữu cơ Organic nên sức khỏe sẽ được cải thiện tốt
              nhất khi sử dụng
            </span>
            <div className="animation-circle">
              <div className="animation-circle-item"></div>
              <div className="animation-circle-item"></div>
              <div className="animation-circle-item"></div>
              <div className="animation-circle-item"></div>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className={cx("bottom")}>
        <div className={cx("item")}>
          <div className={cx("wrap-item")}>
            <img src={guarantee1} alt="" />
          </div>
          <div className={cx("desc-item")}>
            <h3>Hỗ trợ</h3>
            <p>Hỗ trự 24/24</p>
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("wrap-item")}>
            <img src={guarantee2} alt="" />
          </div>
          <div className={cx("desc-item")}>
            <h3>Miễn phí giao hàng</h3>
            <p>Đơn hàng >= 500k</p>
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("wrap-item")}>
            <img src={guarantee3} alt="" />
          </div>
          <div className={cx("desc-item")}>
            <h3>Liên hệ</h3>
            <p>1900 8198</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
