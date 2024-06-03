import PropTypes from "prop-types";

const Footer = ({ className = "", entypoSocialinstagramWith }) => {
  return (
    <div
      className={`self-stretch bg-black flex flex-row items-start justify-start py-10 px-20 gap-[80px] [border-top:1px] [border-top-style:solid] border-t-darkslategray-0 text-left text-base text-shades-white font-roboto lg:py-6 lg:px-5 lg:box-border lg:[border-top:1px] lg:[border-top-style:solid] lg:border-t-darkslategray-0 lg:gap-[20px] md:flex-col md:p-10 md:box-border md:gap-[20px] md:mt-[30px] sm:py-[30px] sm:px-6 sm:box-border ${className}`}
    >
      <div className="flex flex-col items-start justify-start lg:w-[329px]">
        <div className="w-[158.5px] relative h-[36.6px]">
          <img
            className="absolute top-[0px] left-[0px] w-[36.6px] h-[36.6px] overflow-hidden"
            alt=""
            src="/entyposocialfacebookwithcircle.svg"
          />
          <img
            className="absolute top-[0px] left-[121.9px] w-[36.6px] h-[36.6px] overflow-hidden"
            alt=""
            src="/entyposocialtwitterwithcircle1.svg"
          />
          <img
            className="absolute top-[0px] left-[61px] w-[36.6px] h-[36.6px] overflow-hidden"
            alt=""
            src={entypoSocialinstagramWith}
          />
        </div>
      </div>
      <div className="flex-1 flex flex-row items-start justify-start gap-[20px] md:flex-[unset] md:self-stretch sm:flex-col sm:gap-[40px]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[14px] sm:flex-[unset] sm:self-stretch">
          <div className="self-stretch relative text-xl leading-[27px] font-medium">
            Company
          </div>
          <div className="self-stretch relative">About Us</div>
          <div className="self-stretch relative">News</div>
          <div className="self-stretch relative">Careers</div>
          <div className="self-stretch relative">How we work</div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[14px] sm:flex-[unset] sm:self-stretch">
          <div className="self-stretch relative text-xl leading-[27px] font-medium">
            Support
          </div>
          <div className="self-stretch relative">FAQ</div>
          <div className="self-stretch relative">US Office</div>
          <div className="self-stretch relative">Asia Office</div>
          <div className="self-stretch relative">Help Center</div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[15px] sm:flex-[unset] sm:self-stretch">
          <div className="self-stretch relative text-xl leading-[27px] font-medium">
            More
          </div>
          <div className="self-stretch relative">Become a partner</div>
          <div className="self-stretch relative">Partner Support</div>
          <div className="self-stretch relative">Driver Requirements</div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[15px] sm:flex-[unset] sm:self-stretch">
          <div className="self-stretch relative text-xl leading-[27px] font-medium">
            App
          </div>
          <div className="self-stretch relative">Report Bug</div>
          <div className="self-stretch relative">App Helpdesk</div>
          <div className="self-stretch relative">Mobile app links</div>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  entypoSocialinstagramWith: PropTypes.string,
};

export default Footer;
