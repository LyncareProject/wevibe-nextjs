import ProjectContainer from '@/components/project/ProjectContainer';

export default function Page({ params }: { params: { stage: string } }) {
  const stage = params.stage;
  
  return <ProjectContainer stage={Number(stage)} />;
}
