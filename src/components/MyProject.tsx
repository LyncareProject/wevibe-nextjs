'use client';

import { Project } from '@prisma/client';
import { format } from 'date-fns';
import Image from 'next/image';

interface MyProjectProps {
  project: Project;
}
const MyProject: React.FC<MyProjectProps> = ({ project }) => {
  return (
    <div id="dev"  className=" bg-[url('/img/h_bg.png')]   w-full h-auto  bg-cover bg-center  bg-no-repeat top-0 py-12 leading-7  lg:px-4 mt-[-152px] mb-[-30px] md:px-0">
    <div className=' w-[60%] m-auto bg-white min-h-[500px] h-auto pb-8 mb-[60px]  rounded-3xl   shadow-lg drop-shadow-sm lg:w-[80%] md:w-[92%] 2sm:w-[100%] '> 
      <div className="flex px-12 max-w-full  mx-auto flex-col gap-4 py-8 mt-[155px]  md:px-2 ">
      <h3 className=' text-center text-2xl my-4 font-bold '>{project.projectTitle}</h3>
    <div className="container flex flex-col gap-5  px-4 ">
      <div className='flex -mb-3 justify-between sm:block'>
      <p className=' text-[#9e9e9e] text-sm sm:mb-2 '>카테고리 : {project.projectCategory}</p>
      <p className='text-right text-[#9e9e9e] text-sm '>등록일  {format(new Date(project.createdAt), 'yyyy. MM. dd')}</p>
      </div>
      <hr className='mt-2' />

      {/* 카테고리 예산 기간 */}
      <div className='border-2 p-3 border-[#e6edf0] rounded-xl  shadow-md '>
        <p className=''>
          <Image  className='inline-block mr-2 mb-1  '
           src="/Icon/icon-korean-won.png"
           alt="icon-korean-won"
           width={18}
           height={30}
          />
          지출 가능 예산 : {project.availableBudget}원</p>
        <p>{project.budgetNegotiable}</p>
        <p> 예상 시작일 :  {format(new Date(project.expectedStartDate), 'yyyy년 MM월 dd일')}</p>
        <p>{project.startDateNegotiable}</p>
        <p> <Image  className='inline-block mr-2 mb-1 '
           src="/Icon/icon-clock.png"
           alt="icon-korean-won"
           width={18}
           height={30}
          />
          예상 진행 기간 : {project.expectedDuration}</p>
        <p>{project.durationNegotiable}</p>
      </div>   


      {/* <hr className='opacity-70' /> */}
      
      {/* 모집 마감 + 관련정보 */}
      <div className=' text-base  leading-8  '>
        <div className='flex'>
          <p className='text-[#757575] w-[150px]   '>• 모집 마감일  </p>
          <p >{format(new Date(project.applicationDeadline), 'yyyy년 MM월 dd일')}</p>
        </div>
        <div className='flex'>
        <p className='text-[#757575]  w-[150px]   '>• 진행 분류 </p>
          <p>{project.projectProgressClassification}</p>
        </div>
        <div className='flex'>
        <p className='text-[#757575]  w-[150px]   '>• 기획 상태</p>
          <p>{project.planningStatus}</p>
        </div>
        <div className='flex'>
        <p className='text-[#757575]  w-[150px]   '>• 프로젝트 경험</p>
          <p>{project.itProjectManagementExperience}</p>
        </div>
        <div className='flex'>
          <p className='text-[#757575]  w-[150px]   '>• 협업 인력 구성 </p>
          <p>{project.collaborationTeamComposition}</p>
        </div>
        <div className='flex  '>
          <p className='text-[#757575]  w-[150px]   '>• 우선순위 </p>
          <p> 1순위 - {project.projectPriorityFirst}&nbsp;&nbsp;&nbsp; 2순위 - {project.projectPrioritySecond}&nbsp;&nbsp;&nbsp; 3순위 - {project.projectPriorityThird}</p>
        </div>
        <div className='flex'>
          <p className='text-[#757575]'>{project.interestedProducts}</p>
        </div>
      </div>     

    <hr />

    {/* 프로젝트 내용 */}
    <h4 className='  text-xl  font-semibold '>프로젝트 내용</h4>
     <div className=' text-base text-[#4f4f4f]'>
      <p>프로젝트 분야 : {project.projectField}</p>
      <br />
      <p>상세 기획 상태 : {project.detailedPlanningStatus}</p>
      <br />
      <p>기획문서 : {project.detailedPlanningText}</p>
      <br />
      <p>프로젝트 관련 기술 : {project.relatedTechnologies}</p>
      <br />
      <p>상세 업무 내용 : {project.detailedTaskDescription}</p>
      <br />
      <p>참고 자료 : {project.referenceMaterials}</p>
      <br />
      <p>향후 계획 : {project.futurePlans}</p>
    </div> 
      <hr />
  
     {/* 미팅 */}
      <h3 className='  text-xl  font-semibold'> 미팅방식</h3>
      <div className='flex justify-between flex-wrap text-base text-[#4f4f4f] leading-9 '>
      <p className=' border-2 rounded-xl px-6 py-3 m-2 w-[46%] min-h-28'>프로젝트 진행 중 미팅 :<br /> - {project.preMeetingMethod}</p>
      <p className=' border-2 rounded-xl px-6 py-3 m-2 w-[46%] min-h-28'>진행 중 미팅 : <br />- {project.meetingMethod}</p>
      <p className=' border-2 rounded-xl px-6 py-3 m-2 w-[46%] min-h-28'>미팅 주기 : <br /> - {project.meetingFrequency}</p>
      <p className=' border-2 rounded-xl px-6 py-3 m-2 w-[46%] min-h-28'>회사 위치 : <br /> - {project.clientLocationCity} {project.clientLocationDistrict}</p>
      </div>
      <hr />

      {/* 모집요건 */}
      <h3 className='  text-xl  font-semibold mb-3'> 모집 요건</h3>
      <h5 className='text-lg '>정부지원사업 여부</h5>
      <div className='text-base text-[#4f4f4f] leading-8 mb-3'>
        <p>지원사업 여부 : {project.isFundingAvailable}</p>
        <p>{project.isFundingAvailableSub}</p>
      </div>
      <h5 className='text-lg'>지원자 필수요건</h5>
      <div className='text-base text-[#4f4f4f] leading-8'>
        <p>{project.applicantRequirements}</p>
        <p>{project.applicantRequirementsSub}</p>
        <p>{project.isCollaborationTeamComposition}</p>
        <hr className='opacity-70 my-4' /> 
        <h5 className='text-lg text-black  mb-3'>사전 검증 질문 :</h5>
        <p > - {project.preliminaryVerificationQuestions}</p>
      </div>
      
    </div>
    </div>
  </div>
  </div>
  );
};

export default MyProject;