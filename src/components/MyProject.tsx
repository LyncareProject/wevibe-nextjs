'use client';

import { Project } from '@prisma/client';
import { format } from 'date-fns';

interface MyProjectProps {
  project: Project;
}
const MyProject: React.FC<MyProjectProps> = ({ project }) => {
  return (
    <div id="dev"  className=" bg-[url('/img/h_bg.png')]   w-full h-auto  bg-cover bg-center  bg-no-repeat top-0 py-12 lg:px-6 mt-[-152px] mb-[-30px]">
    <div className=' w-[60%] m-auto bg-white min-h-[500px] h-auto pb-8 mb-[60px]  rounded-3xl   shadow-lg drop-shadow-sm '> 
      <div className="flex px-12 max-w-full  mx-auto flex-col gap-4 py-8 mt-[155px]   ">
      <h3 className=' text-center text-2xl my-4 font-bold '>의뢰한 프로젝트 내용</h3>
      <hr className='mb-5' />
    <div className="container flex flex-col gap-8">
     <h3 className='  text-xl  font-semibold list-disc'> • 프로젝트 카테고리</h3>
      <p>카테고리 : {project.projectCategory}</p>
      <p>프로젝트 분야 : {project.projectField}</p>
      <p>진행 분류 : {project.projectProgressClassification}</p>
      <p>기획 상태 : {project.planningStatus}</p>
      <p>상세 기획 상태 : {project.detailedPlanningStatus}</p>
      <p>기획문서 : {project.detailedPlanningText}</p>
      <p>참고 자료 : {project.referenceMaterials}</p>
      <hr />
     <h3 className='  text-xl  font-semibold'> • 프로젝트 상세 및 에산</h3>
      <p>프로젝트 제목 : {project.projectTitle}</p>
      <p>상세 업무 내용 : {project.detailedTaskDescription}</p>
      <p>프로젝트 관련 기술 : {project.relatedTechnologies}</p>
      <hr />
     <h3 className='  text-xl  font-semibold'> • 프로젝트 미팅 및 기간</h3>
      <p>지출 가능 예산 : {project.availableBudget}</p>
      <p>{project.budgetNegotiable}</p>
      <p>예상 시작일 :  {format(new Date(project.expectedStartDate), 'yyyy년 MM월 dd일')}</p>
      <p>{project.startDateNegotiable}</p>
      <p>예상 진행 기간 : {project.expectedDuration}</p>
      <p>{project.durationNegotiable}</p>
      <p>프로젝트 진행 중 미팅 : {project.preMeetingMethod}</p>
      <p>진행 중 미팅 : {project.meetingMethod}</p>
      <p>미팅 주기 : {project.meetingFrequency}</p>
      <p>클라이언트 위치 : {project.clientLocationCity} {project.clientLocationDistrict}</p>
      {/* <p></p> */}
      <hr />
      <h3 className='  text-xl  font-semibold'> • 모집 요건</h3>
      <p>지원자 모집 마감일 : {format(new Date(project.applicationDeadline), 'yyyy년 MM월 dd일')}</p>
      <p>지원사업 여부 : {project.isFundingAvailable}</p>
      <p>{project.isFundingAvailableSub}</p>
      <p>지원자 필수 요건 : {project.applicantRequirements}</p>
      <p>{project.applicantRequirementsSub}</p>
      <p>사전 검증 질문 : {project.preliminaryVerificationQuestions}</p>
      <p>협업 인력 구성 : {project.collaborationTeamComposition}</p>
      <p>{project.isCollaborationTeamComposition}</p>
      <hr />
     <h3 className='  text-xl  font-semibold'> • 추가 정보</h3>
      <p>IT 프로젝트 관리 경험  : {project.itProjectManagementExperience}</p>
      <p>향후 계획 : {project.futurePlans}</p>
      <p>프로젝트 우선순위 :
       1.{project.projectPriorityFirst} <span>  </span>
       2.{project.projectPrioritySecond} <span>  </span>
       3.{project.projectPriorityThird} </p>
      <p>{project.interestedProducts}</p>
      <p>등록날짜 : {format(new Date(project.createdAt), 'yyyy년 MM월 dd일')}</p>
    </div>
    </div>
  </div>
  </div>
  );
};

export default MyProject;
