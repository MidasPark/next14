import DashboardLayout from '@/components/layout/DashboardLayout';
import DashboardCard from '@/components/dashboard/DashboardCard';
import { Users, BarChart2, DollarSign, Activity } from 'lucide-react';
import TrafficLineChart from '@/components/charts/TrafficLineChart';

const stats = [
  {
    icon: <Users size={20} />, title: '총 사용자', value: 1280, subtext: '이번 달 +120'
  },
  {
    icon: <BarChart2 size={20} />, title: '방문 수', value: '24,500', subtext: '이번 주 +2.1%'
  },
  {
    icon: <DollarSign size={20} />, title: '매출', value: '₩3,200,000', subtext: '이번 달 +5.4%'
  },
  {
    icon: <Activity size={20} />, title: '서버 상태', value: '정상', subtext: '모든 서비스 정상'
  },
];

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <DashboardCard key={stat.title} {...stat} />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <section className="card p-6 min-h-[240px] flex flex-col">
          <h2 className="text-lg font-semibold mb-2">트래픽 추이</h2>
          <div className="flex-1 flex items-center justify-center text-muted-foreground">
            <TrafficLineChart />
          </div>
        </section>
        <section className="card p-6 min-h-[240px] flex flex-col">
          <h2 className="text-lg font-semibold mb-2">최근 가입자</h2>
          <ul className="flex-1 flex flex-col gap-2 text-sm">
            <li className="flex justify-between"><span>홍길동</span><span>2024-06-01</span></li>
            <li className="flex justify-between"><span>김철수</span><span>2024-06-02</span></li>
            <li className="flex justify-between"><span>이영희</span><span>2024-06-03</span></li>
            <li className="flex justify-between text-muted-foreground">+ 더보기</li>
          </ul>
        </section>
      </div>
    </DashboardLayout>
  );
} 