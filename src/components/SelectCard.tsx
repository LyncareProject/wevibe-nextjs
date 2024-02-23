import { cn } from '@/utils/style';
import { ReactNode } from 'react';

interface SelectCardProps {
  icon?: ReactNode;
  context: string;
  className?: string;
  onClick: () => void;
}

const SelectCard: React.FC<SelectCardProps> = ({
  icon,
  context,
  className,
  onClick,
}) => {
  return (
    <div
      className={cn(
        'cursor-pointer shadow-lg',
        'rounded-md py-6 px-8 border border-slate-200',
        'flex flex-col items-center justify-center gap-4',
        'hover:opacity-70 ease-in-out transition-opacity',
        className
      )}
      onClick={onClick}
    >
      {icon && <div>{icon}</div>}
      <p className="text-lg font-semibold">{context}</p>
    </div>
  );
};

export default SelectCard;
