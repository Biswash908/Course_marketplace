import PropTypes from "prop-types";

const StudentsFlowText = ({ className = "" }) => {
  return (
    <div
      className={`w-[1754px] text-81xl leading-[220.52%] font-semibold font-inter text-black text-left inline-block h-[235px] ${className}`}
    >
      Students Flow
    </div>
  );
};

StudentsFlowText.propTypes = {
  className: PropTypes.string,
};

export default StudentsFlowText;
