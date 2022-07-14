import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import companyService from '~/service/CompanyService';
import ItemCompany from '../ListComPany/ItemCompany';
import style from './Company.module.scss';
const cx = classNames.bind(style);

function Company() {
   const [data, setData] = useState([]);
   useEffect(() => {
      const fethAPi = async () => {
         const result = await companyService.getAll('');
         setData(result.data);
      };
      fethAPi();
   }, []);
   return (
      <div className={cx('wrapper')}>
         <div className={cx('content')}>
            <div className="row">
               {data &&
                  data.map((item, index) => {
                     return (
                        <div className="col l-4 m-6 c-6" key={index}>
                           <div className={cx('item')}>
                              <ItemCompany item={item} />
                           </div>
                        </div>
                     );
                  })}
            </div>
         </div>
      </div>
   );
}

export default Company;
