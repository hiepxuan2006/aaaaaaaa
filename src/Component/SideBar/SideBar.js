import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as httpRequest from '~/utils/httpRequest';
import style from './SideBar.module.scss';

const cx = classNames.bind(style);

function SideBar({ type }) {
    const [data, setData] = useState([]);
    const [title, setTitle] = useState('');
    useEffect(() => {
        const fetchApi = async () => {
            try {
                let result;
                if (type === 'product') {
                    result = await httpRequest.get('category');
                    setTitle('Danh mục sản phẩm');
                } else if (type === 'blog') {
                    result = await httpRequest.get('categorypost');
                    setTitle('Chuyên mục bài biết');
                } else {
                    result = await httpRequest.get('category');
                    setTitle('Danh mục sản phẩm');
                }
                setData(result.data);
            } catch (error) {}
        };
        fetchApi();
    }, [type]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('list-category')}>
                <div className={cx('title')}>
                    <h3>{title}</h3>
                </div>
                <ul className={cx('list')}>
                    {data.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link
                                    className={cx('item')}
                                    to={`/cua-hang/${item.slug}`}
                                >
                                    <FontAwesomeIcon icon={faAngleRight} />
                                    <p>{item.name}</p>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className={cx('list-category')}>
                <div className={cx('title')}>
                    <h3>Blog chia sẻ</h3>
                </div>
                <ul className={cx('list')}>
                    <li>
                        <Link className={cx('item-blog')} to={'/'}>
                            <div className={cx('image')}>
                                <img
                                    src="https://mighty-dusk-66790.herokuapp.com/upload/cha-com.jpg"
                                    alt=""
                                />
                            </div>
                            <div className={cx('name')}>
                                <p>Chả cốm nấu gì ngon ?</p>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SideBar;
