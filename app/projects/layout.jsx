"use client";
import React from "react";
import "animate.css";
import styles from "./layout.module.css";
import ProjectHeader from "../components/project-header/ProjectHeader";
import ProjectNav from "../components/project-page-nav/ProjectNav";
import Image from "next/image";
import { useEffect } from "react";
import { useAppContext as ProjectDetailsContext } from "@/app/components/contexts/ProjectDetailsContext";

const ProjectLayout = ({ children }) => {
  const { project, path } = ProjectDetailsContext();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <main className={styles.container}>
      <ProjectHeader project={project} />
      <Image
        alt={project.alt}
        height={1000}
        width={800}
        src={project.mainImg}
        className={`heightAuto ${styles.mainImg} animate__animated animate__fadeIn animate__fast`}
        unoptimized={true}
      />
      <section
        className={`${styles.pageContent} animate__animated animate__fadeIn animate__fast`}
      >
        {children}
      </section>
      <ProjectNav path={path} />
    </main>
  );
};

export default ProjectLayout;
