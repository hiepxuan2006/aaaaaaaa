import style from "./LazyLoad.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(style);
const LazyLoad = (props) => {
  const { col, row, type } = props;
  const data = [];
  for (let i = 1; i <= parseInt(row); i++) {
    data.push(i);
  }
  if (data && type === "table") {
    return (
      <div className={cx("LazyLoad")}>
        <div className="row">
          {data.map((item) => {
            return (
              <div className="col l-12 m-12 c-12">
                <div className={cx("table")}></div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className={cx("LazyLoad")}>
        <div className="Wrapper">
          <div className="row">
            {data &&
              data.map((item) => {
                return (
                  <div className="col l-4 m-4 c-12">
                    <div className={cx("item")}></div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
};

export default LazyLoad;
