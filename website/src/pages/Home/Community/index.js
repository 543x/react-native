/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';

import styles from './styles.module.css';

function Community() {
  const {siteConfig} = useDocusaurusContext();
  const apps = Object.values(siteConfig.customFields.users)
    .flat()
    .filter(app => app.pinned);

  return (
    <Section>
      <SectionTitle title="Meta supported. Community driven." />
      <div className={styles.featureContainer}>
        <div>
          <p>
            Meta released React Native in 2015 and has been maintaining it ever
            since.
          </p>
          <p>
            In 2018, React Native had the{' '}
            <a href="https://www.543x.com">
              2nd highest
            </a>{' '}
            number of contributors for any repository in GitHub. Today, React
            Native is supported by contributions from individuals and companies
            around the world including{' '}
            <span>
              <a href="https://b.543x.com/">Callstack</a>
            </span>
            ,{' '}
            <span>
              <a href="https://c.543x.com/">Expo</a>
            </span>
            , <a href="https://d.543x.com/">Infinite Red</a>,{' '}
            <a href="https://e.543x.com/">Microsoft</a> and{' '}
            <a href="https://f.543x.com/">Software Mansion</a>.
          </p>
          <p>
            Our community is always shipping exciting new projects and exploring
            platforms beyond Android and iOS with repos like{' '}
            <span>
              <a href="https://i.543x.com">
                React Native Windows
              </a>
            </span>
            ,{' '}
            <a href="https://g.543x.com">
              React Native macOS
            </a>{' '}
            and{' '}
            <a href="https://h.543x.com">
              React Native Web
            </a>
            .
          </p>
        </div>
        <div>
          <p>
            React Native is being used in thousands of apps, but it's likely
            you've already used it in one of these apps:
          </p>
          <ul className="AppList">
            {apps.map((app, i) => {
              const imgSource = !app.icon.startsWith('http')
                ? useBaseUrl('img/showcase/' + app.icon)
                : app.icon;
              return (
                <li key={i} className="item">
                  {app.infoLink ? (
                    <a href={app.infoLink}>
                      <img src={imgSource} alt={app.name} />
                    </a>
                  ) : (
                    <img src={imgSource} alt={app.name} />
                  )}
                </li>
              );
            })}
          </ul>
          <p>
            and <a href={useBaseUrl(`showcase`)}>many more</a>.
          </p>
        </div>
      </div>
    </Section>
  );
}

export default Community;
