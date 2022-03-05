import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useMe from "Hook/useMe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const HomeLayout: React.FC = () => {
  useMe();
  return (
    <>
      <Helmet>
        <title>Nuber | Home</title>
      </Helmet>
      <Header />
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="h-full w-full flex flex-col">
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomeLayout;

const Header = () => (
  <header className="h-14 sm:h-24 w-full px-5 sm:px-10 border-b-2 border-gray-200 flex items-center justify-between bg-white">
    <div className="flex items-center flex-1">
      <div className="h-8 w-8 sm:h-12 sm:w-12 bg-gray-200">menu</div>
      <Link to="/" className="mx-5 sm:mx-10">
        <img
          alt="Uber Eats Home"
          src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/8b969d35d373b512664b78f912f19abc.svg"
          className="h-5 w-24 sm:h-6 sm:w-36"
        />
      </Link>
      <div className="h-8 w-8 sm:h-12 sm:w-12 flex-1 bg-gray-200">search</div>
    </div>
    <div className="pl-5 sm:pl-10 flex items-center">
      <Link
        to="/profile"
        className="h-8 w-8 sm:h-12 sm:w-12 bg-gray-200 rounded-full flex items-center justify-center"
      >
        <FontAwesomeIcon icon={faUser} className="text-xl" />
      </Link>
    </div>
  </header>
);

const Footer = () => (
  <footer className="flex flex-col items-center text-center">
    <div className="py-5">
      <a className="px-1 text-gray-700 cursor-pointer">개인정보 보호정책</a>|
      <a className="px-1 text-gray-700 cursor-pointer">이용 약관</a>
    </div>
    <div className="pb-5">
      <span className="text-xs">
        이 사이트는 reCAPTCHA 및 Google 개인정보 보호정책에 의해 보호되며 서비스
        약관이 적용됩니다.
      </span>
    </div>
  </footer>
);
