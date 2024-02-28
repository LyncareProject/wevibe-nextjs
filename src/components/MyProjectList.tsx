'use client';

import { Project } from '@prisma/client';
import { format } from 'date-fns';
import Link from 'next/link';

interface MyProjectListProps {
  projects: Project[];
}
const MyProjectList: React.FC<MyProjectListProps> = ({ projects }) => {
  return (
    <div id="dev"  className=" bg-[url('/img/h_bg.png')]   w-full h-auto  bg-cover bg-center  bg-no-repeat top-0 py-12 lg:px-6 mt-[-152px] mb-[-30px]">
    <div className=' w-[60%] m-auto bg-white min-h-[500px] h-auto pb-8 mb-[60px]  rounded-3xl   shadow-lg drop-shadow-sm '> 
      <div className="flex px-12 max-w-[700px]  mx-auto flex-col gap-4 py-8 mt-[155px]   ">
      <h3 className=' text-center text-2xl my-4 mb-9'> 의뢰한 프로젝트 목록</h3>
      <div className="container flex flex-col gap-8  ">
        {projects  &&
          projects.map((project, index) => (
            <Link className='p-4 block w-full rounded-xl border-2  border-[#EAEAEA] hover:bg-[#EAEAEA]  ' key={index} href={'/myproject/' + project.id}>
              {format(new Date(project.createdAt), 'yyyy년 MM월 dd일')} 의뢰
            </Link>
          ))}
      </div>
    </div>
  </div>
  </div>
  );
};

export default MyProjectList;
