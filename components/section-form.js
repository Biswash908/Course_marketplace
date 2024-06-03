import PropTypes from "prop-types";

const SectionForm = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[707.7px] left-[8.4px] w-[1099.7px] h-[146.6px] text-center text-xs-6 text-studio-darkmode-maincta-457eff font-roboto ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] w-[1099.7px] h-[146.6px]">
        <div className="absolute top-[0px] left-[0px] w-[1099.7px] h-[146.6px]">
          <div className="absolute top-[0px] left-[0px] w-[173.3px] h-[146.6px]">
            <div className="absolute top-[0px] left-[0px] rounded-[7.47px] bg-shades-white w-[173.3px] h-[146.6px]" />
            <div className="absolute top-[90px] left-[31.1px] leading-[16.84px] text-studio-darkmode-popuplabels-5e6a86 inline-block w-[111.1px] h-[41.9px]">
              Download the Locofy plugin for Figma
            </div>
            <b className="absolute top-[18.1px] left-[35.8px] text-27xl-7 leading-[46.7px] inline-block w-[101.6px]">
              1
            </b>
            <b className="absolute top-[68.5px] left-[10.7px] text-sm leading-[20.21px] uppercase inline-block w-[151.8px]">
              Get Locofy Plugin
            </b>
          </div>
          <div className="absolute top-[0px] left-[370.6px] w-[173.3px] h-[146.6px]">
            <div className="absolute top-[0px] left-[0px] rounded-[7.47px] bg-shades-white w-[173.3px] h-[146.6px]" />
            <div className="absolute top-[89.8px] left-[22.9px] leading-[16.84px] text-studio-darkmode-popuplabels-5e6a86 inline-block w-[127.5px] h-[41.9px]">
              Click on the app design and preview
            </div>
            <b className="absolute top-[18.1px] left-[35.8px] text-27xl-7 leading-[46.7px] inline-block w-[101.6px]">
              3
            </b>
            <b className="absolute top-[69.8px] left-[21.5px] text-sm leading-[20.21px] uppercase inline-block w-[130.1px]">
              {" "}
              preview
            </b>
          </div>
          <div className="absolute top-[0px] left-[555.9px] w-[173.3px] h-[146.6px]">
            <div className="absolute top-[0px] left-[0px] rounded-[7.47px] bg-shades-white w-[173.3px] h-[146.6px]" />
            <div className="absolute top-[90px] left-[26.3px] leading-[16.84px] text-studio-darkmode-popuplabels-5e6a86 inline-block w-[120.6px] h-[41.9px]">
              Play with the app using the plugin preview
            </div>
            <b className="absolute top-[18.1px] left-[35.8px] text-27xl-7 leading-[46.7px] inline-block w-[101.6px]">
              4
            </b>
            <b className="absolute top-[69.8px] left-[21.5px] text-sm leading-[20.21px] uppercase inline-block w-[130.1px]">
              Interact
            </b>
          </div>
          <div className="absolute top-[0px] left-[741.2px] w-[173.3px] h-[146.6px]">
            <div className="absolute top-[0px] left-[0px] rounded-[7.47px] bg-shades-white w-[173.3px] h-[146.6px]" />
            <div className="absolute top-[90px] left-[26.3px] leading-[16.84px] text-studio-darkmode-popuplabels-5e6a86 inline-block w-[120.6px] h-[41.9px]">
              Click “View Code” to view code to builder
            </div>
            <b className="absolute top-[18.1px] left-[35.8px] text-27xl-7 leading-[46.7px] inline-block w-[101.6px]">
              5
            </b>
            <b className="absolute top-[69.8px] left-[21.5px] text-sm leading-[20.21px] uppercase inline-block w-[130.1px]">
              View Code
            </b>
          </div>
          <div className="absolute top-[0px] left-[926.5px] w-[173.3px] h-[146.6px]">
            <div className="absolute top-[0px] left-[0px] rounded-[7.47px] bg-shades-white w-[173.3px] h-[146.6px]" />
            <div className="absolute top-[90px] left-[26.3px] leading-[16.84px] text-studio-darkmode-popuplabels-5e6a86 inline-block w-[120.6px] h-[41.9px]">
              Deploy to live website or export code
            </div>
            <b className="absolute top-[18.1px] left-[35.8px] text-27xl-7 leading-[46.7px] inline-block w-[101.6px]">
              6
            </b>
            <b className="absolute top-[69.8px] left-[21.5px] text-sm leading-[20.21px] uppercase inline-block w-[130.1px]">
              Export Code
            </b>
          </div>
          <div className="absolute top-[0px] left-[185.3px] w-[173.3px] h-[146.6px]">
            <div className="absolute top-[0px] left-[0px] rounded-[7.47px] bg-shades-white w-[173.3px] h-[146.6px]" />
            <div className="absolute top-[90.1px] left-[12.3px] leading-[16.84px] text-studio-darkmode-popuplabels-5e6a86 inline-block w-[148.2px] h-[41.9px]">
              Create a web project (React, HTML, NextJS, Gatsby, React Native)
            </div>
            <b className="absolute top-[18.1px] left-[35.8px] text-27xl-7 leading-[46.7px] inline-block w-[101.6px]">
              2
            </b>
            <b className="absolute top-[68.5px] left-[20.2px] text-sm leading-[20.21px] uppercase inline-block whitespace-pre-wrap w-[132.9px]">
              Create project
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

SectionForm.propTypes = {
  className: PropTypes.string,
};

export default SectionForm;
