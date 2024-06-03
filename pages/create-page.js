import { useCallback } from "react";
import { useRouter } from "next/router";
import MainHeader from "../components/main-header";
import CourseForm from "../components/course-form";
import Footer from "../components/footer";

const CreatePage = () => {
  const router = useRouter();

  const onCoursePlanetClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onLoginBtnClick = useCallback(() => {
    router.push("/loginpage");
  }, [router]);

  return (
    <div className="w-full relative bg-shades-white flex flex-col items-start justify-start gap-[3px] text-center text-5xl text-black font-inter">
      <MainHeader
        yourHomepageGap="27px"
        onCoursePlanetClick={onCoursePlanetClick}
        onLoginBtnClick={onLoginBtnClick}
      />
      <div className="self-stretch bg-whitesmoke-200 flex flex-col items-start justify-start pt-[73px] px-[226px] pb-[77px] gap-[38px]">
        <div className="w-[1440px] hidden flex-col items-start justify-start py-2.5 px-[82px] box-border">
          <b className="relative leading-[220.52%]">Create A Course</b>
        </div>
        <CourseForm />
      </div>
      <Footer entypoSocialinstagramWith="/entyposocialinstagramwithcircle2.svg" />
    </div>
  );
};

export default CreatePage;
