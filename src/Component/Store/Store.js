import { faRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as httpRequest from "~/utils/httpRequest";
import ItemProduct from "../ListProduct/ItemProduct";
import Pagination from "../Pagination";
import style from "./Store.module.scss";

const cx = classNames.bind(style);

function Store() {
  let [data, setData] = useState([]);
  const [valueSort, setValueSort] = useState("");
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 1,
    totalRows: 1,
  });
  const [filter, setFilter] = useState({
    page: 1,
    limit: 6,
  });
  const handlePageChange = (newPage) => {
    setFilter({ ...filter, page: newPage });
    setPagination({ ...pagination, page: newPage });
  };
  const slug = useParams("");
  const handleSort = (e) => {
    setValueSort(e.target.value);
  };
  useEffect(() => {
    let result = [];
    const fetchApi = async () => {
      try {
        setLoading(true);
        if (!!slug.category) {
          if (valueSort !== "") {
            result = await httpRequest.get("product/list", {
              params: {
                // category: slug.category,
                sort: "price",
                type: valueSort === "price" ? "ASC" : "DESC",
                page: pagination.page,
              },
            });
          } else {
            result = await httpRequest.get("product/list", {
              params: {
                category: slug.category,
                page: pagination.page,
              },
            });
          }
        } else {
          if (valueSort !== "") {
            result = await httpRequest.get("product", {
              params: {
                category: slug.category,
                sort: "price",
                page: pagination.page,
                type: valueSort === "price" ? "ASC" : "DESC",
              },
            });
          } else {
            result = await httpRequest.get("product", {
              params: {
                sort: valueSort,
                page: pagination.page,
              },
            });
          }
        }

        setData(result.data);
        setPagination({
          ...pagination,
          limit: result.limit,
          totalRows: result.totalRows,
        });
        setLoading(false);
      } catch (error) {}
    };
    fetchApi();
  }, [slug, valueSort, pagination.page]);
  console.log("loading", loading);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <form className={cx("shop-option")}>
          <select
            defaultValue={"DEFAULT"}
            className={cx("shop-select")}
            name=""
            id=""
            onChange={handleSort}
          >
            <option value="" selected>
              Thứ tự mặc định
            </option>
            <option value="price">Theo giá từ thấp đến cao</option>
            <option value="price-desc">Theo giá từ cao đến thấp</option>
          </select>
        </form>
      </div>
      {loading ? (
        <div className={cx("loading")}>
          <FontAwesomeIcon icon={faRotate} />
        </div>
      ) : (
        <div className={cx("content")}>
          <div className="row">
            {data &&
              data.map((item, index) => {
                return (
                  <div className="col l-4 m-4 c-6" key={index}>
                    <ItemProduct item={item} />
                  </div>
                );
              })}
          </div>
        </div>
      )}
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </div>
  );
}

export default Store;
