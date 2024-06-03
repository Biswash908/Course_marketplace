import PropTypes from "prop-types";

const Header = ({
  className = "",
  maskGroup,
  onCoursesByJohnClick,
  onCreateBtnClick,
  onLoginBtnClick,
}) => {
  return (
    <div
      className={`self-stretch bg-shades-white flex flex-row items-center justify-start py-0 px-[81px] gap-[12px] text-center text-21xl text-black font-lobster-two ${className}`}
    >
      <div className="w-16 h-[54.4px] flex flex-col items-start justify-start py-0 px-[3.9px] box-border">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={maskGroup}
        />
      </div>
      <div
        className="relative leading-[220.52%] cursor-pointer sm:text-xs sm:leading-[10px]"
        onClick={onCoursesByJohnClick}
      >
        Courses by John
      </div>
      <div className="flex-1 flex flex-row items-center justify-end py-2.5 px-0 gap-[27px]">
        <button
          className="cursor-pointer py-0.5 px-[5px] bg-[transparent] self-stretch rounded-3xs flex flex-row items-center justify-center border-[1px] border-solid border-lightgray"
          onClick={onCreateBtnClick}
        >
          <div className="relative text-base leading-[220.52%] font-inter text-black text-center sm:leading-[20px]">
            Create Course
          </div>
        </button>
        <button
          className="cursor-pointer [border:none] py-0 px-[17px] bg-black self-stretch rounded-3xs flex flex-row items-center justify-center"
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

Header.propTypes = {
  className: PropTypes.string,
  maskGroup: PropTypes.string,

  /** Action props */
  onCoursesByJohnClick: PropTypes.func,
  onCreateBtnClick: PropTypes.func,
  onLoginBtnClick: PropTypes.func,
};

export default Header;
