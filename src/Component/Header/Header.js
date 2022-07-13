import {
  faBars,
  faCartFlatbed,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { DataContext } from "../DataProvider";
import style from "./Header.module.scss";

import classNames from "classnames/bind";
import Search from "./Search/Search";
import UserLogin from "./UserLogin";
const cx = classNames.bind(style);
function Header() {
  const logo = require("~/assets/img/logo-farm.png");
  const navBar = [
    { navItem: "Trang chủ", path: "/" },
    { navItem: "Cửa hàng", path: "/cua-hang" },
    { navItem: "Danh bạ nhà nông", path: "/danh-ba-nha-nong" },
    { navItem: "Blog", path: "/blog" },
  ];
  const {
    theme,
    cart,
    setCLose,
    showNavbar,
    setShowNavbar,
    setShowAcount,
    isLogin,
    user,
  } = useContext(DataContext);
  const [scrollY, setScrollY] = useState("");
  useEffect(() => {
    const setScrolly = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", setScrolly);
  }, [scrollY]);
  const handleShow = () => {
    setCLose(true);
  };

  const handleShowBarMobile = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <header
      className={`${theme} ${cx("wrapper")} ${
        scrollY > 200 ? cx("wrapper-sticky") : cx("no-sticky")
      }`}
    >
      <div className={cx("inner")}>
        <div className={cx("left")}>
          <div
            onClick={handleShowBarMobile}
            className={cx("navbar-mobile", "hide-on-mobile")}
          >
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div className={cx("logo")}>
            <img src={logo} alt="" />
          </div>
          <div className={cx("navbar")}>
            <ul
              className={`${cx("list-navbar")} ${
                showNavbar ? cx("show-navbar") : cx("hide-navbar")
              }`}
            >
              {navBar.map((item, index) => {
                return (
                  <li
                    onClick={handleShowBarMobile}
                    className={cx("item")}
                    key={index}
                  >
                    <NavLink
                      className={`${
                        window.location.pathname === item.path
                          ? cx("active")
                          : ""
                      }`}
                      to={item.path}
                    >
                      <p>{item.navItem}</p>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className={cx("right")}>
          <Search />

          <div onClick={handleShow} className={cx("cart")}>
            <FontAwesomeIcon icon={faCartFlatbed}></FontAwesomeIcon>
            <span>{cart !== null ? cart.length : 0}</span>
          </div>
          {/* </HeadlessTippy> */}

          {isLogin ? (
            <UserLogin />
          ) : (
            <div onClick={() => setShowAcount(true)} className={cx("user")}>
              <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>
            </div>
          )}
        </div>
      </div>
    </header>
    // </div>
  );
}

export default Header;
