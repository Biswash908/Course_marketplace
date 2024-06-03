import PropTypes from "prop-types";

const ContentCreatorsFlow = ({ className = "" }) => {
  return (
    <div
      className={`w-[1754px] text-81xl leading-[220.52%] font-semibold font-inter text-black text-left inline-block h-[235px] ${className}`}
    >
      Content Creators Flow
    </div>
  );
};

ContentCreatorsFlow.propTypes = {
  className: PropTypes.string,
};

export default ContentCreatorsFlow;
