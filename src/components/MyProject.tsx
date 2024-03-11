'use client';

import { Project } from '@prisma/client';
import { format } from 'date-fns';
import Image from 'next/image';

interface MyProjectProps {
  project: Project;
}
const MyProject: React.FC<MyProjectProps> = ({ project }) => {
  return (
    <div
      id="dev"
      className=" top-0   mb-[-30px] mt-[-152px]  h-auto w-full  bg-[url('/img/h_bg.png')] bg-cover bg-center bg-no-repeat  py-12 leading-7 md:px-0 lg:px-4"
    >
      <div className=" m-auto mb-[60px] h-auto min-h-[500px] w-[50%] rounded-3xl bg-white  pb-8   shadow-lg drop-shadow-sm md:w-[92%] lg:w-[80%] 2sm:w-[100%] ">
        <div className="mx-auto mt-[155px] flex  max-w-full flex-col gap-4 px-12 py-8  md:px-2 ">
          <h3 className=" my-4 text-center text-2xl font-bold ">
            {project.projectTitle}
          </h3>
          <div className="container flex flex-col gap-5  px-4 ">
            <div className="-mb-3 flex justify-between sm:block">
              <p className=" text-sm text-[#9e9e9e] sm:mb-2 ">
                카테고리 : {project.projectCategory}
              </p>
              <p className="text-right text-sm text-[#9e9e9e] ">
                등록일 {format(new Date(project.createdAt), 'yyyy. MM. dd')}
              </p>
            </div>
            <hr className="mt-2" />

            {/* 카테고리 예산 기간 */}
            <div className="rounded-xl border-2 border-[#e6edf0] p-3  shadow-md ">
              <p className="">
                <Image
                  className="mb-1 mr-2 inline-block  "
                  src="/Icon/icon-korean-won.png"
                  alt="icon-korean-won"
                  width={18}
                  height={30}
                />
                지출 가능 예산 : {project.availableBudget}원
              </p>
              <p>{project.budgetNegotiable}</p>
              <p>
                {' '}
                예상 시작일 :{' '}
                {format(
                  new Date(project.expectedStartDate),
                  'yyyy년 MM월 dd일'
                )}
              </p>
              <p>{project.startDateNegotiable}</p>
              <p>
                {' '}
                <Image
                  className="mb-1 mr-2 inline-block "
                  src="/Icon/icon-clock.png"
                  alt="icon-korean-won"
                  width={18}
                  height={30}
                />
                예상 진행 기간 : {project.expectedDuration}일
              </p>
              <p>{project.durationNegotiable}</p>
            </div>

            {/* <hr className='opacity-70' /> */}

            {/* 모집 마감 + 관련정보 */}
            <div className=" text-base  leading-8  ">
              <div className="flex">
                <p className="w-[150px] text-[#757575]   ">• 모집 마감일 </p>
                <p>
                  {format(
                    new Date(project.applicationDeadline),
                    'yyyy년 MM월 dd일'
                  )}
                </p>
              </div>
              <div className="flex">
                <p className="w-[150px]  text-[#757575]   ">• 진행 분류 </p>
                <p>{project.projectProgressClassification}</p>
              </div>
              <div className="flex">
                <p className="w-[150px]  text-[#757575]   ">• 기획 상태</p>
                <p>{project.planningStatus}</p>
              </div>
              <div className="flex">
                <p className="w-[150px]  text-[#757575]   ">• 프로젝트 경험</p>
                <p>{project.itProjectManagementExperience}</p>
              </div>
              <div className="flex">
                <p className="w-[150px]  text-[#757575]   ">
                  • 협업 인력 구성{' '}
                </p>
                <p>{project.collaborationTeamComposition}</p>
              </div>
              <div className="flex  ">
                <p className="w-[150px]  text-[#757575]   ">• 우선순위 </p>
                <p>
                  {' '}
                  1순위 - {project.projectPriorityFirst}&nbsp;&nbsp;&nbsp; 2순위
                  - {project.projectPrioritySecond}&nbsp;&nbsp;&nbsp; 3순위 -{' '}
                  {project.projectPriorityThird}
                </p>
              </div>
              <div className="flex">
                <p className="text-[#757575]">{project.interestedProducts}</p>
              </div>
            </div>

            <hr />

            {/* 프로젝트 내용 */}
            <h4 className="  text-xl  font-semibold ">프로젝트 내용</h4>
            <div className=" text-base text-[#4f4f4f]">
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
            <h3 className="  text-xl  font-semibold"> 미팅방식</h3>
            <div className="flex flex-wrap justify-between text-base leading-9 text-[#4f4f4f] ">
              <p className=" m-2 min-h-28 w-[46%] rounded-xl border-2 px-6 py-3">
                프로젝트 진행 중 미팅 :<br /> - {project.preMeetingMethod}
              </p>
              <p className=" m-2 min-h-28 w-[46%] rounded-xl border-2 px-6 py-3">
                진행 중 미팅 : <br />- {project.meetingMethod}
              </p>
              <p className=" m-2 min-h-28 w-[46%] rounded-xl border-2 px-6 py-3">
                미팅 주기 : <br /> - {project.meetingFrequency}
              </p>
              <p className=" m-2 min-h-28 w-[46%] rounded-xl border-2 px-6 py-3">
                회사 위치 : <br /> - {project.clientLocationCity}{' '}
                {project.clientLocationDistrict}
              </p>
            </div>
            <hr />

            {/* 모집요건 */}
            <h3 className="  mb-3  text-xl font-semibold"> 모집 요건</h3>
            <h5 className="text-lg ">정부지원사업 여부</h5>
            <div className="mb-3 text-base leading-8 text-[#4f4f4f]">
              <p>지원사업 여부 : {project.isFundingAvailable}</p>
              <p>{project.isFundingAvailableSub}</p>
            </div>
            <h5 className="text-lg">지원자 필수요건</h5>
            <div className="text-base leading-8 text-[#4f4f4f]">
              <p>{project.applicantRequirements}</p>
              <p>{project.applicantRequirementsSub}</p>
              <p>{project.isCollaborationTeamComposition}</p>
              <hr className="my-4 opacity-70" />
              <h5 className="mb-3 text-lg  text-black">사전 검증 질문 :</h5>
              <p> - {project.preliminaryVerificationQuestions}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProject;
