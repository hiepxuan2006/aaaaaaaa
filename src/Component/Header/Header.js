import {
   faBars,
   faCartFlatbed,
   faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Wrapper } from '~/Component/Popper';
import { DataContext } from '../DataProvider';
import style from './Header.module.scss';
import Search from './Search/Search';
import UserLogin from './UserLogin';
const cx = classNames.bind(style);
function Header() {
   const logo = require('~/assets/img/logo-farm.png');
   const navBar = [
      { navItem: 'Trang chủ', path: '/' },
      { navItem: 'Cửa hàng', path: '/cua-hang' },
      { navItem: 'Danh bạ nhà nông', path: '/danh-ba-nha-nong' },
      { navItem: 'Blog', path: '/blog' },
   ];

   const {
     theme,
     cart,
     setCLose,
     showNavbar,
     setShowNavbar,
     setShowAcount,
     isLogin,
   } = useContext(DataContext);
   const [scrollY, setScrollY] = useState('');
   const [visible, setVisible] = useState(false);

   useEffect(() => {
      const setScrolly = () => {
         setScrollY(window.scrollY);
      };
      window.addEventListener('scroll', setScrolly);
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
             <HeadlessTippy
               interactive
               visible={visible}
               render={(attrs) => (
                 <div className={cx("search-result")} tabIndex="-1" {...attrs}>
                   <Wrapper>
                     <ul className={cx("list-action")}>
                       <li className={cx("list-item")}>
                         <Link to={"/don-hang"}>Đơn mua</Link>
                       </li>
                       <li
                         onClick={() => {
                           setShowAcount(true);
                           setVisible(false);
                         }}
                         className={cx("list-item")}
                       >
                         Đăng nhập/Đăng ký
                       </li>
                     </ul>
                   </Wrapper>
                 </div>
               )}
               onClickOutside={() => setVisible(false)}
             >
               <div className={cx("user")} onClick={() => setVisible(!visible)}>
                 <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>
               </div>
             </HeadlessTippy>
             // <div
             //    onClick={() => setShowAcount(true)}
             //    className={cx('user')}
             // >
             //    <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>
             // </div>
           )}
         </div>
       </div>
     </header>
     // </div>
   );
}

export default Header;
