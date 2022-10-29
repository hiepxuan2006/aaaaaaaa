import { Fragment, useContext, useEffect } from 'react';
import { DataContext } from '~/Component/DataProvider';
import Footer from '~/Component/Footer';
import Header from '~/Component/Header';
import style from './Home.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);
function Home({ children }) {
    const { theme, loading } = useContext(DataContext);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Fragment>
            {loading ? (
                <div className="loading-page">
                    <FontAwesomeIcon icon={faSpinner} />
                </div>
            ) : (
                <div className={theme}>
                    <Header />
                    <div className={cx('wrapper')}>
                        <div className={cx('container')}>{children}</div>
                    </div>
                    <Footer />
                </div>
            )}
        </Fragment>
    );
}

export default Home;
