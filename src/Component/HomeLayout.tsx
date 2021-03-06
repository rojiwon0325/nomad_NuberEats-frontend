import React, { useCallback } from "react";
import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useLazyQuery } from "@apollo/client";
import { ISLOGIN_QUERY, LOGOUT_QUERY } from "Apollo/Query/user";

const HomeLayout: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-between">
      <div className="w-full flex flex-col items-center">
        <Header />
        <div className="w-full flex-center flex-col">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;

const Header: React.FC = () => {
  const [logoutFn] = useLazyQuery(LOGOUT_QUERY);
  const [isLoginFn] = useLazyQuery(ISLOGIN_QUERY);
  const logout = useCallback(async () => {
    await logoutFn();
    await isLoginFn();
  }, []);
  return (
    <header className="h-14 sm:h-24 w-full px-5 sm:px-10 border-b-2 border-gray-200 flex items-center justify-between bg-white">
      <div className="flex items-center flex-1">
        <div className="h-8 w-8 sm:h-12 sm:w-12 mr-5 sm:mr-10 bg-gray-200">
          menu
        </div>
        <Link to="/" className="mr-5 sm:mr-10 hidden sm:block">
          <img
            alt="Uber Eats Home"
            src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/8b969d35d373b512664b78f912f19abc.svg"
            className="h-5 w-24 sm:h-6 sm:w-36"
          />
        </Link>
        <div className="h-8 w-8 sm:h-12 sm:w-12 flex-1 bg-gray-200">search</div>
      </div>
      <div className="pl-5 sm:pl-10 flex items-center">
        <button
          onClick={() => logout()}
          className="h-8 w-8 sm:h-12 sm:w-12 bg-gray-200 rounded-full flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faUser} className="text-xl" />
        </button>
      </div>
    </header>
  );
};

const Footer = () => (
  <footer className="flex-center flex-col">
    <div className="py-5">
      <a className="px-1 text-gray-700 cursor-pointer">???????????? ????????????</a>|
      <a className="px-1 text-gray-700 cursor-pointer">?????? ??????</a>
    </div>
    <div className="pb-5">
      <span className="text-xs">
        ??? ???????????? reCAPTCHA ??? Google ???????????? ??????????????? ?????? ???????????? ?????????
        ????????? ???????????????.
      </span>
    </div>
  </footer>
);
