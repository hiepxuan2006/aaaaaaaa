import React from 'react';
import { Link } from 'react-router-dom';
import style from './ResultItem.module.scss';
import classNames from 'classnames/bind';
import { setVND } from '~/utils/curentVND';
import { baseURL } from '~/utils/Contant';

const cx = classNames.bind(style);
function ResultItem({ data }) {
    return (
        <Link to={`/san-pham/${data.slug}`} className={cx('wrapper')}>
            <div className={cx('image')}>
                <img src={`${baseURL}/${data.feature_image_path}`} alt="" />
            </div>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.name}</span>
                </h4>
                <p className={cx('price')}>
                    <span>{setVND(data.price)}</span>
                </p>
            </div>
        </Link>
    );
}

export default ResultItem;
