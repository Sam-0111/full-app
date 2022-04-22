/** @jsx h */
import { h } from 'preact';
import styles from './Main.module.css';
import cx from 'classnames';

export type MainProps = {
  linkImg1: string;
  alt: string;
  subTitle: string;
  btnText1: string;
  btnText2: string;
  title1: string;
  title2: string;
  hrefBtn: string;
  linkImg2: string;
};

export function Main({
  linkImg1,
  linkImg2,
  alt,
  btnText2,
  subTitle,
  btnText1,
  title1,
  title2,
  hrefBtn,
}: MainProps) {
  return (
    <div class={styles.mainBox}>


      <div className={styles.blackTheme}>
        <div className={styles.blackThemeLine}>

        </div>
      </div>
      <div class={styles.mainContainer}>
        <div class={styles.main}>
          <img src={linkImg1} alt={alt} class={styles.image} />
          <img src={linkImg2} alt={alt} class={styles.imageMobile} />
          <div class={styles.descriptionBox}>
            <div class={styles.descriptionContainer}>
              <div class={styles.description}>
                <div class={styles.titles}>
                  <div className={styles.overflow}>

                    <h3 class={styles.subTitle}>{subTitle}</h3>
                  </div>

                  <h1 class={styles.title}>
                    <p className={styles.title1}>{title1}</p>
                    <p className={styles.title2}>{title2}</p>
                  </h1>

                </div>
              </div>
              <div class={styles.description}>
                <div class={styles.animation}>
                  <div class={styles.block} />
                </div>
              </div>
              <div class={styles.btnBox}>
                <div class={styles.btnContainer}>
                  <div class={styles.btn}>
                    <a href={hrefBtn} class={styles.btnText}>
                      {btnText1}
                    </a>
                  </div>
                  <div class={styles.btn}>
                    <a href={hrefBtn} class={styles.btnText}>
                      {btnText2}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
