import { useCallback } from "react";
import { useRouter } from "next/router";
import MainHeader from "../components/main-header";
import ProfileForm from "../components/profile-form";
import Footer from "../components/footer";

const CompleteProfile = () => {
  const router = useRouter();

  const onCoursePlanetClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onYourHomepageClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onCreateBtnClick = useCallback(() => {
    router.push("/published-courses");
  }, [router]);

  const onLoginBtnClick = useCallback(() => {
    router.push("/loginpage");
  }, [router]);

  return (
    <div className="w-full relative bg-whitesmoke-200 flex flex-col items-start justify-start">
      <MainHeader
        yourHomepageGap="unset"
        onCoursePlanetClick={onCoursePlanetClick}
        onYourHomepageClick={onYourHomepageClick}
        onCreateBtnClick={onCreateBtnClick}
        onLoginBtnClick={onLoginBtnClick}
      />
      <div className="self-stretch bg-whitesmoke-200 flex flex-col items-center justify-center pt-[57px] px-0 pb-[61px]">
        <ProfileForm />
      </div>
      <Footer entypoSocialinstagramWith="/entyposocialinstagramwithcircle2.svg" />
    </div>
  );
};

export default CompleteProfile;
