'use client';
import Image from 'next/image';
import styles from './page.module.css';
import ProjectContent from '@/app/components/project-content/ui-design/ProjectContent';
import { content } from '@/app/data/UIPageDetails';
import React, { useRef } from 'react';

const UIDesign = () => {
  const { agilnoTeams, fitnessWorld, championLA, sofiStadium } = content;

  const refs = {
    agilnoTeams: useRef(null),
    fitnessWorld: useRef(null),
    championLA: useRef(null),
    sofiStadium: useRef(null),
  };

  const handleScroll = (key) => {
    const ref = refs[key];
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 56,
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <div className={`projectInnerContainer ${styles.featured}`}>
        <h2 className='paragraphSmall'>Featured Projects ⬇️</h2>
        <ul>
          {Object.keys(content).map((key) => {
            return (
              <li key={key} onClick={() => handleScroll(key)}>
                <span>{content[key].projectName}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className='projectInnerContainer'>
        <div className={`${styles.divider} ${styles.marginLarge}`}></div>
      </div>
      <div className='projectInnerContainer'>
        <Image
          alt='Sports team logos'
          height={20}
          width={20}
          src='/ui-design/logos.jpg'
          className='heightAuto width100'
          unoptimized={true}
        />
      </div>
      <div className='projectInnerContainer'>
        <div
          className={`${styles.divider} ${styles.marginLarge}`}
          ref={refs.agilnoTeams}
        ></div>
      </div>
      <div className='projectInnerContainer'>
        <ProjectContent
          heading={agilnoTeams.heading}
          subheading={agilnoTeams.subheading}
          logo={agilnoTeams.logo}
        />
      </div>
      <Image
        alt='Agilno teams graphic'
        height={20}
        width={20}
        src='/ui-design/agilno-teams.jpg'
        className='heightAuto width100'
        unoptimized={true}
      />
      <div className={styles.divider} ref={refs.fitnessWorld}></div>
      <div className='projectInnerContainer'>
        <ProjectContent
          heading={fitnessWorld.heading}
          subheading={fitnessWorld.subheading}
          link={fitnessWorld.link}
          logo={fitnessWorld.logo}
        />
      </div>
      <Image
        alt='Fitness world graphic'
        height={20}
        width={20}
        src='/ui-design/fitness-world.jpg'
        className='heightAuto width100'
        unoptimized={true}
      />
      <div className={styles.divider} ref={refs.championLA}></div>
      <div className='projectInnerContainer'>
        <ProjectContent
          heading={championLA.heading}
          subheading={championLA.subheading}
          logo={championLA.logo}
        />
      </div>
      <Image
        alt='Champion LA graphic'
        height={20}
        width={20}
        src='/ui-design/champion-la.jpg'
        className='heightAuto width100'
        unoptimized={true}
      />
      <div className={styles.divider} ref={refs.sofiStadium}></div>
      <div className='projectInnerContainer'>
        <ProjectContent
          heading={sofiStadium.heading}
          subheading={sofiStadium.subheading}
          link={sofiStadium.link}
          logo={sofiStadium.logo}
        />
      </div>
      <Image
        alt='Sofi stadium suite sales graphic'
        height={20}
        width={20}
        src='/ui-design/sofi.jpg'
        className='heightAuto width100'
        unoptimized={true}
      />
      <span className='projectEmoji'>✌️</span>
      <div className='projectInnerContainer downloadContainer'>
        <section className={`imageBorderRadius ${styles.moreToCome}`}>
          <p className='overline uppercaseSecondary'>More to come</p>
        </section>
      </div>
    </>
  );
};

export default UIDesign;
