import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import Header from "./Header";
import Footer from "./Footer";
import { Loading } from "../component";
import { loadingState } from "../recoil";

const PageLayout = () => {
  const location = useLocation();
  const loading = useRecoilValue(loadingState);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "unset";
  }, [loading]);

  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />

      {loading && <Loading />}

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="dark"
      />
    </>
  );
};

export default PageLayout;
