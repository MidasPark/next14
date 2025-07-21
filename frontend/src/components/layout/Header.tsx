import { Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:pl-72">
      <button className="md:hidden p-2 rounded hover:bg-accent focus:outline-none">
        <Menu size={20} />
      </button>
      <div className="flex-1 text-lg font-semibold tracking-tight">대시보드</div>
      <div className="flex items-center gap-4">
        {/* 유저 메뉴, 알림 등 추가 가능 */}
        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center font-bold text-primary">
          U
        </div>
      </div>
    </header>
  );
} 