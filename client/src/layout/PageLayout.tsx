import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { Helmet } from "react-helmet";

import Header from "./Header";
import Footer from "./Footer";
import Loading from "../component/Loading";
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
      <Helmet>
        <meta property="title" content="살바도르 퍼피 (Salvador Puppy)" />
        <meta
          property="description"
          content="살바도르 퍼피는 '유행성 반려견 결핍' 이슈 해결을 목표로 하는 비영리 단체이며, 각자의 취향에 맞는 사이버 반려견을 생성해주는 서비스를 제공합니다."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://salvador-puppy.web.app/" />
        <meta property="og:title" content="살바도르 퍼피 (Salvador Puppy)" />
        <meta property="og:image" content="/emoji-bone.png" />
        <meta
          property="og:description"
          content="살바도르 퍼피는 '유행성 반려견 결핍' 이슈 해결을 목표로 하는 비영리 단체이며, 각자의 취향에 맞는 사이버 반려견을 생성해주는 서비스를 제공합니다."
        />
        <meta
          property="og:site_name"
          content="살바도르 퍼피 (Salvador Puppy)"
        />
        <meta property="og:locale" content="ko_KR" />
      </Helmet>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />

      {loading && <Loading />}
    </>
  );
};

export default PageLayout;
