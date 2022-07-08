<<<<<<< HEAD
import style from "./Footer.module.scss";
import classNames from "classnames/bind";
import { baseURL } from "~/utils/Contant";
=======
<<<<<<< HEAD
import style from "./Footer.module.scss";
import classNames from "classnames/bind";
import { baseURL } from "~/utils/Contant";
=======
import classNames from "classnames/bind";
import style from "./Footer.module.scss";
>>>>>>> 2063373 (-m)
>>>>>>> 959858a (message)

const cx = classNames.bind(style);
function Footer() {
  return (
    <div className={cx("commit")}>
      <div className="commit_sesc" style={{ paddingTop: "50px" }}>
        <div className="grid wide">
          <div className="row">
            <div
              style={{
                textAlign: "center",
                height: "300px",
                width: "100%",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="col l-3"
            >
              <img
                style={{ hight: "150px ", width: "150px" }}
                src="https://mighty-dusk-66790.herokuapp.com/upload/huu-co.png"
                alt=""
              />
            </div>
            <div
              style={{
                textAlign: "center",
                height: "300px",
                width: "100%",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
              className="col l-3"
            >
              <img
                style={{ hight: "150px ", width: "150px" }}
                src="https://mighty-dusk-66790.herokuapp.com/upload/tieu-chuan-vn.png"
                alt=""
              />
            </div>
            <div
              style={{
                textAlign: "center",
                height: "300px",
                width: "100%",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="col l-3"
            >
              <img
                style={{ hight: "150px ", width: "150px" }}
                src="https://mighty-dusk-66790.herokuapp.com/upload/tieu-chuan.png"
                alt=""
              />
            </div>
            <div
              style={{
                textAlign: "center",
                height: "300px",
                width: "100%",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="col l-3"
            >
              <img
                style={{ hight: "150px ", width: "150px" }}
                src="https://mighty-dusk-66790.herokuapp.com/upload/my.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
