import React, { Fragment, useEffect, useState } from 'react';
import style from './DetailCompany.js.module.scss';
import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';
import * as htpRequest from '~/utils/httpRequest';
import { baseURL } from '~/utils/Contant';
const cx = classNames.bind(style);
function DetailCompany(props) {
    const { company } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
      const fethAPi = async () => {
        const result = await htpRequest.get(`company/ct/${company}`);
        setData(result.data);
      };
      fethAPi();
    }, [company]);
    return (
        <Fragment>
            {data && (
                <div className={cx('wrapper')}>
                    <div className={cx('header')}>
                        <h1>{data.name}</h1>
                    </div>
                    <div className={cx('image')}>
                        <img src={`${baseURL}/${data.image_detail}`} alt="" />
                    </div>
                    <div className={cx('description')}>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: data.description,
                            }}
                        ></p>
                    </div>
                </div>
            )}
        </Fragment>
    );
}

export default DetailCompany;
