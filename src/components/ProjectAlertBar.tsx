'use client';

import useProjectPageStore from '@/libs/store/projectPageStore';
import useProjectRequestStore from '@/libs/store/projectRequestStore';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const ProjectAlertBar = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const { pageNumber, resetPage } = useProjectPageStore((state) => ({
    pageNumber: state.pageNumber,
    resetPage: state.resetPage,
  }));
  const { projectCategory, resetStore } = useProjectRequestStore((state) => ({
    projectCategory: state.projectCategory,
    resetStore: state.resetStore,
  }));
  if (session && (pageNumber !== 1 || projectCategory.length !== 0))
    return (
      <div
        onClick={async () => {
          const confirmLeave = window.confirm(
            '이전에 입력한 데이터를 불러오시겠습니까?'
          );
          if (!confirmLeave) {
            resetPage();
            resetStore();
          } else {
            await router.push(`/project/${pageNumber}`);
          }
        }}
        className="flex w-full cursor-pointer items-center justify-center bg-red-500 py-4"
      >
        <p className="text-lg font-semibold text-white">
          작성하시던 프로젝트 의뢰가 있습니다.
        </p>
      </div>
    );

  return null;
};

export default ProjectAlertBar;
