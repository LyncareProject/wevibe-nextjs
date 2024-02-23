'use client';

import useProjectPageStore from '@/libs/store/projectPageStore';
import useProjectRequestStore from '@/libs/store/projectRequestStore';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import ProjectStage01 from './ProjectStage01';
import ProjectStage02 from './ProjectStage02';
import ProjectStage03 from './ProjectStage03';
import ProjectStage04 from './ProjectStage04';
import ProjectStage05 from './ProjectStage05';
import ProjectStage06 from './ProjectStage06';
import ProjectStage07 from './ProjectStage07';

interface ProjectProps {
  stage: number;
}

const Project: React.FC<ProjectProps> = ({ stage }) => {
  const router = useRouter();
  const { pageNumber, resetPage } = useProjectPageStore((state) => ({
    pageNumber: state.pageNumber,
    resetPage: state.resetPage,
  }));
  const resetStore = useProjectRequestStore((state) => state.resetStore);

  console.log('pageNumber : ', pageNumber);
  const checkData = () => {
    if (pageNumber != 1) {
      const confirmLeave = window.confirm(
        '이전에 입력한 데이터를 불러오시겠습니까?'
      );
      if (!confirmLeave) {
        resetPage();
        resetStore();
      } else {
        router.push(`/project/${pageNumber}`);
      }
    }
  };

  useEffect(() => {

  }, []);

  if (stage === 1) return <ProjectStage01 stage={stage} />;
  if (stage === 2) return <ProjectStage02 stage={stage} />;
  if (stage === 3) return <ProjectStage03 stage={stage} />;
  if (stage === 4) return <ProjectStage04 stage={stage} />;
  if (stage === 5) return <ProjectStage05 stage={stage} />;
  if (stage === 6) return <ProjectStage06 stage={stage} />;
  if (stage === 7) return <ProjectStage07 stage={stage} />;

  return <div>{JSON.stringify(pageNumber)}</div>;
};

export default Project;
