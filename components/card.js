import { useMemo } from "react";
import PropTypes from "prop-types";

const Card = ({
  className = "",
  materialSymbolscalendarTo,
  prop,
  publishedOn,
  propOverflow,
}) => {
  const materialSymbolscalendarTodaIconStyle = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  return (
    <div
      className={`shadow-[0px_4px_4px_rgba(0,_0,_0,_0.15)] rounded-3xs bg-shades-white flex flex-col items-center justify-center py-[5px] px-[30px] gap-[8px] text-center text-5xl text-darkslategray-300 font-roboto border-[1px] border-solid border-whitesmoke-100 ${className}`}
    >
      <img
        className="w-[35px] relative h-10"
        alt=""
        src={materialSymbolscalendarTo}
        style={materialSymbolscalendarTodaIconStyle}
      />
      <div className="relative tracking-[0.02em] font-medium">{prop}</div>
      <div className="relative text-mini tracking-[0.02em] text-darkgray-200">
        {publishedOn}
      </div>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  materialSymbolscalendarTo: PropTypes.string,
  prop: PropTypes.string,
  publishedOn: PropTypes.string,

  /** Style props */
  propOverflow: PropTypes.any,
};

export default Card;
