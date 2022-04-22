/** @jsx h */
import { h } from 'preact';
import styles from './PageWidth.module.css';
import cx from 'classnames';

export interface PageWidthProps {
  children: any;
  fullWidth: any;
}

export default function PageWidth({ children, fullWidth }: PageWidthProps) {
  return (
    <div className={cx(styles.pageWidth, fullWidth && styles.pageWidthFull)}>
      {children}
    </div>
  );
}
