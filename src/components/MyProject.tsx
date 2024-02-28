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
      <div className="flex px-12 max-w-[700px]  mx-auto flex-col gap-4 py-8 mt-[155px]   ">
      <h3 className=' text-center text-2xl my-4 '> 의뢰한 프로젝트 내용</h3>
      <hr className='mb-5' />
    <div className="container flex flex-col gap-8">
      <p>{project.projectCategory}</p>
      <p>{project.projectField}</p>
      <p>{project.projectProgressClassification}</p>
      <p>{project.planningStatus}</p>
      <p>{project.detailedPlanningStatus}</p>
      <p>{project.detailedPlanningText}</p>
      <p>{project.referenceMaterials}</p>
      <p>{project.projectTitle}</p>
      <p>{project.detailedTaskDescription}</p>
      <p>{project.relatedTechnologies}</p>
      <p>{project.availableBudget}</p>
      <p>{project.budgetNegotiable}</p>
      <p>{format(new Date(project.expectedStartDate), 'yyyy년 MM월 dd일')}</p>
      <p>{project.startDateNegotiable}</p>
      <p>{project.expectedDuration}</p>
      <p>{project.durationNegotiable}</p>
      <p>{project.preMeetingMethod}</p>
      <p>{project.meetingMethod}</p>
      <p>{project.meetingFrequency}</p>
      <p>{project.clientLocationCity}</p>
      <p>{project.clientLocationDistrict}</p>
      <p>{format(new Date(project.applicationDeadline), 'yyyy년 MM월 dd일')}</p>
      <p>{project.isFundingAvailable}</p>
      <p>{project.isFundingAvailableSub}</p>
      <p>{project.applicantRequirements}</p>
      <p>{project.applicantRequirementsSub}</p>
      <p>{project.preliminaryVerificationQuestions}</p>
      <p>{project.collaborationTeamComposition}</p>
      <p>{project.isCollaborationTeamComposition}</p>
      <p>{project.itProjectManagementExperience}</p>
      <p>{project.futurePlans}</p>
      <p>{project.projectPriorityFirst}</p>
      <p>{project.projectPrioritySecond}</p>
      <p>{project.projectPriorityThird}</p>
      <p>{project.interestedProducts}</p>
      <p>{format(new Date(project.createdAt), 'yyyy년 MM월 dd일')}</p>
    </div>
    </div>
  </div>
  </div>
  );
};

export default MyProject;
