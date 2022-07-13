import classNames from 'classnames/bind';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { baseURL } from '~/utils/Contant';
import { setVND } from '~/utils/curentVND';
import { DataContext } from '../DataProvider';
import style from './ItemProduct.module.scss';

const cx = classNames.bind(style);

function ItemProduct({ item }) {
    const value = useContext(DataContext);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-content')}>
                <div className={cx('content')}>
                    <div className={cx('img')}>
                        <Link to={`/san-pham/${item.slug}`}>
                            <img
                                src={`${baseURL}/${item.feature_image_path}`}
                                alt=""
                            />
                        </Link>
                    </div>
                    <div className={cx('infor')}>
                        <div className={cx('name')}>
                            <h3>{item.name}</h3>
                        </div>
                        <div className={cx('price')}>
                            <p>{setVND(item.price)}</p>
                        </div>
                        <div className={cx('btn')}>
                            <button
                                onClick={() => {
                                    value.addCart(item, 1);
                                    // toast.success("Thêm giỏ hàng thành công !");
                                }}
                            >
                                <p>Thêm vào giỏ</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemProduct;
