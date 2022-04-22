/** @jsx h */
import { h } from 'preact';
import styles from './Navbar.module.css';
import cx from 'classnames'

const Navbar = (props: any) => {
  return (
    <div className={styles.headerNavbar}>
      <ul className={styles.headerNavbarList}>
        <li className={props.headerFixed ? cx(styles.headerNavbarListItem, styles.listItem , styles.active) :cx(styles.headerNavbarListItem, styles.listItem ) }>
          <div className={styles.link}>
            <a className={props.headerFixed ? cx(styles.linkItem, styles.active) : cx(styles.linkItem)} href="#">HOME</a>
          </div>
        </li>

        <li className={cx(styles.headerNavbarListItem, styles.hasSubmenu, styles.listItem)} >
          <div className={styles.link}>
            <a className={props.headerFixed ? cx(styles.linkItem, styles.active) : cx(styles.linkItem)} href="#">NEW ARRIVALS</a>
          </div>

          <ul className={cx(styles.listItemSubmenu, styles.simpleSbmenu)}>
            <li className={styles.submenuSubitem}>
              <a>Men's new Arrivals</a>
            </li>
            <li className={styles.submenuSubitem}>
              <a>Ladies new Arrivals</a>
            </li>
          </ul>
        </li>
        <li className={cx(styles.headerNavbarListItem, styles.hasSubmenu, styles.listLtem, styles.megamenu)}>
          <div className={styles.link}>
            <a className={props.headerFixed ? cx(styles.linkItem, styles.active) : cx(styles.linkItem)} href="#">MENS</a>
          </div>

          <div className={cx(styles.listItemSubmenu, styles.submenu)}>
            <div className={styles.submenuItems}>
              <ul className={styles.submenuItem}>
                <h3 className={styles.submenuItemTitle}>SHOP BY STYLE</h3>
                <li>Jackets</li>
                <li>Vests</li>
                <li>Layers</li>
                <li>Bottoms</li>
                <li> Accessories</li>
              </ul>
              <ul className={styles.submenuItem}>
                <h3 className={styles.submenuItemTitle}>SHOP BY PERFOMANCE</h3>
                <li> Cold Weather</li>
                <li>Tech Layers</li>
                <li>Windproofs</li>
                <li>Waterproof</li>
                <li>Wicking </li>
              </ul>
              <ul className={styles.submenuItem}>
                <h3 className={styles.submenuItemTitle}>BEST SELLERS</h3>
              </ul>
            </div>
          </div>
        </li>
        <li className={cx(styles.headerNavbarListItem, styles.hasSubmenu, styles.listItem, styles.megamenu)}>
          <div className={styles.link}>
            <a className={props.headerFixed ? cx(styles.linkItem, styles.active) : cx(styles.linkItem)} href="#">WOMENS</a>
          </div>

          <div className={cx(styles.listItemSubmenu, styles.submenu)}>
            <div className={styles.submenuItems}>
              <ul className={styles.submenuItem}>
                <h3 className={styles.submenuItemTitle}>SHOP BY STYLE</h3>
                <li>Jackets</li>
                <li>Vests</li>
                <li>Layers</li>
                <li> Bottoms</li>
                <li> Accessories</li>
              </ul>
              <ul className={styles.submenuItem}>
                <h3 className={styles.submenuItemTitle}>SHOP BY STYLE</h3>
                 <li>Jackets</li>
                <li>Vests</li>
                <li>Layers</li>
                <li> Bottoms</li>
                <li> Accessories</li>
              </ul>
              <ul className={styles.submenuItem}>
                <h3 className={styles.submenuItemTitle}>BEST SELLERS</h3>
              </ul>
            </div>
          </div>
        </li>
        <li className={cx(styles.headerNavbarListItem, styles.hasSubmenu, styles.listItem)}>
          <div className={styles.link}>
            <a className={props.headerFixed ? cx(styles.linkItem, styles.active) : cx(styles.linkItem)} href="#">FEATURED</a>
          </div>
          <ul className={cx(styles.listItemSubmenu, styles.simpleSubmenu)}>
            <li className={styles.submenuSubitem}>
              <a>Men's 2022 U.S. Open Champinship</a>
            </li>
            <li className={styles.submenuSubitem}>
              <a>Women's 2022 U.S. Open Champinship</a>
            </li>
          </ul>
        </li>
        <li className={cx(styles.headerNavbarListItem, styles.hasSubmenu, styles.listItem)}>
          <div className={styles.link}>
            <a className={props.headerFixed ? cx(styles.linkItem, styles.active) : cx(styles.linkItem)} href="#">SALE</a>
          </div>
          <ul className={cx(styles.listItemSubmenu, styles.simpleSubmenu)}>
            <li className={styles.submenuSubitem}>
              <a>Men's Sale</a>
            </li>
            <li className={styles.submenuSubitem}>
              <a>Women's Sale</a>
            </li>
          </ul>
        </li>
        <li className={props.headerFixed ? cx(styles.headerNavbarListItem, styles.listItem , styles.active) :cx(styles.headerNavbarListItem, styles.listItem ) }>
          <div className={styles.link}>
            <a className={props.headerFixed ? cx(styles.linkItem, styles.active) : cx(styles.linkItem)} href="#">OUR TECHNOLOGY</a>
          </div>
        </li>
        <li className={props.headerFixed ? cx(styles.headerNavbarListItem, styles.listItem , styles.active) :cx(styles.headerNavbarListItem, styles.listItem ) }>
          <div className={styles.link}>
            <a className={props.headerFixed ? cx(styles.linkItem, styles.active) : cx(styles.linkItem)} href="#">ZERO+ REWARDS</a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
