/** @jsx h */
import { h } from 'preact';
import styles from './Second.module.css';
import { useState } from 'react';
import cx from 'classnames'
import {
  AiOutlineInstagram,
  BsTwitter,
  FaTimes,
  ImFacebook,
  MdKeyboardArrowDown,
} from '../Icons/Navigation';

const Second = ({
  secondVisible,
  setVisible,
}: {
  secondVisible: boolean;
  setVisible: any;
}) => {
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(true);
  const [third, setThird] = useState(true);
  const [fourth, setFourth] = useState(true);
  const [five, setFive] = useState(true);

  const [subOne, setSubOne] = useState(false);
  const [subTwo, setSubTwo] = useState(false);
  const [subThree, setSubThree] = useState(false);
  const [subFour, setSubFour] = useState(false);

  return (
    <div className={secondVisible ? cx(styles.secondNavbar, styles.active) : styles.secondNavbar}>
      <div className={styles.closeButtonArea}>
        <div className={styles.closeButton}>
          <FaTimes
            onClick={() => {
              setVisible(false);
            }}
          />
        </div>
      </div>

      <div className={styles.secondBox}>
        <ul className={styles.secondScroll}>
          <li className={styles.secondNavItem}>
            <a>HOME</a>
          </li>
          
          <li className={cx(styles.secondNavItem, styles.dropdown)}>
            <div className={styles.dropdownBox}>
              <div>
                <a>NEW ARRIVALS</a>
              </div>{' '}
              <div
                className={styles.icon}
                onClick={() => {
                  setFirst(!first);
                }}>
                <span className={first ? styles.rotate : ''}>
                  <MdKeyboardArrowDown />
                </span>
              </div>
            </div>

            <div
              className={
                first ? cx(styles.dropdownSubmenu,  styles.hidden): styles.dropdownSubmenu
              }>
              <li>Men's New Arrivals</li>
              <li>Women's New Arrivals</li>
            </div>
          </li>

          <li className={cx(styles.secondNavItem, styles.dropdown)}>
            <div className={styles.dropdownBox}>
              <div>
                <a>MENS</a>
              </div>

              <div className={styles.icon} onClick={() => setSecond(!second)}>
                <span className={second ? styles.rotate : ''}>
                  <MdKeyboardArrowDown />
                </span>
              </div>
            </div>

            <div
              className={
                second ? cx(styles.dropdownSubmenu,  styles.hidden): styles.dropdownSubmenu
              }>
              <div className={styles.dropdownWrap}>
                <span>Shop by style</span>
                <span
                  className={styles.subSubmenuArrow}
                  onClick={() => {
                    setSubOne(!subOne);
                  }}>
                  <MdKeyboardArrowDown className={subOne ? styles.rotate : ''} />
                </span>

                <div className={subOne ? cx(styles.sub, styles.active) : styles.sub}>
                  <li>Jackets</li>
                  <li>Vests</li>
                  <li>Layers</li>
                  <li>Bottoms</li>
                  <li>Accessories</li>
                </div>
              </div>
              <li>
                <span>Shop by perfomance</span>
                <span
                  className={styles.subSubmenuArrow}
                  onClick={() => {
                    setSubTwo(!subTwo);
                  }}>
                  <MdKeyboardArrowDown className={subTwo && styles.rotate} />
                </span>

                <div className={subTwo ? cx(styles.sub, styles.active) : styles.sub}>
                  <li>Cold Weather</li>
                  <li>Tech Layers</li>
                  <li>Windproof</li>
                  <li>Waterproof</li>
                  <li>Wicking</li>
                </div>
              </li>
              <li>Best sellers</li>
              <li>Big & tall</li>
            </div>
          </li>

          <li className={cx(styles.secondNavItem, styles.dropdown)}>
            <div className={styles.dropdownBox}>
              <div>
                <a>WOMENS</a>
              </div>
              <div className={styles.icon} onClick={() => setThird(!third)}>
                <span className={third ? styles.rotate : ''}>
                  <MdKeyboardArrowDown />
                </span>
              </div>
            </div>
            <div
              className={
                third ? cx(styles.dropdownSubmenu,  styles.hidden): styles.dropdownSubmenu
              }>
              <div>
                <span>Shop by style</span>
                <span
                  className={styles.subSubmenuArrow}
                  onClick={() => {
                    setSubThree(!subThree);
                  }}>
                  <MdKeyboardArrowDown className={subThree && styles.rotate} />
                </span>
                <div className={subThree ? cx(styles.sub, styles.active) : styles.sub}>
                  <li>Jackets</li>
                  <li>Vests</li>
                  <li>Layers</li>
                  <li>Bottoms</li>
                  <li>Accessories</li>
                </div>
              </div>
              <li>
                <span>Shop by perfomance</span>
                <span
                  className={styles.subSubmenuArrow}
                  onClick={() => {
                    setSubFour(!subFour);
                  }}>
                  <MdKeyboardArrowDown className={subFour && styles.rotate} />
                </span>

                <div className={subFour ? cx(styles.sub, styles.active) : styles.sub}>
                  <li>Cold Weather</li>
                  <li>Tech Layers</li>
                  <li>Windproof</li>
                  <li>Waterproof</li>
                  <li>Wicking</li>
                </div>
              </li>
              <li>Best sellers</li>
            </div>
          </li>
          <li className={cx(styles.secondNavItem, styles.dropdown)}>
            <div className={styles.dropdownBox}>
              <div>
                <a>FEATURED</a>
              </div>{' '}
              <div className={styles.icon} onClick={() => setFourth(!fourth)}>
                <span className={fourth ? styles.rotate : ''}>
                  <MdKeyboardArrowDown />
                </span>
              </div>
            </div>
            <div
              className={
                fourth ? cx(styles.dropdownSubmenu,  styles.hidden): styles.dropdownSubmenu
              }>
              <li>Men's 2022 U.S. Open Championship</li>
              <li>Women's 2022 U.S. Open Championship</li>
            </div>
          </li>
          <li className={cx(styles.secondNavItem, styles.dropdown)}>
            <div className={styles.dropdownBox}>
              <div>
                <a>FEATURED</a>
              </div>{' '}
              <div className={styles.icon} onClick={() => setFive(!five)}>
                <span className={five ? styles.rotate : ''}>
                  <MdKeyboardArrowDown />
                </span>
              </div>
            </div>

            <div
              className={
                five ? cx(styles.dropdownSubmenu,  styles.hidden): styles.dropdownSubmenu
              }>
              <li>Men's Sale</li>
              <li>Women's Sale</li>
            </div>
          </li>
          <li className={styles.secondNavItem}>
            <a>OUR TECHNOLOGY</a>
          </li>
          <li className={styles.secondNavItem}>
            <a>ZERO+ REWARDS</a>
          </li>
          <p className={styles.loginText}>Log in</p>
          <div className={styles.contacts}>
            <div>
              <AiOutlineInstagram />
            </div>
            <div>
              <ImFacebook />
            </div>
            <div>
              <BsTwitter />
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Second;
