import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          풀스택 프로젝트에 오신 것을 환영합니다
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Express API + Next.js 14로 구축된 현대적인 웹 애플리케이션
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">🚀 백엔드 API</h3>
              <p className="card-description">
                Express.js + TypeScript + Prisma ORM
              </p>
            </div>
            <div className="card-content">
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• RESTful API 설계</li>
                <li>• JWT 인증 시스템</li>
                <li>• Redis 캐싱</li>
                <li>• Swagger 문서화</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h3 className="card-title">⚛️ 프론트엔드</h3>
              <p className="card-description">
                Next.js 14 + React 18 + TypeScript
              </p>
            </div>
            <div className="card-content">
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• App Router 구조</li>
                <li>• Tailwind CSS 스타일링</li>
                <li>• Zustand 상태 관리</li>
                <li>• React Query 데이터 페칭</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h3 className="card-title">🛠️ 개발 도구</h3>
              <p className="card-description">
                현대적인 개발 환경
              </p>
            </div>
            <div className="card-content">
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• TypeScript 엄격 모드</li>
                <li>• ESLint + Prettier</li>
                <li>• Jest 테스트</li>
                <li>• Docker 컨테이너화</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 space-x-4">
          <Link 
            href="/dashboard" 
            className="btn btn-primary"
          >
            대시보드 보기
          </Link>
          <Link 
            href="/auth/login" 
            className="btn btn-outline"
          >
            로그인
          </Link>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          <p>API 문서: <a href="http://localhost:3001/api-docs" className="text-blue-600 hover:underline">http://localhost:3001/api-docs</a></p>
          <p>헬스 체크: <a href="http://localhost:3001/health" className="text-blue-600 hover:underline">http://localhost:3001/health</a></p>
        </div>
      </div>
    </div>
  );
} 