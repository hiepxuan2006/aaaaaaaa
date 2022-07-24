import classNames from 'classnames/bind';
import { Checkout } from '~/Component/Checkout';
import style from './CheckoutPage.module.scss';

const cx = classNames.bind(style);
function CheckoutPage(props) {
   return (
      <div className={cx('wrapper')}>
         <Checkout />
      </div>
   );
}

export default CheckoutPage;
