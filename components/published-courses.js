import { useCallback } from "react";
import { useRouter } from "next/router";
import MainHeader from "./main-header";
import RecCard1 from "./rec-card1";
import Footer from "./footer";
import PropTypes from "prop-types";

const PublishedCourses = ({ className = "" }) => {
  const router = useRouter();

  const onCoursePlanetClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onYourHomepageClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onCreateBtnClick = useCallback(() => {
    router.push("/create-page");
  }, [router]);

  const onLoginBtnClick = useCallback(() => {
    router.push("/loginpage");
  }, [router]);

  const onRecCard1Click = useCallback(() => {
    router.push("/teachers-hub");
  }, [router]);

  const onRecCard2Click = useCallback(() => {
    router.push("/teachers-hub");
  }, [router]);

  const onRecCard3Click = useCallback(() => {
    router.push("/teachers-hub");
  }, [router]);

  return (
    <div
      className={`w-[1439px] bg-shades-white max-w-full flex flex-col items-start justify-start gap-[3px] text-left text-5xl text-black font-inter ${className}`}
    >
      <MainHeader
        yourHomepageGap="27px"
        onCoursePlanetClick={onCoursePlanetClick}
        onYourHomepageClick={onYourHomepageClick}
        onCreateBtnClick={onCreateBtnClick}
        onLoginBtnClick={onLoginBtnClick}
      />
      <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[88px]">
        <div className="self-stretch flex flex-col items-start justify-start py-2.5 px-[62px] gap-[10px]">
          <div className="flex flex-row items-start justify-start">
            <div className="relative leading-[220.52%] font-semibold">
              My Published Courses
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-center">
            <div className="self-stretch grid flex-row items-center justify-start gap-[20px] grid-cols-[repeat(auto-fit,_minmax(240px,1fr))]">
              <RecCard1
                unsplash5MV818tzxeo="/unsplash5mv818tzxeo9@2x.png"
                devOps="DevOps"
                devOpsIsAMethodologyInThe="DevOps is a methodology in the softwa..."
                onRecCard1Click={onRecCard1Click}
              />
              <RecCard1
                unsplash5MV818tzxeo="/unsplash5mv818tzxeo10@2x.png"
                devOps="Software Testing"
                devOpsIsAMethodologyInThe="Software testing is the act of exa..."
                propBoxShadow="0px 0px 26px rgba(0, 0, 0, 0.08)"
                propFilter="unset"
                propBackgroundColor="unset"
                onRecCard1Click={onRecCard2Click}
              />
              <RecCard1
                unsplash5MV818tzxeo="/unsplash5mv818tzxeo11@2x.png"
                devOps="Technical Writing"
                devOpsIsAMethodologyInThe="Technical writing is writing or drafting..."
                propBoxShadow="unset"
                propFilter="drop-shadow(0px 0px 26px rgba(0, 0, 0, 0.08))"
                propBackgroundColor="unset"
                onRecCard1Click={onRecCard3Click}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[88px] text-center text-13xl">
        <div className="w-[1211px] flex flex-col items-center justify-center p-2.5 box-border gap-[10px] max-w-[90%]">
          <div className="w-[61px] h-[61px] flex flex-row items-start justify-start">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
              alt=""
              src="/materialsymbolsmagicbutton.svg"
            />
          </div>
          <div className="self-stretch flex flex-row items-center justify-center">
            <div className="flex-1 relative tracking-[0.02em] font-semibold">{`Let’s get started! `}</div>
          </div>
          <button className="cursor-pointer [border:none] py-3 px-px bg-black w-[303px] rounded-3xs flex flex-row items-center justify-center box-border max-w-[90%]">
            <div className="relative text-5xl tracking-[0.02em] font-semibold font-inter text-shades-white text-center">{`Add your first course `}</div>
          </button>
        </div>
      </div>
      <Footer entypoSocialinstagramWith="/entyposocialinstagramwithcircle2.svg" />
    </div>
  );
};

PublishedCourses.propTypes = {
  className: PropTypes.string,
};

export default PublishedCourses;
