import Footer from '~/Component/Footer';
import Header from '~/Component/Header';
import SideBar from '~/Component/SideBar';
import style from './Store.module.scss';
import classNames from 'classnames/bind';
import { useContext, useEffect } from 'react';
import { DataContext } from '~/Component/DataProvider';

const cx = classNames.bind(style);
function StoreLayout({ children, data }) {
    const { theme } = useContext(DataContext);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
      <div className={theme}>
        <div className={cx("wrapper")}>
          <Header />
          <div className={cx("container")}>
            <div className="row column no-gutters">
              <div className="col l-3 m-2 c-12">
                <div className={cx("left")}>
                  <SideBar type={data} />
                </div>
              </div>
              <div className="col l-9 m-10 c-12">
                <div className="">{children}</div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
}

export default StoreLayout;
