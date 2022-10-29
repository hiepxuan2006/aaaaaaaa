import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductService } from '~/service';
import LazyLoad from "../LazyLoad";
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
  const { category } = useParams("");
  const handleSort = (e) => {
    setValueSort(e.target.value);
  };
  useEffect(() => {
    let result = [];
    const fetchApi = async () => {
      try {
        let params;
        if (!!category) {
          if (valueSort !== "") {
            params = {
              category: category,
              sort: "price",
              type: valueSort === "price" ? "ASC" : "DESC",
              page: pagination.page,
            };
            // setLoading(true);
            result = await ProductService.getListProductCategory(params);
            // setLoading(false);
          } else {
            params = {
              category: category,
              page: pagination.page,
            };
            // setLoading(true);
            result = await ProductService.getListProductCategory(params);
            // setLoading(false);
          }
        } else {
          params = {
            sort: valueSort === "price-desc" ? "price" : valueSort,
            page: pagination.page,
            type:
              valueSort === "price"
                ? "ASC"
                : valueSort === "price-desc"
                ? "DESC"
                : "",
          };
          setLoading(true);
          result = await ProductService.getAll(params);
          setLoading(false);
        }

        setData(result.data);
        setPagination({
          ...pagination,
          limit: result.limit,
          totalRows: result.totalRows,
        });
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, valueSort, pagination.page]);
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
        <LazyLoad row="6" />
      ) : (
        <div className={cx("content")}>
          <div className="row wrap">
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
      <Pagination
        className={cx("pagination")}
        pagination={pagination}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default Store;
