import React, { useContext, useState } from 'react';
import style from './UserLogin.module.scss';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper } from '~/Component/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { DataContext } from '~/Component/DataProvider';
import { Link } from 'react-router-dom';
import { TOKEN_NAME } from '~/utils/Contant';

const cx = classNames.bind(style);
function UserLogin(props) {
   const [visible, setVisible] = useState(false);
   const { user, logout } = useContext(DataContext);

   return (
      <HeadlessTippy
         interactive
         visible={visible}
         render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
               <Wrapper>
                  <div className={cx('header')}>
                     <div className={cx('image')}>
                        <img
                           src="https://static.fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg"
                           alt=""
                        />
                     </div>
                     <h4 className={cx('search-title')}>{user.name}</h4>
                  </div>
                  <ul className={cx('list-action')}>
                     <li className={cx('list-item')}>
                        <Link to={'/don-hang'}>Đơn mua</Link>
                     </li>
                     <li
                        onClick={() => {
                           logout();
                        }}
                        className={cx('list-item')}
                     >
                        Đăng xuất
                     </li>
                  </ul>
               </Wrapper>
            </div>
         )}
         onClickOutside={() => setVisible(false)}
      >
         <div className={cx('user')}>
            <FontAwesomeIcon
               onClick={() => setVisible(!visible)}
               icon={faUserCircle}
            ></FontAwesomeIcon>
         </div>
      </HeadlessTippy>
   );
}

export default UserLogin;
