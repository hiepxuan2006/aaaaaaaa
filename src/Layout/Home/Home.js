import { useContext, useEffect } from "react";
import { DataContext } from "~/Component/DataProvider";
import Footer from "~/Component/Footer";
import Header from "~/Component/Header";
import style from "./Home.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);
function Home({ children }) {
  const { theme } = useContext(DataContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={theme}>
      <Header />
      <div className={cx("wrapper")}>
        <div className={cx("container")}>{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
