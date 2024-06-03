import PropTypes from "prop-types";

const RecCard2 = ({
  className = "",
  unsplash5MV818tzxeo,
  powerBiForProfessionals,
  price,
  onRecCard1Click,
}) => {
  return (
    <button
      className={`cursor-pointer p-0 bg-[transparent] h-[359px] flex-1 [filter:drop-shadow(0px_0px_26px_rgba(0,_0,_0,_0.08))] rounded-3xs box-border flex flex-col items-center justify-start border-[1px] border-solid border-whitesmoke-200 ${className}`}
      onClick={onRecCard1Click}
    >
      <img
        className="self-stretch relative rounded-t-3xs rounded-b-none max-w-full overflow-hidden h-[242px] shrink-0 object-cover"
        alt=""
        src={unsplash5MV818tzxeo}
      />
      <div className="self-stretch flex-1 rounded-t-none rounded-b-3xs bg-shades-white flex flex-col items-center justify-center py-5 px-4">
        <div className="self-stretch flex flex-row items-center justify-start sm:flex-row sm:gap-[0px] sm:items-center sm:justify-start">
          <div className="flex-1 flex flex-col items-start justify-start">
            <div className="self-stretch relative text-xl tracking-[0.02em] font-medium font-roboto text-black text-left">
              {powerBiForProfessionals}
            </div>
          </div>
          <div className="relative text-5xl leading-[34px] font-inter text-gray-200 text-right">
            {price}
          </div>
        </div>
      </div>
    </button>
  );
};

RecCard2.propTypes = {
  className: PropTypes.string,
  unsplash5MV818tzxeo: PropTypes.string,
  powerBiForProfessionals: PropTypes.string,
  price: PropTypes.string,

  /** Action props */
  onRecCard1Click: PropTypes.func,
};

export default RecCard2;
