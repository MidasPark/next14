import Link from 'next/link';
import { Home, BarChart2, Users, Settings, Sparkles } from 'lucide-react';

const navItems = [
  { href: '/', label: '대시보드', icon: <Home size={18} /> },
  { href: '/analytics', label: '분석', icon: <BarChart2 size={18} /> },
  { href: '/users', label: '사용자', icon: <Users size={18} /> },
  { href: '/settings', label: '설정', icon: <Settings size={18} /> },
  { href: '/tailwind-sample', label: '타일윈드 샘플', icon: <Sparkles size={18} /> },
];

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-64 h-screen bg-card border-r border-border px-4 py-6">
      <div className="mb-8 flex items-center gap-2 px-2">
        <span className="text-xl font-bold tracking-tight">Admin</span>
      </div>
      <nav className="flex-1 flex flex-col gap-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="mt-auto text-xs text-muted-foreground px-2">© 2024 My Admin</div>
    </aside>
  );
} 