import useProjectPageStore from '@/libs/store/projectPageStore';
import useProjectRequestStore, {
  ProjectRequestState,
} from '@/libs/store/projectRequestStore';
import { cn } from '@/utils/style';
import axios from 'axios';
import { useRouter } from 'next/navigation';
interface StageButtonProps {
  stage: number;
  isNextButtonDisabled: boolean;
}

type NonFunctionProperties<T> = Pick<
  T,
  { [K in keyof T]: T[K] extends Function ? never : K }[keyof T]
>;

type StateWithIndexSignature = {
  [key: string]: any;
};

const selectNonFunctionState = (
  state: ProjectRequestState
): NonFunctionProperties<ProjectRequestState> => {
  const newState: StateWithIndexSignature = {};
  Object.keys(state).forEach((key) => {
    if (typeof state[key as keyof ProjectRequestState] !== 'function') {
      newState[key] = state[key as keyof ProjectRequestState];
    }
  });
  return newState as NonFunctionProperties<ProjectRequestState>;
};

const ProjectStageButtonWrap: React.FC<StageButtonProps> = ({
  stage,
  isNextButtonDisabled,
}) => {
  const router = useRouter();
  const nonFunctionState = useProjectRequestStore(selectNonFunctionState);
  const { decreasePage, increasePage } = useProjectPageStore((state) => ({
    decreasePage: state.decreasePage,
    increasePage: state.increasePage,
  }));
  return (
    <div className="flex justify-between">
      <button
        className={cn(
          'rounded-full px-6 py-2 text-white',
          'bg-blue-500 hover:opacity-70',
          'transition-opacity duration-300 ease-in-out'
        )}
        onClick={() => {
          decreasePage();
          router.push(`/project/${stage - 1}`);
        }}
        disabled={stage === 1}
      >
        이전
      </button>
      {stage === 7 ? (
        <button
          className={cn(
            'rounded-full px-6 py-2 text-white',
            isNextButtonDisabled
              ? 'bg-slate-500'
              : 'bg-blue-500 hover:opacity-70',
            'transition-opacity duration-300 ease-in-out'
          )}
          onClick={async () => {
            await axios.post('/api/project', { nonFunctionState });
          }}
          disabled={isNextButtonDisabled}
          aria-disabled={isNextButtonDisabled}
        >
          완료
        </button>
      ) : (
        <button
          className={cn(
            'rounded-full px-6 py-2 text-white',
            isNextButtonDisabled
              ? 'bg-slate-500'
              : 'bg-blue-500 hover:opacity-70',
            'transition-opacity duration-300 ease-in-out'
          )}
          onClick={() => {
            increasePage();
            router.push(`/project/${stage + 1}`);
          }}
          disabled={isNextButtonDisabled}
          aria-disabled={isNextButtonDisabled}
        >
          다음
        </button>
      )}
    </div>
  );
};
export default ProjectStageButtonWrap;
