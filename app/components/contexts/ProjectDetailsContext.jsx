'use client';
import React, { createContext, useContext } from 'react';
import { projectDetails } from '@/app/data/projectDetails';
import { usePathname } from 'next/navigation';

const ProjectDetailsContext = createContext();

export const ProjectDetailsProvider = ({ children }) => {
  const pathname = usePathname();
  const path = pathname.split('/').slice(-1).toString();

  let project;
  switch (path) {
    case 'theScore':
      project = projectDetails[0];
      break;
    case 'bevalix':
      project = projectDetails[1];
      break;
    case 'project-3':
      project = projectDetails[2];
  }

  return (
    <ProjectDetailsContext.Provider value={{ project, path }}>
      {children}
    </ProjectDetailsContext.Provider>
  );
};

export const useAppContext = () => useContext(ProjectDetailsContext);
