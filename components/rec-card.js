import { useMemo } from "react";
import PropTypes from "prop-types";

const RecCard = ({
  className = "",
  unsplash5MV818tzxeo,
  powerBiForProfessionals,
  price,
  propHeight,
  propAlignSelf,
  propFlex,
  onRecCard1Click,
}) => {
  const recCard1Style = useMemo(() => {
    return {
      height: propHeight,
      alignSelf: propAlignSelf,
    };
  }, [propHeight, propAlignSelf]);

  const holidayDetailsStyle = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <a
      className={`[text-decoration:none] h-[328px] flex-1 [filter:drop-shadow(0px_0px_26px_rgba(0,_0,_0,_0.08))] rounded-3xs box-border flex flex-col items-center justify-start cursor-pointer text-left text-xl text-black font-roboto border-[1px] border-solid border-whitesmoke-200 ${className}`}
      onClick={onRecCard1Click}
      style={recCard1Style}
    >
      <img
        className="self-stretch relative rounded-t-3xs rounded-b-none max-w-full overflow-hidden h-[242px] shrink-0 object-cover"
        alt=""
        src={unsplash5MV818tzxeo}
      />
      <div
        className="self-stretch flex-1 rounded-t-none rounded-b-3xs bg-shades-white flex flex-col items-center justify-center py-5 px-4"
        style={holidayDetailsStyle}
      >
        <div className="self-stretch flex flex-row items-center justify-start sm:flex-row sm:gap-[0px] sm:items-center sm:justify-start">
          <div className="flex-1 flex flex-col items-start justify-start">
            <div className="self-stretch relative tracking-[0.02em] font-medium">
              {powerBiForProfessionals}
            </div>
          </div>
          <div className="relative text-5xl leading-[34px] font-inter text-gray-200 text-right">
            {price}
          </div>
        </div>
      </div>
    </a>
  );
};

RecCard.propTypes = {
  className: PropTypes.string,
  unsplash5MV818tzxeo: PropTypes.string,
  powerBiForProfessionals: PropTypes.string,
  price: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,

  /** Action props */
  onRecCard1Click: PropTypes.func,
};

export default RecCard;
