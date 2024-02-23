"use client"

import { cn } from '@/utils/style';
import Project from './Project';
import ProjectChat from './ProjectChat';
import ProjectSidebar from './ProjectSidebar';

interface ProjectContainerProps {
  stage: number;
}

const ProjectContainer: React.FC<ProjectContainerProps> = ({ stage }) => {
  return (
    <div className={cn('h-screen w-full overflow-hidden bg-white', 'fixed left-0 top-0 z-50', 'flex')}>
      <ProjectSidebar stage={stage} />
      <Project stage={stage} />
      <ProjectChat />
    </div>
  );
};
export default ProjectContainer;
