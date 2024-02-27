'use client';

import { Project } from '@prisma/client';
import { format } from 'date-fns';

interface MyProjectProps {
  project: Project;
}
const MyProject: React.FC<MyProjectProps> = ({ project }) => {
  return (
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
  );
};

export default MyProject;
