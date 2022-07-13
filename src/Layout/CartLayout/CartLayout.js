import classNames from 'classnames/bind';
import { useContext } from 'react';
import { DataContext } from '~/Component/DataProvider';
import Footer from '~/Component/Footer';
import Header from '~/Component/Header';
import style from './CartLayout.module.scss';

const cx = classNames.bind(style);
function CartLayout(props) {
    const { theme } = useContext(DataContext);
    return (
        <div className={theme}>
            <div className={cx('wrapper')}>
                <Header />
                <div className={cx('container')}>{props.children}</div>
                <Footer />
            </div>
        </div>
    );
}

export default CartLayout;
