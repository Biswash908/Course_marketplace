import { useCallback } from "react";
import { useRouter } from "next/router";
import Header from "../components/header";
import VideoEditingContainer from "../components/video-editing-container";
import NewCourseContainer from "../components/new-course-container";
import Footer from "../components/footer";

const StudentCoursePage = () => {
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

  return (
    <div className="w-full relative bg-shades-white h-[1357px] flex flex-col items-start justify-start gap-[3px]">
      <Header
        maskGroup="/mask-group1@2x.png"
        onCoursesByJohnClick={onCoursesByJohnClick}
        onCreateBtnClick={onCreateBtnClick}
        onLoginBtnClick={onLoginBtnClick}
      />
      <VideoEditingContainer />
      <NewCourseContainer />
      <Footer entypoSocialinstagramWith="/entyposocialinstagramwithcircle2.svg" />
    </div>
  );
};

export default StudentCoursePage;
