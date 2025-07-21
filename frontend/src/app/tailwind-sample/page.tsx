'use client';
import { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';

export default function TailwindSamplePage() {
  const [switchOn, setSwitchOn] = useState(true);

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-12">
        <h1 className="text-2xl font-bold mb-4">Tailwind CSS 샘플</h1>

        {/* 그리드/칸 나누기 예시 */}
        <section>
          <h2 className="text-lg font-semibold mb-2">그리드/칸 나누기</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="card p-4">1/2</div>
            <div className="card p-4">1/2</div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <div className="card p-4">1/3</div>
            <div className="card p-4">1/3</div>
            <div className="card p-4">1/3</div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <div className="card p-2">1/4</div>
            <div className="card p-2">1/4</div>
            <div className="card p-2">1/4</div>
            <div className="card p-2">1/4</div>
          </div>
        </section>

        {/* 다양한 폼 예시 */}
        <section>
          <h2 className="text-lg font-semibold mb-2">폼 (꽉 찬 폼, 미니멀 폼, 인라인 폼)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 꽉 찬 폼 */}
            <form className="card p-6 space-y-4">
              <div className="text-lg font-bold mb-2">회원가입 (꽉 찬 폼)</div>
              <div>
                <label className="block mb-1 text-sm font-medium">이름</label>
                <input className="input" type="text" placeholder="이름" />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">이메일</label>
                <input className="input" type="email" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">비밀번호</label>
                <input className="input" type="password" placeholder="비밀번호" />
              </div>
              <button className="btn btn-primary w-full">가입하기</button>
            </form>
            {/* 미니멀 폼 */}
            <form className="space-y-2">
              <div className="text-lg font-bold mb-2">미니멀 폼</div>
              <input className="input mb-2" type="text" placeholder="이름" />
              <input className="input mb-2" type="email" placeholder="이메일" />
              <button className="btn btn-primary">확인</button>
            </form>
          </div>
          {/* 인라인 폼 */}
          <form className="flex flex-col sm:flex-row gap-2 mt-4 items-end">
            <input className="input flex-1" type="text" placeholder="검색어 입력" />
            <button className="btn btn-secondary">검색</button>
          </form>
        </section>

        {/* 토글/스위치/체크박스/라디오/셀렉트 */}
        <section>
          <h2 className="text-lg font-semibold mb-2">토글/스위치/체크박스/라디오/셀렉트</h2>
          <div className="flex flex-wrap gap-6 items-center">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-primary w-4 h-4" /> 체크박스
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="radio1" className="accent-primary w-4 h-4" /> 라디오1
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="radio1" className="accent-primary w-4 h-4" /> 라디오2
            </label>
            <select className="input w-40">
              <option>옵션1</option>
              <option>옵션2</option>
            </select>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-primary w-8 h-4 rounded-full" /> 토글(체크박스)
            </label>
            {/* 스위치 토글 */}
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <span>스위치</span>
              <span
                className={`w-10 h-6 flex items-center bg-gray-200 rounded-full p-1 duration-200 ${switchOn ? 'bg-primary/80' : ''}`}
                onClick={() => setSwitchOn((v) => !v)}
              >
                <span
                  className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-200 ${switchOn ? 'translate-x-4' : ''}`}
                />
              </span>
            </label>
            <span className="text-xs text-muted-foreground">{switchOn ? 'ON' : 'OFF'}</span>
          </div>
        </section>

        {/* 테이블/리스트/아바타/프로그레스바 */}
        <section>
          <h2 className="text-lg font-semibold mb-2">테이블/리스트/아바타/프로그레스바</h2>
          <div className="overflow-x-auto">
            <table className="min-w-[400px] w-full text-sm border border-border rounded-lg">
              <thead className="bg-muted">
                <tr>
                  <th className="px-3 py-2 text-left">이름</th>
                  <th className="px-3 py-2 text-left">이메일</th>
                  <th className="px-3 py-2 text-left">상태</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-3 py-2 flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center">A</span>홍길동</td>
                  <td className="px-3 py-2">hong@example.com</td>
                  <td className="px-3 py-2"><span className="inline-block px-2 py-0.5 rounded bg-green-100 text-green-800 text-xs">활성</span></td>
                </tr>
                <tr>
                  <td className="px-3 py-2 flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center">B</span>김철수</td>
                  <td className="px-3 py-2">kim@example.com</td>
                  <td className="px-3 py-2"><span className="inline-block px-2 py-0.5 rounded bg-gray-200 text-gray-700 text-xs">비활성</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">U</span>
            <span className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">G</span>
            <span className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center">S</span>
          </div>
          <div className="mt-4 w-full bg-gray-100 rounded-full h-3">
            <div className="bg-primary h-3 rounded-full" style={{ width: '60%' }} />
          </div>
        </section>

        {/* 탭/모달/로딩 등 (간단 예시) */}
        <section>
          <h2 className="text-lg font-semibold mb-2">탭/로딩/토스트</h2>
          <div className="flex gap-2 mb-2">
            <button className="btn btn-primary">탭1</button>
            <button className="btn btn-outline">탭2</button>
            <button className="btn btn-outline">탭3</button>
          </div>
          <div className="mt-2 animate-pulse bg-gray-200 h-8 w-32 rounded" />
          <div className="mt-2 p-2 bg-black text-white rounded shadow w-fit">토스트/알림 예시</div>
        </section>

        {/* 다양한 알림 메시지 */}
        <section>
          <h2 className="text-lg font-semibold mb-2">알림/경고/메시지</h2>
          <div className="p-3 rounded bg-green-100 text-green-800 mb-2">성공! 작업이 완료되었습니다.</div>
          <div className="p-3 rounded bg-yellow-100 text-yellow-800 mb-2">경고! 주의가 필요합니다.</div>
          <div className="p-3 rounded bg-red-100 text-red-800 mb-2">에러! 문제가 발생했습니다.</div>
          <div className="p-3 rounded bg-blue-100 text-blue-800 mb-2">정보! 참고용 메시지입니다.</div>
          <div className="p-3 rounded bg-gray-100 text-gray-800">일반 메시지/안내</div>
        </section>
      </div>
    </DashboardLayout>
  );
} 