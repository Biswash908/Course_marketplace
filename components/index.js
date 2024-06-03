import { useCallback } from "react";
import { useRouter } from "next/router";
import Header from "./header";
import RecCard from "./rec-card";
import PropTypes from "prop-types";

const StudentHomepage = ({ className = "" }) => {
  const router = useRouter();

  const onCoursesByJohnClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onCreateBtnClick = useCallback(() => {
    router.push("/create-page");
  }, [router]);

  const onLoginBtnClick = useCallback(() => {
    router.push("/loginpage");
  }, [router]);

  const onRecCard1Click = useCallback(() => {
    router.push("/student-course-page");
  }, [router]);

  const onRecCard2Click = useCallback(() => {
    router.push("/student-course-page");
  }, [router]);

  const onRecCard3Click = useCallback(() => {
    router.push("/student-course-page");
  }, [router]);

  const onRecCard12Click = useCallback(() => {
    router.push("/student-course-page");
  }, [router]);

  const onRecCard22Click = useCallback(() => {
    router.push("/student-course-page");
  }, [router]);

  const onRecCard32Click = useCallback(() => {
    router.push("/student-course-page");
  }, [router]);

  const onButtonClick = useCallback(() => {
    router.push("/student-course-page");
  }, [router]);

  const onRecCard13Click = useCallback(() => {
    router.push("/student-course-page");
  }, [router]);

  const onRecCard23Click = useCallback(() => {
    router.push("/student-course-page");
  }, [router]);

  const onRecCard33Click = useCallback(() => {
    router.push("/student-course-page");
  }, [router]);

  return (
    <div
      className={`w-[1440px] bg-shades-white max-w-full h-[2056px] flex flex-col items-start justify-start gap-[3px] text-left text-[36px] text-black font-inter ${className}`}
    >
      <Header
        maskGroup="/mask-group@2x.png"
        onCoursesByJohnClick={onCoursesByJohnClick}
        onCreateBtnClick={onCreateBtnClick}
        onLoginBtnClick={onLoginBtnClick}
      />
      <div className="self-stretch flex flex-col items-start justify-start py-0 px-20">
        <div className="self-stretch rounded-[15px] bg-honeydew flex flex-row items-center justify-start gap-[70px] md:flex-col md:items-center md:justify-start md:pt-[3rem] md:box-border">
          <div className="flex-1 flex flex-col items-start justify-start py-0 px-[49px] gap-[31px] md:gap-[25px] md:items-center md:justify-center md:pl-0 md:pr-0 md:box-border md:flex-[unset] md:self-stretch">
            <div className="w-[450px] flex flex-col items-start justify-start gap-[2px] md:items-start md:justify-start">
              <div className="self-stretch h-[58px] relative leading-[80.5%] font-bold inline-block md:text-center">
                Team Management Course
              </div>
              <div className="self-stretch relative text-xl leading-[167.02%] md:text-center">
                Learn how to manage and grow with your team.
              </div>
            </div>
            <button
              className="cursor-pointer [border:none] py-0 px-5 bg-black rounded-3xs flex flex-row items-start justify-start"
              onClick={onButtonClick}
            >
              <div className="relative text-xl leading-[220.52%] font-semibold font-inter text-shades-white text-center">
                Check out
              </div>
            </button>
          </div>
          <img
            className="flex-1 relative rounded-[13px] max-w-full overflow-hidden h-[358.7px] object-contain md:flex-[unset] md:self-stretch"
            alt=""
            src="/image@2x.png"
          />
        </div>
      </div>
      <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[88px] gap-[38px] text-5xl">
        <div className="self-stretch flex flex-col items-start justify-start pt-2.5 px-[82px] pb-0 gap-[10px] text-center">
          <div className="relative leading-[220.52%] font-semibold">
            New Courses
          </div>
          <div className="self-stretch grid flex-row items-center justify-start gap-[10px] grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))]">
            <RecCard
              unsplash5MV818tzxeo="/unsplash5mv818tzxeo@2x.png"
              powerBiForProfessionals="PowerBi for Professionals"
              price="$165"
              onRecCard1Click={onRecCard1Click}
            />
            <RecCard
              unsplash5MV818tzxeo="/unsplash5mv818tzxeo1@2x.png"
              powerBiForProfessionals="Google Analytics for Beginners"
              price="$189"
              propHeight="328px"
              propAlignSelf="unset"
              propFlex="1"
              onRecCard1Click={onRecCard2Click}
            />
            <RecCard
              unsplash5MV818tzxeo="/unsplash5mv818tzxeo2@2x.png"
              powerBiForProfessionals="Learn Kuberenetes"
              price="$120"
              propHeight="328px"
              propAlignSelf="unset"
              propFlex="1"
              onRecCard1Click={onRecCard3Click}
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start pt-2.5 px-[82px] pb-0 gap-[10px]">
          <div className="relative leading-[220.52%] font-semibold">
            Video Editing
          </div>
          <div className="self-stretch grid flex-row items-center justify-start gap-[10px] grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))]">
            <RecCard
              unsplash5MV818tzxeo="/unsplash5mv818tzxeo3@2x.png"
              powerBiForProfessionals="Adobe Premiere Pro: Full Guide"
              price="$160"
              propHeight="unset"
              propAlignSelf="stretch"
              propFlex="unset"
              onRecCard1Click={onRecCard12Click}
            />
            <RecCard
              unsplash5MV818tzxeo="/unsplash5mv818tzxeo4@2x.png"
              powerBiForProfessionals="Overlays and Shadows"
              price="$125"
              propHeight="unset"
              propAlignSelf="stretch"
              propFlex="unset"
              onRecCard1Click={onRecCard22Click}
            />
            <RecCard
              unsplash5MV818tzxeo="/unsplash5mv818tzxeo5@2x.png"
              powerBiForProfessionals="Mastering DaVinci"
              price="$165"
              propHeight="unset"
              propAlignSelf="stretch"
              propFlex="unset"
              onRecCard1Click={onRecCard32Click}
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start py-2.5 px-[82px] gap-[10px]">
          <div className="relative leading-[220.52%] font-semibold">
            Programming
          </div>
          <div className="self-stretch grid flex-row items-center justify-center gap-[10px] grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))] text-xl font-roboto">
            <a
              className="[text-decoration:none] self-stretch flex-1 shadow-[0px_0px_26px_rgba(0,_0,_0,_0.08)] rounded-3xs flex flex-col items-center justify-start cursor-pointer text-[inherit]"
              onClick={onRecCard13Click}
            >
              <img
                className="self-stretch relative rounded-t-3xs rounded-b-none max-w-full overflow-hidden h-[242px] shrink-0 object-cover"
                alt=""
                src="/unsplash5mv818tzxeo6@2x.png"
              />
              <div className="self-stretch rounded-t-none rounded-b-3xs bg-shades-white flex flex-col items-center justify-center py-5 px-4 border-[1px] border-solid border-whitesmoke-300">
                <div className="self-stretch flex flex-row items-center justify-start">
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="self-stretch relative tracking-[0.02em] font-medium">
                      Getting Started with AWS
                    </div>
                  </div>
                  <div className="relative text-5xl leading-[34px] font-inter text-gray-200 text-right">
                    $265
                  </div>
                </div>
              </div>
            </a>
            <a
              className="[text-decoration:none] self-stretch flex-1 [filter:drop-shadow(0px_0px_26px_rgba(0,_0,_0,_0.08))] rounded-3xs flex flex-col items-center justify-start cursor-pointer text-[inherit] border-[1px] border-solid border-whitesmoke-200"
              onClick={onRecCard23Click}
            >
              <img
                className="self-stretch relative rounded-t-3xs rounded-b-none max-w-full overflow-hidden h-[242px] shrink-0 object-cover"
                alt=""
                src="/unsplash5mv818tzxeo7@2x.png"
              />
              <div className="self-stretch rounded-t-none rounded-b-3xs bg-shades-white flex flex-col items-center justify-center py-5 px-4">
                <div className="self-stretch flex flex-row items-center justify-start">
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="self-stretch relative tracking-[0.02em] font-medium">
                      Master Vue.js
                    </div>
                  </div>
                  <div className="relative text-5xl leading-[34px] font-inter text-gray-200 text-right">
                    $130
                  </div>
                </div>
              </div>
            </a>
            <a
              className="[text-decoration:none] self-stretch flex-1 [filter:drop-shadow(0px_0px_26px_rgba(0,_0,_0,_0.08))] rounded-3xs flex flex-col items-center justify-start cursor-pointer text-[inherit] border-[1px] border-solid border-whitesmoke-200"
              onClick={onRecCard33Click}
            >
              <img
                className="self-stretch relative rounded-t-3xs rounded-b-none max-w-full overflow-hidden h-[242px] shrink-0 object-cover"
                alt=""
                src="/unsplash5mv818tzxeo8@2x.png"
              />
              <div className="self-stretch rounded-t-none rounded-b-3xs bg-shades-white flex flex-col items-center justify-center py-5 px-4">
                <div className="self-stretch flex flex-row items-center justify-start">
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="self-stretch relative tracking-[0.02em] font-medium">
                      Learn React 18
                    </div>
                  </div>
                  <div className="relative text-5xl leading-[34px] font-inter text-gray-200 text-right">
                    $195
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-black flex flex-row items-start justify-start py-10 px-20 gap-[80px] [border-top:1px] [border-top-style:solid] border-t-darkslategray-0 text-base text-shades-white font-roboto lg:py-6 lg:px-5 lg:box-border lg:[border-top:1px] lg:[border-top-style:solid] lg:border-t-darkslategray-0 lg:gap-[20px] md:flex-col md:p-10 md:box-border md:gap-[20px] md:mt-[30px] sm:py-[30px] sm:px-6 sm:box-border">
        <div className="flex-1 flex flex-col items-start justify-start lg:w-[329px] md:flex-[unset] md:self-stretch">
          <div className="w-[158.5px] h-[36.6px] flex flex-row items-center justify-start gap-[24px]">
            <img
              className="w-[36.6px] relative h-[36.6px] overflow-hidden shrink-0"
              alt=""
              src="/entyposocialfacebookwithcircle.svg"
            />
            <img
              className="w-[36.6px] relative h-[36.6px] overflow-hidden shrink-0"
              alt=""
              src="/entyposocialinstagramwithcircle.svg"
            />
            <img
              className="w-[36.6px] relative h-[36.6px] overflow-hidden shrink-0"
              alt=""
              src="/entyposocialtwitterwithcircle.svg"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-row items-start justify-start gap-[20px] md:flex-[unset] md:self-stretch sm:flex-col sm:gap-[40px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[14px] sm:flex-[unset] sm:self-stretch">
            <div className="self-stretch relative text-xl leading-[27px] font-medium">
              Company
            </div>
            <div className="self-stretch relative">About Us</div>
            <div className="self-stretch relative">News</div>
            <div className="self-stretch relative">Careers</div>
            <div className="self-stretch relative">How we work</div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[14px] sm:flex-[unset] sm:self-stretch">
            <div className="self-stretch relative text-xl leading-[27px] font-medium">
              Support
            </div>
            <div className="self-stretch relative">FAQ</div>
            <div className="self-stretch relative">US Office</div>
            <div className="self-stretch relative">Help Center</div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[15px] sm:flex-[unset] sm:self-stretch">
            <div className="self-stretch relative text-xl leading-[27px] font-medium">
              More
            </div>
            <div className="self-stretch relative">Become a partner</div>
            <div className="self-stretch relative">Partner Support</div>
            <div className="self-stretch relative">Driver Requirements</div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[15px] sm:flex-[unset] sm:self-stretch">
            <div className="self-stretch relative text-xl leading-[27px] font-medium">
              App
            </div>
            <div className="self-stretch relative">Report Bug</div>
            <div className="self-stretch relative">App Helpdesk</div>
            <div className="self-stretch relative">Mobile app links</div>
          </div>
        </div>
      </div>
    </div>
  );
};

StudentHomepage.propTypes = {
  className: PropTypes.string,
};

export default StudentHomepage;
