/** @jsx h */
import { h } from 'preact';
import { FaTimes, GoSearch } from '../Icons/Navigation';
import styles from './Search.module.css';
import cx from 'classnames';

const Search = ({
  searchVisible,
  setSearchVisible,
}: {
  searchVisible: boolean;
  setSearchVisible: any;
}) => {
  const disableSearch = () => setSearchVisible(false);
  return (
    <div
      className={
        searchVisible
          ? cx(styles.headerSearchMain, styles.headerSearchMainActive)
          : styles.headerSearchMain
      }>
      <div className={styles.headerSearchWrapper}>
        <form className={styles.siteHeaderSearchForm} autoComplete="off">
          <button type="submit" className={styles.siteHeaderSearchBtn}>
            <GoSearch />
          </button>

          <input
            type="text"
            placeholder="Search our store"
            className={styles.siteHeaderSearchInput}
          />
        </form>
        <button
          type="button"
          className={styles.siteHeaderSearchBtn}
          onClick={disableSearch}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Search;
