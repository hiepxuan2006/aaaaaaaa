import classNames from 'classnames/bind';
import style from './Pagination.module.scss';

import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import paginationBtn from '~/utils/paginationbtn';
const cx = classNames.bind(style);

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func,
};
Pagination.defaultProps = {
    onPageChange: null,
};

function Pagination(props) {
    const { pagination, onPageChange } = props;
    const { page, limit, totalRows } = pagination;
    const [paginationBt, setPaginationBtn] = useState([]);

    const totalPages = Math.ceil(totalRows / limit);
    const handlePageChange = (newPage) => {
        if (onPageChange) onPageChange(newPage);
    };

    useEffect(() => {
        setPaginationBtn(paginationBtn(page, totalPages));
    }, [pagination]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('btn')}>
                <button
                    disabled={page <= 1}
                    onClick={() => handlePageChange(page - 1)}
                >
                    Prev
                </button>
            </div>

            {paginationBt &&
                paginationBt.map((itemBtn, index) => {
                    return (
                        <div className={cx('btn')} key={index}>
                            <button
                                disabled={itemBtn == '...' || itemBtn == page}
                                onClick={() => {
                                    handlePageChange(itemBtn);
                                }}
                            >
                                {itemBtn}
                            </button>
                        </div>
                    );
                })}

            <div className={cx('btn')}>
                <button
                    disabled={page >= totalPages}
                    onClick={() => handlePageChange(page + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default Pagination;
