import style from "./Company.module.scss";
import classNames from "classnames/bind";
import ItemCompany from "../ListComPany/ItemCompany";
import * as httpRequest from "~/utils/httpRequest";
import { useEffect, useState } from "react";
const cx = classNames.bind(style);

function Company() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fethAPi = async () => {
      const result = await httpRequest.get("company");
      setData(result.data);
    };
    fethAPi();
  }, []);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
        <div className="row">
          {data &&
            data.map((item, index) => {
              return (
                <div className="col l-4 m-6 c-6" key={index}>
                  <div className={cx("item")}>
                    <ItemCompany item={item} />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Company;
