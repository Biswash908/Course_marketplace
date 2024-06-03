import { useMemo } from "react";
import PropTypes from "prop-types";

const MainHeader = ({
  className = "",
  yourHomepageGap,
  onCoursePlanetClick,
  onYourHomepageClick,
  onCreateBtnClick,
  onLoginBtnClick,
}) => {
  const buttonsStyle = useMemo(() => {
    return {
      gap: yourHomepageGap,
    };
  }, [yourHomepageGap]);

  return (
    <div
      className={`self-stretch bg-shades-white flex flex-row items-center justify-between py-0 px-[29px] text-center text-21xl text-black font-lobster-two ${className}`}
    >
      <div
        className="relative leading-[220.52%] cursor-pointer"
        onClick={onCoursePlanetClick}
      >
        Course Planet
      </div>
      <div
        className="flex flex-row items-center justify-end py-2.5 px-7 gap-[27px]"
        style={buttonsStyle}
      >
        <button
          className="cursor-pointer [border:none] py-0.5 px-[5px] bg-[transparent] rounded-3xs flex flex-row items-center justify-center"
          onClick={onYourHomepageClick}
        >
          <div className="relative text-base leading-[220.52%] font-inter text-black text-center">
            Your Homepage
          </div>
        </button>
        <button
          className="cursor-pointer py-0.5 px-[5px] bg-[transparent] rounded-3xs flex flex-row items-center justify-center border-[1px] border-solid border-lightgray"
          onClick={onCreateBtnClick}
        >
          <div className="self-stretch relative text-base leading-[220.52%] font-inter text-black text-center flex items-center justify-center">
            Create Course
          </div>
        </button>
        <button
          className="cursor-pointer [border:none] py-0 px-[17px] bg-black rounded-3xs flex flex-row items-center justify-center"
          onClick={onLoginBtnClick}
        >
          <b className="relative text-base leading-[220.52%] font-inter text-shades-white text-center">
            Login
          </b>
        </button>
      </div>
    </div>
  );
};

MainHeader.propTypes = {
  className: PropTypes.string,

  /** Style props */
  yourHomepageGap: PropTypes.any,

  /** Action props */
  onCoursePlanetClick: PropTypes.func,
  onYourHomepageClick: PropTypes.func,
  onCreateBtnClick: PropTypes.func,
  onLoginBtnClick: PropTypes.func,
};

export default MainHeader;
