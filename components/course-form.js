import { useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const CourseForm = ({ className = "" }) => {
  const router = useRouter();

  const onFormSubmitButtonClick = useCallback(() => {
    router.push("/published-courses");
  }, [router]);

  return (
    <form
      className={`m-0 self-stretch shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] rounded-xl bg-shades-white flex flex-col items-center justify-center py-7 px-[115px] gap-[19px] ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-start gap-[6px]">
        <b className="self-stretch h-9 relative text-5xl leading-[36px] inline-block font-poppins text-darkslategray-200 text-center">
          Create a Course
        </b>
        <div className="self-stretch relative text-lg leading-[30px] font-roboto text-slategray text-center">
          Start selling your own courses by filling up the form below!
        </div>
      </div>
      <form className="m-0 self-stretch flex flex-col items-center justify-start py-0 px-[39px] gap-[32px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[3px]">
          <div className="relative text-base tracking-[0.15px] leading-[24px] font-roboto text-black text-left">
            Name
          </div>
          <input
            className="[outline:none] font-roboto text-base bg-[transparent] self-stretch rounded flex flex-col items-start justify-start py-0 px-3 text-darkgray-100 border-[1px] border-solid border-other-outlined-border"
            placeholder="Course Name"
            type="text"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[3px]">
          <div className="relative text-base tracking-[0.15px] leading-[24px] font-roboto text-black text-left">
            Short description
          </div>
          <input
            className="[outline:none] font-roboto text-base bg-[transparent] self-stretch rounded flex flex-col items-start justify-start py-0 px-3 text-darkgray-100 border-[1px] border-solid border-other-outlined-border"
            placeholder="Course Subheading"
            type="text"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[3px]">
          <div className="relative text-base tracking-[0.15px] leading-[24px] font-roboto text-black text-left">
            Write a detailed description of the course
          </div>
          <textarea
            className="bg-[transparent] font-roboto text-base [outline:none] self-stretch rounded box-border h-[105px] flex flex-col items-start justify-start p-3 text-darkgray-100 border-[1px] border-solid border-other-outlined-border"
            placeholder="My course is about....."
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[3px]">
          <div className="relative text-base tracking-[0.15px] leading-[24px] font-roboto text-black text-left">
            Category
          </div>
          <textarea
            className="bg-[transparent] font-roboto text-base [outline:none] self-stretch rounded flex flex-col items-start justify-start p-3 text-darkgray-100 border-[1px] border-solid border-other-outlined-border"
            placeholder="Category"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[3px]">
          <div className="relative text-base tracking-[0.15px] leading-[24px] font-roboto text-black text-left">
            Course thumbnail URL
          </div>
          <textarea
            className="bg-[transparent] font-roboto text-base [outline:none] self-stretch rounded box-border h-[49px] flex flex-col items-start justify-start p-3 text-darkgray-100 border-[1px] border-solid border-other-outlined-border"
            placeholder="https://unsplash.com/abc/xyz"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[3px]">
          <div className="relative text-base tracking-[0.15px] leading-[24px] font-roboto text-black text-left">
            Upload File
          </div>
          <textarea
            className="bg-[transparent] font-roboto text-base [outline:none] self-stretch rounded flex flex-col items-start justify-start py-[31px] px-3 text-darkgray-100 border-[1px] border-dashed border-other-outlined-border"
            placeholder="Drop PDF here"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[3px]">
          <div className="relative text-base tracking-[0.15px] leading-[24px] font-roboto text-black text-left">
            Price($)
          </div>
          <textarea
            className="bg-[transparent] font-roboto text-base [outline:none] self-stretch rounded box-border h-[49px] flex flex-col items-start justify-start p-3 text-darkgray-100 border-[1px] border-solid border-other-outlined-border"
            placeholder="100"
          />
        </div>
      </form>
      <button
        className="cursor-pointer py-3.5 px-[47px] bg-shades-white rounded-3xs flex flex-row items-center justify-center border-[1px] border-solid border-black"
        onClick={onFormSubmitButtonClick}
      >
        <div className="relative text-base font-roboto text-black text-center">
          Create
        </div>
      </button>
    </form>
  );
};

CourseForm.propTypes = {
  className: PropTypes.string,
};

export default CourseForm;
