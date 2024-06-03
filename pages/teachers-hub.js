import { useCallback } from "react";
import { useRouter } from "next/router";
import MainHeader from "../components/main-header";
import CourseAnalyticsHeading from "../components/course-analytics-heading";
import Footer from "../components/footer";

const TeachersHub = () => {
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

  return (
    <div className="w-full relative bg-shades-white flex flex-col items-start justify-start gap-[3px] text-center text-base text-dimgray font-inter">
      <MainHeader
        yourHomepageGap="27px"
        onCoursePlanetClick={onCoursePlanetClick}
        onYourHomepageClick={onYourHomepageClick}
        onCreateBtnClick={onCreateBtnClick}
        onLoginBtnClick={onLoginBtnClick}
      />
      <div className="self-stretch bg-shades-white flex flex-col items-start justify-start pt-0 px-0 pb-1">
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[88px] gap-[38px]">
          <CourseAnalyticsHeading />
          <div className="self-stretch h-[300px] flex flex-col items-start justify-start py-2.5 px-[82px] box-border gap-[6px]">
            <div className="relative text-xl leading-[220.52%] font-semibold text-black">
              List of Students
            </div>
            <div className="self-stretch flex flex-row items-start justify-between py-[3px] px-0 text-black">
              <div className="flex flex-row items-start justify-start gap-[146px]">
                <div className="relative leading-[220.52%] font-semibold">
                  #
                </div>
                <div className="relative leading-[220.52%] font-semibold">
                  User
                </div>
              </div>
              <div className="relative leading-[220.52%] font-semibold">
                Purchased on
              </div>
            </div>
            <div className="self-stretch bg-gainsboro-200 h-px" />
            <div className="self-stretch flex flex-row items-start justify-between">
              <div className="flex flex-row items-start justify-start gap-[146px]">
                <div className="relative leading-[220.52%] font-semibold">
                  1
                </div>
                <div className="relative leading-[220.52%] font-semibold">
                  Michael Smith
                </div>
              </div>
              <div className="relative leading-[220.52%] font-semibold">
                19/12/22
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between">
              <div className="flex flex-row items-start justify-start gap-[146px]">
                <div className="relative leading-[220.52%] font-semibold">
                  2
                </div>
                <div className="relative leading-[220.52%] font-semibold">{`Francesco `}</div>
              </div>
              <div className="relative leading-[220.52%] font-semibold">
                14/12/22
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between">
              <div className="flex flex-row items-start justify-start gap-[146px]">
                <div className="relative leading-[220.52%] font-semibold">
                  3
                </div>
                <div className="w-[100px] relative leading-[220.52%] font-semibold inline-block shrink-0">
                  Pedri Andres
                </div>
              </div>
              <div className="relative leading-[220.52%] font-semibold">
                04/12/22
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between">
              <div className="flex flex-row items-start justify-start gap-[146px]">
                <div className="relative leading-[220.52%] font-semibold">
                  4
                </div>
                <div className="relative leading-[220.52%] font-semibold">
                  Robert McGill
                </div>
              </div>
              <div className="relative leading-[220.52%] font-semibold">
                01/12/22
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer entypoSocialinstagramWith="/entyposocialinstagramwithcircle2.svg" />
    </div>
  );
};

export default TeachersHub;
