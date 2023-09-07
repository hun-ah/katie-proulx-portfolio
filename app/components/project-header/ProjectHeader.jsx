'use client';
import styles from './project-header.module.css';
import ProjectDetail from './project-details/ProjectDetail';
import { projectDetails } from '@/app/data/projectDetails';
import { usePathname } from 'next/navigation';

const ProjectHeader = () => {
  const pathname = usePathname();
  const path = pathname.split('/').slice(-1).toString();

  const titles = [
    { icon: '/user-circle.svg', heading: 'Client' },
    { icon: '/briefcase.svg', heading: 'Industry' },
    { icon: '/user-circle.svg', heading: 'My role' },
    { icon: '/calendar.svg', heading: 'Duration' },
  ];

  let project;
  switch (path) {
    case 'project-1':
      project = projectDetails[0];
      break;
    case 'project-2':
      project = projectDetails[1];
      break;
    case 'project-3':
      project = projectDetails[2];
  }

  const values = Object.values(project);

  return (
    <header className={styles.container}>
      <span className='paragraphRegular'>CompanyName</span>
      <h1 className='headingBoldLarge'>
        Building an app that makes something easier or whatever
      </h1>
      <p className='paragraphLarge'>
        [description] TheScore Bet and Barstool Sportsbooks are two popular
        sports betting apps with millions of users in Canada and the US.{' '}
      </p>
      <ul className={styles.projectDetails}>
        {titles.map((title, index) => (
          <ProjectDetail
            key={title.heading}
            title={title.heading}
            icon={title.icon}
            text={values[index]}
          />
        ))}
      </ul>
    </header>
  );
};

export default ProjectHeader;