import { useMemo } from "react";
import PropTypes from "prop-types";

const RecCard1 = ({
  className = "",
  unsplash5MV818tzxeo,
  devOps,
  devOpsIsAMethodologyInThe,
  propBoxShadow,
  propFilter,
  propBackgroundColor,
  onRecCard1Click,
}) => {
  const recCard11Style = useMemo(() => {
    return {
      boxShadow: propBoxShadow,
      filter: propFilter,
    };
  }, [propBoxShadow, propFilter]);

  const holidayDetails1Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div
      className={`self-stretch flex-1 shadow-[0px_0px_26px_rgba(0,_0,_0,_0.08)] rounded-3xs flex flex-col items-center justify-start cursor-pointer text-left text-xl text-darkslategray-300 font-roboto border-[1px] border-solid border-whitesmoke-200 ${className}`}
      onClick={onRecCard1Click}
      style={recCard11Style}
    >
      <img
        className="self-stretch relative rounded-t-3xs rounded-b-none max-w-full overflow-hidden h-[242px] shrink-0 object-cover"
        alt=""
        src={unsplash5MV818tzxeo}
      />
      <div
        className="self-stretch rounded-t-none rounded-b-3xs bg-shades-white flex flex-col items-center justify-center py-5 px-4"
        style={holidayDetails1Style}
      >
        <div className="self-stretch flex flex-row items-center justify-start">
          <div className="flex-1 flex flex-col items-start justify-start gap-[3px]">
            <div className="self-stretch relative tracking-[0.02em] font-medium">
              {devOps}
            </div>
            <div className="self-stretch relative text-base tracking-[0.02em] text-darkgray-200">
              {devOpsIsAMethodologyInThe}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

RecCard1.propTypes = {
  className: PropTypes.string,
  unsplash5MV818tzxeo: PropTypes.string,
  devOps: PropTypes.string,
  devOpsIsAMethodologyInThe: PropTypes.string,

  /** Style props */
  propBoxShadow: PropTypes.any,
  propFilter: PropTypes.any,
  propBackgroundColor: PropTypes.any,

  /** Action props */
  onRecCard1Click: PropTypes.func,
};

export default RecCard1;
