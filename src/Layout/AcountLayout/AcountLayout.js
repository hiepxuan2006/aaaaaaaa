import React, { useContext } from "react";
import { DataContext } from "~/Component/DataProvider";
import Footer from "~/Component/Footer";
import Header from "~/Component/Header";
import style from "./AcountLayout.modile.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);
function AcountLayout({ children }) {
  const { theme } = useContext(DataContext);
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

export default AcountLayout;
