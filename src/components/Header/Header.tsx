/** @jsx h */
import { Fragment, h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import Cart from '../Cart';
import Navbar from '../Navbar';
import Search from '../Search';
import Second from '../Second';
import styles from './Header.module.css';
import cx from 'classnames';
import { BsCart, FaRegUser, GoSearch, RiMenu2Line } from '../Icons/Navigation';
import { Main } from '../Main/Main';

export type HeaderProps = {
  bigLogo: string;
  smallLogo: string;
  fixSmallLogo: string;
  fixBigLogo: string;
  linkImg: string;
  alt: string;
  text: string;
  title: string;
  btnText: string;
};

export function Header({
  bigLogo,
  smallLogo,
  fixSmallLogo,
  fixBigLogo,
  linkImg,
  alt,
  text,
  title,
  btnText,
}: HeaderProps) {
  const [secondVisible, setVisible] = useState<boolean>(false);
  const [searchVisible, setSearchVisible] = useState<boolean>(false);
  const [cartVisible, setCartVisible] = useState<boolean>(false);

  const [headerFixed, setHeaderFixed] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      if (window.scrollY >= 300) {
        setHeaderFixed(true);
      } else {
        setHeaderFixed(false);
      }
    });
  }, [window.scrollY]);

  const onVisible = () => setVisible(true);
  const onSearchVisible = () => setSearchVisible(true);
  const onCartVisible = () => setCartVisible(true);
  return (
    <Fragment>
      <div class={headerFixed ? cx(styles.headerMain, styles.headerFixed) : ''}>
        <div class={styles.headerMainWrapper}>
          <div class={styles.headerMainSearch}>
            <span class={cx(styles.iconMobile, styles.cursorPointer)}>
              <RiMenu2Line onClick={onVisible}
                color={headerFixed ? "black" : '#fff'}
              />
            </span>
            <span class={cx(styles.iconDesktop, styles.cursorPointer)}>
              <GoSearch onClick={onSearchVisible} color={headerFixed ? "black" : '#fff'} />
            </span>
          </div>
          <div class={styles.headerMainLogo}>
            {headerFixed ? (
              <img
                alt="Logo"
                src={fixBigLogo}
                srcSet={`${fixSmallLogo} 300w, ${fixBigLogo} 1280w`}
              />
            ) : (
              <img
                alt="FixLogo"
                src={bigLogo}
                srcSet={`${smallLogo} 300w, ${bigLogo} 1280w`}
              />
            )}
          </div>
          <div class={styles.headerMainUserBtns}>
            <span class={cx(styles.iconMobile, styles.cursorPointer)}>
              <GoSearch

                onClick={onSearchVisible}
              />
            </span>
            <span class={cx(styles.iconDesktop, styles.cursorPointer)}>
              <FaRegUser />
            </span>
            <span class={styles.cursorPointer}>
              <BsCart onClick={onCartVisible} />
            </span>
          </div>
        </div>
        <Navbar
          headerFixed={headerFixed}
        />
        <Second secondVisible={secondVisible} setVisible={setVisible} />
      </div>
      <Search
        searchVisible={searchVisible}
        setSearchVisible={setSearchVisible}
      />
      <Cart setCartVisible={setCartVisible} cartVisible={cartVisible} />


      <Main
        linkImg1='https://cdn.shopify.com/s/files/1/0028/2922/1954/files/ZR_JanTeaser_Desktop_300x.jpg?v=1641503711'
        linkImg2='https://cdn.shopify.com/s/files/1/0028/2922/1954/files/ZR_JanTeaser_Desktop_300x.jpg?v=1641503711'
        alt='img'
        btnText1='ccccccc'
        btnText2='fsfesfesfe'
        subTitle='GEAR UP TO GET OUT & STAY OUT'
        title1='A RESOLUTION'
        title2=' TO ADVENTURE'
        hrefBtn='dfdfd'
      />
    </Fragment>
  );
}
