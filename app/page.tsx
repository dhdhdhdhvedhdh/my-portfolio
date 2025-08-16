export default function Page() {
  return (
    <main className="min-h-screen px-6 py-16 sm:px-10">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-5xl sm:text-7xl font-bold leading-[1.1] tracking-tight">
          김다혜 포트폴리오
        </h1>
        <p className="mt-5 text-lg sm:text-xl text-neutral-600">
          패키지 디자인 · 브랜딩 · 웹 경험 디자인을 만든다.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a
            href="/work"
            className="px-5 py-3 rounded-2xl bg-black text-white text-sm sm:text-base w-full sm:w-auto text-center"
          >
            포트폴리오 보기
          </a>
          <a
            href="/contact"
            className="px-5 py-3 rounded-2xl border text-sm sm:text-base w-full sm:w-auto text-center"
          >
            문의하기
          </a>
        </div>
      </section>

      <section className="max-w-6xl mx-auto mt-16">
        <h2 className="text-2xl sm:text-3xl font-semibold">하이라이트 작업</h2>
        <p className="mt-2 text-neutral-600 text-sm">
          대표 작업 3–6개를 먼저 노출한다.
        </p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="border rounded-2xl p-5">
            <div className="text-sm text-neutral-500">Package · 2025</div>
            <div className="mt-1 font-semibold">VERAMORE Package Refresh</div>
            <p className="mt-2 text-sm text-neutral-600">
              구조/질감/후가공으로 첫인상 강화.
            </p>
          </div>
          <div className="border rounded-2xl p-5">
            <div className="text-sm text-neutral-500">Branding · 2024</div>
            <div className="mt-1 font-semibold">Beauty Brand Identity</div>
            <p className="mt-2 text-sm text-neutral-600">
              로고/가이드/톤앤매너 정립.
            </p>
          </div>
          <div className="border rounded-2xl p-5">
            <div className="text-sm text-neutral-500">Web · 2024</div>
            <div className="mt-1 font-semibold">E-commerce Detail Page</div>
            <p className="mt-2 text-sm text-neutral-600">
              전환 중심 설계의 상세페이지.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
