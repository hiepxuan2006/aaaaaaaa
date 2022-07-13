import classNames from 'classnames/bind';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { setVND } from '~/utils/curentVND';
import { DataContext } from '../DataProvider';
import style from './Cart.module.scss';
const cx = classNames.bind(style);
function CartRight(props) {
    const { cart } = useContext(DataContext);
    // const [toTalPrice, setToTalPrice] = useState();
    const totalPrice = cart.reduce((accmulator, currentValue, indexValue) => {
        return accmulator + currentValue.product.price * currentValue.quantity;
    }, 0);
    // console.log(totalPrice);
    return (
        <div className={cx('wrapper-right')}>
            <div className={cx('heading')}>
                <h3>Đơn hàng của bạn</h3>
                <div className={cx('oder-item')}>
                    <div className={cx('oder-total')}>
                        <h4>Tạm tính :</h4>
                        <p>{setVND(totalPrice)}</p>
                    </div>
                    <div className={cx('oder-total')}>
                        <h3>Tạm tổng :</h3>
                        <p>{setVND(totalPrice)}</p>
                    </div>
                    <button className={cx('btn')}>
                        <Link to={'/checkout'}>Tiến hành đặt hàng</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartRight;
