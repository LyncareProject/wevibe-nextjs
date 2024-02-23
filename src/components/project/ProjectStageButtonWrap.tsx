import useProjectPageStore from '@/libs/store/projectPageStore';
import { cn } from '@/utils/style';
import { useRouter } from 'next/navigation';

interface StageButtonProps {
  stage: number;
  isNextButtonDisabled: boolean;
}
const ProjectStageButtonWrap: React.FC<StageButtonProps> = ({
  stage,
  isNextButtonDisabled,
}) => {
  const router = useRouter();
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
    </div>
  );
};
export default ProjectStageButtonWrap;
