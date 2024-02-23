import Project from '@/components/project/Project';

export default function Page({ params }: { params: { stage: string } }) {
  const stage = params.stage;
  return (
    <div className="container w-full max-w-[600px] py-20">
      <Project stage={Number(stage)} />
    </div>
  );
}