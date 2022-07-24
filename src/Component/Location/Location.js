import classNames from 'classnames/bind';
import Select from 'react-select';
import useLocationForm from '~/hook/useFormLocation';
import style from './Location.module.scss';
const cx = classNames.bind(style);
function Location({ setAddress, address, error, sertError }) {
   const { state, onCitySelect, onDistrictSelect, onWardSelect } =
      useLocationForm(false);

   const {
      cityOptions,
      districtOptions,
      wardOptions,
      selectedCity,
      selectedDistrict,
      selectedWard,
   } = state;
   return (
      <div className={cx('address')}>
         <Select
            className={`${cx('select')} ${error.city ? cx('select-err') : ''}`}
            name="cityId"
            key={`cityId_${selectedCity?.value}`}
            isDisabled={cityOptions.length === 0}
            options={cityOptions}
            onChange={(option) => {
               onCitySelect(option);
               setAddress({ ...address, city: option.label });
               sertError({ ...error, city: '' });
            }}
            placeholder="Tỉnh/Thành"
            defaultValue={selectedCity}
         />
         <p className={cx('error')}>{error.city}</p>
         <Select
            className={`${cx('select')} ${
               error.district ? cx('select-err') : ''
            }`}
            name="districtId"
            key={`districtId_${selectedDistrict?.value}`}
            isDisabled={districtOptions.length === 0}
            options={districtOptions}
            onChange={(option) => {
               onDistrictSelect(option);
               setAddress({ ...address, district: option.label });
               sertError({ ...error, district: '' });
            }}
            placeholder="Quận/Huyện"
            defaultValue={selectedDistrict}
         />
         <p className={cx('error')}>{error.district}</p>
         <Select
            className={`${cx('select')} ${error.ward ? cx('select-err') : ''}`}
            name="wardId"
            key={`wardId_${selectedWard?.value}`}
            isDisabled={wardOptions.length === 0}
            options={wardOptions}
            placeholder="Phường/Xã"
            onChange={(option) => {
               onWardSelect(option);
               setAddress({ ...address, ward: option.label });
               sertError({ ...error, ward: '' });
            }}
            defaultValue={selectedWard}
         />{' '}
         <p className={cx('error')}>{error.ward}</p>
      </div>
   );
}

export default Location;
