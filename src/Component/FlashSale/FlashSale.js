import style from './FlashSale.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);
function FlashSale() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-content')}>
                <div className={cx('heading')}>
                    <p></p>
                    <h1>Khuyến mại</h1>
                </div>
                <div className={cx('sale-content')}>
                    <div className="row no-wrap">
                        <div className={`${cx('sale-item')} col l-3 m-6 c-12`}>
                            <img
                                src="https://mighty-dusk-66790.herokuapp.com/upload/sales2.jpg"
                                alt=""
                            />
                        </div>
                        <div className={`${cx('sale-item')} col l-3 m-6 c-12`}>
                            <img
                                src="https://mighty-dusk-66790.herokuapp.com/upload/sales2.jpg"
                                alt=""
                            />
                        </div>
                        <div className={`${cx('sale-item')} col l-3 m-6 c-12`}>
                            <img
                                src="https://mighty-dusk-66790.herokuapp.com/upload/sales2.jpg"
                                alt=""
                            />
                        </div>
                        <div className={`${cx('sale-item')} col l-3 m-6 c-12`}>
                            <img
                                src="https://mighty-dusk-66790.herokuapp.com/upload/sales2.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FlashSale;
