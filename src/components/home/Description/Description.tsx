"use client";

import Image from "next/image";
import styles from './Description.module.scss';
import {useState} from "react";
import classNames from "classnames";

const PLACEHOLDER_IMAGE = 'data:image/jpeg;base64,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';

export const Description = () => {
  const [hasBorder, setHasBorder] = useState(false);
  const handleClick = () => setHasBorder(!hasBorder);
  const cx = classNames.bind(styles);

  const buttonStyles = cx('Description__button', {
    'Description__button--border': hasBorder,
  });
  return (
    <section className={styles.Description}>
      <button className={buttonStyles} onClick={handleClick}>
        <Image src="/images/description.jpeg" alt="products marketplace"
               height={300} width={300} quality={100} placeholder='blur' blurDataURL={PLACEHOLDER_IMAGE}/>
      </button>
      <div className={styles.Description__text}>
        <h2>Bring the future today</h2>
        <p>Future World: Your Gateway to Tomorrow&#39;s Tech! Dive into a world of cutting-edge gadgets and gear. Stay
          ahead of the curve and redefine your digital lifestyle with us.</p>
      </div>
    </section>
  )
}
