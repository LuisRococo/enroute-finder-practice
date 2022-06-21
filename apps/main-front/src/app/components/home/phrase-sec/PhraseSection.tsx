import React from 'react';
import styles from './styles.module.scss';
import { RiHeartsFill } from 'react-icons/ri';
import girlImg1 from '../../../../assets/imgs/phraseSection/girl-1.jpeg';
import girlImg2 from '../../../../assets/imgs/phraseSection/girl-2.jpeg';
import girlImg3 from '../../../../assets/imgs/phraseSection/girl-3.jpeg';

const PhraseSection = () => {
   return (
      <div className={`wrapper ${styles['container']}`}>
         <div className={`${styles['phrase-sec']} ${styles['container-section']}`}>
            <div className={styles['phrase-cont']}>
               <RiHeartsFill className={`${styles['phrase-cont-img']}`} />
               <h3>Discover a lot of new friendships !</h3>
               <p>At only some clicks away</p>
            </div>
         </div>
         <div className={`${styles['imgs-sec']} ${styles['container-section']}`}>
            <div className={styles['img-sec-img-cont']}>
               <img className={styles['img-1']} src={girlImg1} alt="" />
               <img className={styles['img-3']} src={girlImg2} alt="" />
               <img className={styles['img-2']} src={girlImg3} alt="" />
            </div>
         </div>
      </div>
   );
};

export default PhraseSection;
