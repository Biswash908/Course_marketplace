import { useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const ProfileForm = ({ className = "" }) => {
  const router = useRouter();

  const onFormSubmitButtonClick = useCallback(() => {
    router.push("/published-courses");
  }, [router]);

  return (
    <form
      className={`m-0 w-[792px] shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] rounded-xl bg-shades-white flex flex-col items-center justify-center py-7 px-14 box-border gap-[19px] max-w-[90%] ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-start gap-[6px]">
        <b className="self-stretch h-9 relative text-5xl leading-[36px] inline-block font-poppins text-darkslategray-200 text-center">
          Complete Profile
        </b>
        <div className="self-stretch relative text-lg leading-[30px] font-roboto text-slategray text-center">
          Start selling your own courses by filling up the form below!
        </div>
      </div>
      <form className="m-0 self-stretch flex flex-col items-center justify-start gap-[32px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[3px]">
          <div className="relative text-base tracking-[0.15px] leading-[24px] font-roboto text-black text-left">
            First name
          </div>
          <input
            className="[outline:none] font-roboto text-base bg-[transparent] self-stretch rounded flex flex-col items-start justify-start py-2.5 px-3.5 text-darkgray-100 border-[1px] border-solid border-other-outlined-border"
            placeholder="John"
            type="text"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[3px]">
          <div className="relative text-base tracking-[0.15px] leading-[24px] font-roboto text-black text-left">
            Last name
          </div>
          <input
            className="[outline:none] font-roboto text-base bg-[transparent] self-stretch rounded flex flex-col items-start justify-start py-2.5 px-3.5 text-darkgray-100 border-[1px] border-solid border-other-outlined-border"
            placeholder="Smith"
            type="text"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[3px]">
          <div className="relative text-base tracking-[0.15px] leading-[24px] font-roboto text-black text-left">
            Write a bit about yourself
          </div>
          <textarea
            className="bg-[transparent] font-roboto text-base [outline:none] self-stretch rounded box-border h-[105px] flex flex-col items-start justify-start p-3 text-darkgray-100 border-[1px] border-solid border-other-outlined-border"
            placeholder="I am passionate about...."
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[3px]">
          <div className="w-[162px] relative text-base tracking-[0.15px] leading-[24px] font-roboto text-black text-left flex items-center">
            Add Profile Photo
          </div>
          <textarea
            className="bg-[transparent] font-roboto text-base [outline:none] self-stretch rounded box-border h-[49px] flex flex-col items-start justify-start p-3 text-darkgray-100 border-[1px] border-solid border-other-outlined-border"
            placeholder="https://unsplash.com/abc/xyz"
          />
        </div>
      </form>
      <button
        className="cursor-pointer py-2 px-[65px] bg-black rounded-lg flex flex-row items-center justify-center border-[1px] border-solid border-black"
        onClick={onFormSubmitButtonClick}
      >
        <div className="relative text-base font-roboto text-shades-white text-center">
          Complete
        </div>
      </button>
    </form>
  );
};

ProfileForm.propTypes = {
  className: PropTypes.string,
};

export default ProfileForm;
