'use client';
import styles from './page.module.css';
import ProjectContent from '@/app/components/project-content/ProjectContent';
import DownloadApp from '@/app/components/thescore-download/DownloadApp';
import TLDR from '@/app/components/tldr/TLDR';
import Image from 'next/image';
import { content } from '@/app/data/theScorePageDetails';
import { useAppContext as ProjectDetailsContext } from '@/app/components/contexts/ProjectDetailsContext';

const TheScore = () => {
  const { goals, branding, challenges, whyParlay, betterUx, wrapItUp } =
    content;
  const project = ProjectDetailsContext();

  return (
    <>
      <TLDR project={project} />
      <div className='projectInnerContainer'>
        <Image
          alt='Parlay+ graphic'
          height={20}
          width={20}
          src='/thescore/screen2.jpg'
          className='heightAuto width100'
          unoptimized={true}
        />
      </div>
      <div className='projectInnerContainer flexColumnGap56'>
        <ProjectContent
          title={goals.title}
          p1={goals.paragraph1}
          p2={goals.paragraph2}
        />
        <Image
          alt='Parlay+ graphic'
          src='/thescore/screen3.jpg'
          height={20}
          width={20}
          unoptimized={true}
          className='heightAuto width100'
        />
        <ProjectContent title={branding.title} p1={goals.paragraph1} />
        <Image
          alt='Parlay+ graphic'
          src='/thescore/screen4.jpg'
          height={20}
          width={20}
          unoptimized={true}
          className='heightAuto width100'
        />
        <ProjectContent
          title={challenges.title}
          p1={challenges.paragraph1}
          p2={challenges.paragraph2}
        />
      </div>
      <Image
        alt='Parlay+ graphic'
        src='/thescore/screen5.jpg'
        height={20}
        width={20}
        unoptimized={true}
        className='heightAuto width100'
      />
      <div className={`projectInnerContainer ${styles.doubleContainerParent}`}>
        <h5 className='overline'>{whyParlay[0].title}</h5>
        <div className='doubleContainer'>
          <ProjectContent
            p1={whyParlay[0].paragraph1}
            p2={whyParlay[0].paragraph2}
          />
          <ProjectContent
            p1={whyParlay[1].paragraph1}
            p2={whyParlay[1].paragraph2}
          />
        </div>
      </div>
      <div className='projectInnerContainer flexColumnGap56'>
        <Image
          alt='Parlay+ graphic'
          src='/thescore/screen6.jpg'
          height={20}
          width={20}
          unoptimized={true}
          className='heightAuto width100'
        />
        <ProjectContent
          title={betterUx.title}
          p1={betterUx.paragraph1}
          p2={betterUx.paragraph2}
        />
        <ProjectContent
          title={wrapItUp.title}
          p1={wrapItUp.paragraph1}
          p2={wrapItUp.paragraph2}
        />
        <span className='projectEmoji'>✌️</span>
      </div>
      <div className='projectInnerContainer downloadContainer'>
        <DownloadApp />
      </div>
    </>
  );
};

export default TheScore;
