import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import styles from "../style";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsNavOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#333] h-16 border-b border-b-[#f0f0f0]">
      <div className={`relative h-full ${styles.container}`}>
        <div className="relative z-10 h-full py-2 flex justify-between items-center bg-[#333]">
          <Link to="/" className="font-Mansalva text-2xl cursor-pointer">
            Salvador Puppy
          </Link>

          <button
            onClick={() => setIsNavOpen((prev) => !prev)}
            className="text-2xl cursor-pointer"
          >
            {isNavOpen ? "❌" : "🦴"}
          </button>
        </div>

        <nav
          className={`absolute top-16 sm:right-10 right-4 transition-all shadow-sm bg-[rgba(0,0,0,0.9)] ${
            isNavOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }`}
        >
          <ul className="pt-6 pb-2 flex flex-col gap-2 text-xl">
            <li
              className={`mx-8 pb-2 inline-block w-fit ${
                pathname === "/" ? "border-b border-b-white" : ""
              }`}
            >
              <NavLink to="/">살바도르 퍼피</NavLink>
            </li>

            <li
              className={`mx-8 py-3 inline-block w-fit ${
                pathname === "/reviews" ? "border-b border-b-white" : ""
              }`}
            >
              <NavLink to="/reviews">리뷰</NavLink>
            </li>

            <li
              className={`mx-8 py-3 inline-block w-fit ${
                pathname === "/feedback" ? "border-b border-b-white" : ""
              }`}
            >
              <NavLink to="/feedback">피드백</NavLink>
            </li>

            <li
              className={`mx-8 py-3 inline-block w-fit ${
                pathname === "/donate" ? "border-b border-b-white" : ""
              }`}
            >
              <NavLink to="/donate">후원</NavLink>
            </li>

            <li className="px-8 py-3 bg-[#ddd] text-[#000]">
              {pathname === "/adopt" ? (
                <span className="cursor-default">입양하기</span>
              ) : (
                <NavLink to="/adopt">입양하기</NavLink>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
