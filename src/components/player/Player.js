import React from 'react';
import cn from 'classnames';

import styles from './Player.scss';

import Slider from 'components/slider';

const Player = () => (
  <div className={cn('container-fluid', styles.container)}>
    <div className={cn('row', styles.player)}>
      <div className={cn(styles.info)}>
        <div className={styles.thumbnail}>
          <img
            alt="cover art"
            src="https://upload.wikimedia.org/wikipedia/en/a/ad/X_cover.png"
          />
        </div>
        <div className={styles.description}>
          <div className={styles.title}>Feel Good Inc</div>
          <div className={styles.channel}>Demon Days</div>
        </div>
      </div>

      <div className={styles.controls}>
        <div className={styles.button}>
          <i className="fas fa-random" />
        </div>
        <div className={styles.button}>
          <i className="fas fa-step-backward" />
        </div>
        <div className={cn(styles.button, styles.playPause)}>
          <i className="fas fa-pause" />
        </div>
        <div className={styles.button}>
          <i className="fas fa-step-forward" />
        </div>
        <div className={styles.button}>
          <i className="fas fa-repeat" />
        </div>
      </div>
      <div className={styles.timeline}>
        <div className={styles.timer}>0:00</div>
        <Slider />
        <div className={styles.timer}>3:43</div>
      </div>
      <div className={styles.volume}>
        <div className={styles.volumeIcon}>
          <i className="fas fa-volume-up" />
        </div>
        <Slider />
      </div>
    </div>
  </div>
);

export default Player;
