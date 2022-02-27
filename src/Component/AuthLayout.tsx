import React from "react";
import { Outlet } from "react-router-dom";

export default function AuthLayout(): JSX.Element {
  return (
    <>
      <header className="h-12 sm:h-20 w-full bg-black"></header>
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="h-full sm:h-auto w-full flex flex-col px-4 sm:px-9 sm:pt-6 sm:max-w-md">
          <Outlet />
          <footer className="flex flex-col items-center text-center">
            <div className="py-5">
              <a className="px-1 text-gray-700 cursor-pointer">
                개인정보 보호정책
              </a>
              |<a className="px-1 text-gray-700 cursor-pointer">이용 약관</a>
            </div>
            <div className="pb-5">
              <span className="text-xs">
                이 사이트는 reCAPTCHA 및 Google 개인정보 보호정책에 의해
                보호되며 서비스 약관이 적용됩니다.
              </span>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
