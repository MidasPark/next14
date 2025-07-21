import { ReactNode } from 'react';

interface DashboardCardProps {
  icon: ReactNode;
  title: string;
  value: string | number;
  subtext?: string;
}

export default function DashboardCard({ icon, title, value, subtext }: DashboardCardProps) {
  return (
    <div className="card p-4 flex flex-col gap-2 min-w-[180px]">
      <div className="flex items-center gap-2 text-muted-foreground">
        {icon}
        <span className="text-sm font-medium">{title}</span>
      </div>
      <div className="text-2xl font-bold text-primary">{value}</div>
      {subtext && <div className="text-xs text-muted-foreground">{subtext}</div>}
    </div>
  );
} 