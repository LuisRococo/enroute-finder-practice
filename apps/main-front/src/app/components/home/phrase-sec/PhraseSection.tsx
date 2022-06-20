import React from 'react';
import styles from './styles.module.scss';
import { RiHeartsFill } from 'react-icons/ri';

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
               <img
                  className={styles['img-1']}
                  src="https://thumbs.dreamstime.com/b/happy-young-african-woman-standing-her-finger-pointing-isolated-over-pink-banner-background-copy-space-happy-young-160551697.jpg"
                  alt=""
               />
               <img
                  className={styles['img-3']}
                  src="https://media.istockphoto.com/photos/close-up-photo-of-pretty-attractive-optimistic-lovely-she-her-lady-picture-id1146673398?k=20&m=1146673398&s=612x612&w=0&h=relXbE3qYdtayXr9juNJzQCY_QppoOkeEzJRD61P9v4="
                  alt=""
               />
               <img
                  className={styles['img-2']}
                  src="https://thumbs.dreamstime.com/b/success-victory-achievement-concept-happy-woman-winner-clenching-her-fists-yelling-yes-excitement-achieving-goals-148714049.jpg"
                  alt=""
               />
            </div>
         </div>
      </div>
   );
};

export default PhraseSection;
