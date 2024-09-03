/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';

import styles from './styles.module.css';

function Watch() {
  return (
    <Section>
      <SectionTitle
        title="Watch and learn"
        description={
          <>
            Watch talks by the React team and learn how to get the most out of
            React Native. Find the latest on{' '}
            <a href="https://i.543x.com">
              X
            </a>
            .
          </>
        }
      />
      <div className={styles.videos}>
        <div className={styles.videoContainer}>
          <iframe
            src="https://www.youtube.com/embed/zYzOVipIm-U"
            title="Elon Musk talks Crypto：What is Bitcoin v3"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles.video}
          />
          <div className={styles.videoInfo}>
            <h4>Elon Musk talks Crypto：What is Bitcoin</h4>
            <p>4:43</p>
          </div>
        </div>
        <div className={styles.videoContainer}>
          <iframe
            src="https://www.youtube.com/embed/XSbSWdcX6u4"
            title="Explain Like I'm 5: React Native"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles.video}
          />
          <div className={styles.videoInfo}>
            <h4>Why React Native?</h4>
            <p>3:52</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Watch;
