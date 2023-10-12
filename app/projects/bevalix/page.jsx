"use client";
import styles from "./page.module.css";
import TLDR from "@/app/components/tldr/TLDR";
import ProjectContent from "@/app/components/project-content/ProjectContent";
import DownloadApp from "@/app/components/bevalix-download/DownloadApp";
import Image from "next/image";
import { content } from "@/app/data/bevalixPageDetails";
import { useAppContext as ProjectDetailsContext } from "@/app/components/contexts/ProjectDetailsContext";
import NumberedCard from "@/app/components/numbered-card/NumberedCard";

const Bevalix = () => {
  const {
    problem,
    onboarding,
    signup,
    branding,
    discovery,
    primaryUsers,
    mvp,
    blurb1,
    blurb2,
    blurb3,
    blurb4,
    blurb5,
    blurb6,
    blurb7,
    blurb8,
    blurb9,
    challenges,
    numberedList1,
    numberedList2,
  } = content;
  const project = ProjectDetailsContext();

  return (
    <>
      <div className="projectInnerContainer flexColumnGap56">
        <ProjectContent
          title={problem.title}
          p1={problem.paragraph1}
          p2={problem.paragraph2}
        />
        <Image
          alt=""
          src="/bevalix/placeholder.jpg"
          height={20}
          width={20}
          unoptimized={true}
          className="heightAuto width100"
        />
      </div>
      <TLDR project={project} />
      <div className="projectInnerContainer flexColumnGap56">
        <ProjectContent
          title={onboarding.title}
          p1={onboarding.paragraph1}
          p2={onboarding.paragraph2}
        />
        <Image
          alt=""
          src="/bevalix/placeholder.jpg"
          height={20}
          width={20}
          unoptimized={true}
          className="heightAuto width100"
        />
        <ProjectContent
          title={signup.title}
          p1={signup.paragraph1}
          p2={signup.paragraph2}
        />
        <Image
          alt=""
          src="/bevalix/placeholder.jpg"
          height={20}
          width={20}
          unoptimized={true}
          className="heightAuto width100"
        />
        <ProjectContent
          title={branding.title}
          p1={branding.paragraph1}
          p2={branding.paragraph2}
        />
        <Image
          alt=""
          src="/bevalix/placeholder.jpg"
          height={20}
          width={20}
          unoptimized={true}
          className="heightAuto width100"
        />
        <ProjectContent
          title={discovery.title}
          p1={discovery.paragraph1}
          p2={discovery.paragraph2}
        />
      </div>
      <div className={`projectInnerContainer ${styles.doubleContainerParent}`}>
        <h5 className="overline">{primaryUsers[0].title}</h5>
        <div className="doubleContainer">
          <ProjectContent
            p1={primaryUsers[0].paragraph1}
            p2={primaryUsers[0].paragraph2}
          />
          <ProjectContent
            p1={primaryUsers[1].paragraph1}
            p2={primaryUsers[1].paragraph2}
          />
        </div>
      </div>
      <div className="projectInnerContainer flexColumnGap56">
        <Image
          alt=""
          src="/bevalix/placeholder.jpg"
          height={20}
          width={20}
          unoptimized={true}
          className="heightAuto width100"
        />
        <ProjectContent
          title={mvp[0].title}
          p1={mvp[0].paragraph1}
          p2={mvp[0].paragraph2}
        />
      </div>
      <div className="projectInnerContainer doubleContainer">
        <ProjectContent
          p1={mvp[1].paragraph1}
          mvpBullets={mvp[1].bulletPoints}
        />
        <ProjectContent
          p1={mvp[2].paragraph1}
          mvpBullets={mvp[2].bulletPoints}
        />
      </div>
      <div className="projectInnerContainer flexColumnGap56">
        <Image
          alt=""
          src="/bevalix/placeholder.jpg"
          height={20}
          width={20}
          unoptimized={true}
          className="heightAuto width100"
        />
        <ProjectContent p1={blurb1.paragraph1} p2={blurb1.paragraph2} />
        <Image
          alt=""
          src="/bevalix/placeholder.jpg"
          height={20}
          width={20}
          unoptimized={true}
          className="heightAuto width100"
        />
        <ProjectContent p1={blurb2.paragraph1} p2={blurb2.paragraph2} />
        <Image
          alt=""
          src="/bevalix/placeholder.jpg"
          height={20}
          width={20}
          unoptimized={true}
          className="heightAuto width100"
        />
        <ProjectContent p1={blurb3.paragraph1} />
        <ul className={styles.numberedCardContainer}>
          {numberedList1.map((obj) => (
            <NumberedCard
              key={obj.number}
              number={obj.number}
              text={obj.text}
            />
          ))}
        </ul>
        <Image
          alt=""
          src="/bevalix/placeholder.jpg"
          height={20}
          width={20}
          unoptimized={true}
          className="heightAuto width100"
        />
        <ProjectContent p1={blurb4.paragraph1} p2={blurb4.paragraph2} />
        <ul className={styles.numberedCardContainer}>
          {numberedList2.map((obj) => (
            <NumberedCard
              key={obj.number}
              number={obj.number}
              text={obj.text}
            />
          ))}
        </ul>
        <Image
          alt=""
          src="/bevalix/placeholder.jpg"
          height={20}
          width={20}
          unoptimized={true}
          className="heightAuto width100"
        />
        <ProjectContent p1={blurb5.paragraph1} p2={blurb5.paragraph2} />
        <Image
          alt=""
          src="/bevalix/placeholder.jpg"
          height={20}
          width={20}
          unoptimized={true}
          className="heightAuto width100"
        />
        <ProjectContent p1={blurb6.paragraph1} p2={blurb6.paragraph2} />
        <Image
          alt=""
          src="/bevalix/placeholder.jpg"
          height={20}
          width={20}
          unoptimized={true}
          className="heightAuto width100"
        />
        <ProjectContent p1={blurb7.paragraph1} p2={blurb7.paragraph2} />
        <Image
          alt=""
          src="/bevalix/placeholder.jpg"
          height={20}
          width={20}
          unoptimized={true}
          className="heightAuto width100"
        />
        <ProjectContent p1={blurb8.paragraph1} p2={blurb8.paragraph2} />
      </div>
      <Image
        alt=""
        src="/bevalix/placeholder.jpg"
        height={20}
        width={20}
        unoptimized={true}
        className="heightAuto width100"
      />
      <div className="projectInnerContainer flexColumnGap56">
        <ProjectContent p1={blurb9.paragraph1} p2={blurb9.paragraph2} />
        <Image
          alt=""
          src="/bevalix/placeholder.jpg"
          height={20}
          width={20}
          unoptimized={true}
          className="heightAuto width100"
        />
        <ProjectContent
          title={challenges.title}
          p1={challenges.paragraph1}
          p2={challenges.paragraph2}
        />
        <span className="projectEmoji">🇫🇷</span>
      </div>
      <div className="projectInnerContainer downloadContainer">
        <DownloadApp />
      </div>
    </>
  );
};

export default Bevalix;
