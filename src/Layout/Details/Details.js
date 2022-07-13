import Footer from '~/Component/Footer';
import Header from '~/Component/Header';
import SideBar from '~/Component/SideBar';
import style from './Details.module.scss';
import classNames from 'classnames/bind';
import { useContext, useEffect } from 'react';
import { DataContext } from '~/Component/DataProvider';

const cx = classNames.bind(style);
function Details({ children }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { theme } = useContext(DataContext);
    return (
        <div className={theme}>
            <div className={cx('wrapper')}>
                <Header />
                <div className={cx('container')}>
                    <div class="row">
                        <div className="col l-9 m-12 c-12">{children}</div>
                        <div className="col l-3 m-0 c-0">
                            <SideBar />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Details;
