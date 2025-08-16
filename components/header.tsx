"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import clsx from "clsx";

const NAV = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // 페이지 이동 시 모바일 메뉴 닫기
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={clsx(
          "fixed inset-x-0 top-0 z-40 transition",
          scrolled
            ? "backdrop-blur bg-white/80 border-b border-black/10"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="h-16 flex items-center justify-between">
            {/* 로고/브랜드명 */}
            <Link
              href="/"
              className="text-[15px] md:text-[16px] font-semibold tracking-wide"
            >
              DAHYE KIM
            </Link>

            {/* 데스크톱 내비 */}
            <nav className="hidden md:flex items-center gap-6 text-[14px]">
              {NAV.map((item) => {
                const active =
                  pathname === item.href ||
                  (item.href !== "/" && pathname?.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="relative py-1"
                  >
                    <span
                      className={clsx(
                        "transition-colors",
                        active ? "text-black" : "text-neutral-600 hover:text-black"
                      )}
                    >
                      {item.label}
                    </span>
                    {/* 밑줄 애니메이션 */}
                    <span
                      className={clsx(
                        "absolute left-0 -bottom-0.5 h-[1px] bg-black transition-all duration-300",
                        active ? "w-full" : "w-0 group-hover:w-full"
                      )}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* 모바일 햄버거 */}
            <button
              className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-xl border border-black/10"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
            >
              <span className="sr-only">Menu</span>
              <div className="w-4 h-[1.5px] bg-black" />
            </button>
          </div>
        </div>
      </header>

      {/* 모바일 오버레이 메뉴 */}
      <div
        className={clsx(
          "fixed inset-0 z-50 md:hidden transition",
          open ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        {/* 배경 */}
        <div
          className={clsx(
            "absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity",
            open ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setOpen(false)}
        />
        {/* 패널 */}
        <div
          className={clsx(
            "absolute right-0 top-0 h-full w-[80%] max-w-[320px] bg-white shadow-xl transition-transform",
            open ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="p-5 flex items-center justify-between h-16 border-b border-black/10">
            <span className="font-semibold">Menu</span>
            <button
              className="w-9 h-9 rounded-xl border border-black/10"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>
          <nav className="p-5 flex flex-col gap-2 text-[16px]">
            {NAV.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== "/" && pathname?.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    "px-3 py-3 rounded-xl",
                    active ? "bg-black text-white" : "hover:bg-neutral-100"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* 헤더 고정 높이 보정용 패딩 */}
      <div className="h-16" />
    </>
  );
}
