import { faLightbulb, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useEffect, useRef, useState } from 'react';
import { DataContext } from '../DataProvider';
import './SwitchStyle.scss';

function SwitchMode() {
    const themeContext = useContext(DataContext);
    const [isDark, setIsDark] = useState(false);
    const refInput = useRef();
    const refCircle = useRef();
    const refTongle = useRef();
    const handleTongle = () => {
        refInput.current.checked = !refInput.current.checked;
        setIsDark(refInput.current.checked);
        themeContext.tongleTheme();
    };
    useEffect(() => {
        const changeBackground = () => {
            if (isDark) {
                refCircle.current.style.background = 'rgba(7, 49, 85, 0.942)';
                refTongle.current.style.background = '#fff';
                refTongle.current.style =
                    'box-shadow: 1px 1px 7px 4px rgba(237, 237, 237, 0.926);';
            } else {
                refCircle.current.style.background = 'rgba(7, 49, 85, 0.942)';
                refTongle.current.style.background = '#fff';
                refTongle.current.style =
                    '  box-shadow: 1px 1px 7px 4px rgb(0 0 0 / 68%);';
            }
        };
        changeBackground();
        document.addEventListener('resize', changeBackground);
        return () => {
            document.removeEventListener('resize', changeBackground);
        };
    }, [isDark]);
    return (
        <div className="header__right" ref={refTongle} onClick={handleTongle}>
            <input hidden className="input" type="checkbox" ref={refInput} />
            <div className="icon">
                {isDark ? (
                    <FontAwesomeIcon icon={faMoon} className="icondark" />
                ) : (
                    <FontAwesomeIcon icon={faLightbulb} className="iconlight" />
                )}
            </div>
            <div ref={refCircle} className="circle"></div>
        </div>
    );
}

export default SwitchMode;
