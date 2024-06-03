import { useCallback } from "react";
import { useRouter } from "next/router";
import MainHeader from "../components/main-header";
import RegistrationForm from "../components/registration-form";
import Footer from "../components/footer";

const SignUp = () => {
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
    <div className="w-full relative bg-whitesmoke-200 flex flex-col items-start justify-start gap-[3px]">
      <MainHeader
        onCoursePlanetClick={onCoursePlanetClick}
        onYourHomepageClick={onYourHomepageClick}
        onCreateBtnClick={onCreateBtnClick}
        onLoginBtnClick={onLoginBtnClick}
      />
      <div className="self-stretch bg-whitesmoke-200 flex flex-col items-center justify-center py-20 px-[30px]">
        <RegistrationForm />
      </div>
      <Footer entypoSocialinstagramWith="/entyposocialinstagramwithcircle1.svg" />
    </div>
  );
};

export default SignUp;
