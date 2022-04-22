/** @jsx h */
import { h } from 'preact';
import { FaTimes } from '../Icons/Navigation';
import styles from './Cart.module.css';
import cx from 'classnames'

const Cart = ({
  cartVisible,
  setCartVisible,
}: {
  cartVisible: boolean;
  setCartVisible: any;
}) => {
  const disableCart = () => setCartVisible(false);
  return (
    <div className={cartVisible ? cx(styles.headerCart, styles.active) : styles.headerCart }>
      <div className={cx(styles.headerCartMain ,styles.cart)}>
        <div className={styles.cartTop}>
          <div className={styles.cartTopTitle}>Cart</div>
          <button
            type="button"
            className={styles.cartCloseBtn}
            onClick={disableCart}>
            <FaTimes />
          </button>
        </div>
      </div>

      <div className={styles.headerCartBottom}>
        <div className={styles.cartScrollable}>
          <p className={styles.cartEmptyMsg}>Your cart is currently empty.</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
