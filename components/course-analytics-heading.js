import Card from "./card";
import PropTypes from "prop-types";

const CourseAnalyticsHeading = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start py-2.5 px-[82px] gap-[20px] text-center text-5xl text-black font-inter ${className}`}
    >
      <div className="relative leading-[220.52%] font-semibold">
        Course Analytics
      </div>
      <div className="self-stretch flex flex-row items-start justify-between text-xl text-darkslategray-300 font-roboto md:gap-[30px] md:flex-col-reverse">
        <div className="flex flex-col items-center justify-center gap-[19px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[19px]">
            <div className="relative tracking-[0.02em] font-medium">
              Adobe Premiere Pro: Full Guide
            </div>
            <div className="relative text-base tracking-[0.02em] text-darkgray-200">
              Adobe Premiere Pro is a timeline-based video editing software.
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[33px] flex-wrap text-5xl">
            <Card
              materialSymbolscalendarTo="/materialsymbolscalendartodayoutline.svg"
              prop="11/2/22 "
              publishedOn="Published on"
            />
            <Card
              materialSymbolscalendarTo="/mdiuser.svg"
              prop="720"
              publishedOn="Students"
              propOverflow="hidden"
            />
            <Card
              materialSymbolscalendarTo="/phcurrencycircledollar.svg"
              prop="$1202"
              publishedOn="Total Revenue"
              propOverflow="hidden"
            />
          </div>
        </div>
        <img
          className="w-[323px] relative rounded-lg h-[186px] object-cover"
          alt=""
          src="/unsplash5mv818tzxeo12@2x.png"
        />
      </div>
    </div>
  );
};

CourseAnalyticsHeading.propTypes = {
  className: PropTypes.string,
};

export default CourseAnalyticsHeading;
