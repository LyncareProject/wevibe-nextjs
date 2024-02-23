import useProjectRequestStore from '@/libs/store/projectRequestStore';
import type { MultiValue } from 'react-select';
import ReactSelect from 'react-select/creatable';
import ProjectInput from '../ProjectInput';
import OptionSubtitle from './OptionSubtitle';
import OptionTitle from './OptionTitle';
import ProjectStageButtonWrap from './ProjectStageButtonWrap';
interface ProjectStage03Props {
  stage: number;
}
const ProjectStage03: React.FC<ProjectStage03Props> = ({ stage }) => {
  const {
    projectTitle,
    detailedTaskDescription,
    relatedTechnologies,

    updateState,
    toggleArrayItem,
  } = useProjectRequestStore((state) => ({
    projectTitle: state.projectTitle,
    detailedTaskDescription: state.detailedTaskDescription,
    relatedTechnologies: state.relatedTechnologies,

    updateState: state.updateState,
    toggleArrayItem: state.toggleArrayItem,
  }));

  console.log(relatedTechnologies);
  const isNextButtonDisabled = false;

  return (
    <div className="flex w-full flex-col gap-12 overflow-y-auto px-16 py-10">
      <ProjectInput
        title={'프로젝트 제목'}
        necessary={true}
        placeholder={'예) 위바이브 홈페이지 기획 및 구축'}
        desc={
          '프로젝트를 잘 표현하는 제목을 작성해 주세요. 나중에 변경할 수 있으니 부담 갖지 마세요.'
        }
        value={projectTitle}
        onChange={(text) => {
          updateState('projectTitle', text);
        }}
      />
      <ProjectInput
        title={'상세 업무 내용'}
        necessary={true}
        textarea={
          '<프로젝트의 현재 상황>\n예시) 프로젝트 목적, 타겟 고객, 진행 계획 등\n\n<상세한 업무 내용>\n예시) 상품의 용도, 작업 분량, 필요한 조건 등\n\n<참고자료 / 유의사항>\n예시) 참고 제품 등'
        }
        desc={'5,000자 이내로 작성해주세요.'}
        value={detailedTaskDescription}
        onChange={(text) => {
          updateState('detailedTaskDescription', text);
        }}
      />
      <div className="flex w-full flex-col gap-4">
        <OptionTitle title={'관련 기술'} necessary={true} />
        <OptionSubtitle
          subtitle={
            '파트너가 전문 기술로 프로젝트를 찾고 지원할 수 있도록 프로젝트와 관련된 기술을 입력해주세요.'
          }
        />
        <ReactSelect
          options={[].map((tag) => ({
            label: tag,
            value: tag,
          }))}
          placeholder="관련 기술"
          instanceId="tech"
          value={relatedTechnologies.map((tag) => ({
            label: tag,
            value: tag,
          }))}
          onChange={(
            selectedOptions: MultiValue<{ label: string; value: string }>
          ) => {
            const techs = selectedOptions.map((tag) => tag.value);
            updateState('relatedTechnologies', techs);
          }}
          isMulti
        />
      </div>

      <ProjectStageButtonWrap
        stage={stage}
        isNextButtonDisabled={isNextButtonDisabled}
      />
    </div>
  );
};
export default ProjectStage03;
