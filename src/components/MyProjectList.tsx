'use client';

import { Project } from '@prisma/client';
import { format } from 'date-fns';
import Link from 'next/link';

interface MyProjectListProps {
  projects: Project[];
}
const MyProjectList: React.FC<MyProjectListProps> = ({ projects }) => {
  return (
    <div className="container flex flex-col gap-8">
      {projects &&
        projects.map((project, index) => (
          <Link key={index} href={'/myproject/' + project.id}>
            {format(new Date(project.createdAt), 'yyyy년 MM월 dd일')} 의뢰
          </Link>
        ))}
    </div>
  );
};

export default MyProjectList;
