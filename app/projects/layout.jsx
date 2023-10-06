"use client";
import "animate.css";
import styles from "./layout.module.css";
import ProjectHeader from "../components/project-header/ProjectHeader";
import TLDR from "../components/tldr/TLDR";
import Image from "next/image";
import { projectDetails } from "@/app/data/projectDetails";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const ProjectLayout = ({ children }) => {
  const pathname = usePathname();
  const path = pathname.split("/").slice(-1).toString();

  let project;
  switch (path) {
    case "theScore":
      project = projectDetails[0];
      break;
    case "project-2":
      project = projectDetails[1];
      break;
    case "project-3":
      project = projectDetails[2];
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <main className={styles.container}>
      <ProjectHeader />
      <Image
        alt={project.alt}
        height={1000}
        width={800}
        src={project.mainImg}
        className={`heightAuto ${styles.mainImg} animate__animated animate__fadeIn animate__fast`}
        unoptimized={true}
      />
      <TLDR />
      <div
        className={`${styles.pageContent} projectInnerContainer animate__animated animate__fadeIn animate__fast`}
      >
        {children}
      </div>
    </main>
  );
};

export default ProjectLayout;
