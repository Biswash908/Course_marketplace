import { useCallback } from "react";
import { useRouter } from "next/router";
import MainHeader from "../components/main-header";
import LoginCard from "../components/login-card";
import Footer from "../components/footer";

const Loginpage = () => {
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

  return (
    <div className="w-full relative bg-whitesmoke-200 flex flex-col items-center justify-center gap-[3px]">
      <MainHeader
        yourHomepageGap="27px"
        onCoursePlanetClick={onCoursePlanetClick}
        onYourHomepageClick={onYourHomepageClick}
        onCreateBtnClick={onCreateBtnClick}
      />
      <div className="self-stretch bg-whitesmoke-200 flex flex-col items-center justify-center py-20 px-0">
        <LoginCard />
      </div>
      <Footer entypoSocialinstagramWith="/entyposocialinstagramwithcircle2.svg" />
    </div>
  );
};

export default Loginpage;
