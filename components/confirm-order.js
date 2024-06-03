import { useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const ConfirmOrder = ({ className = "", onClose }) => {
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    router.push("/published-courses");
  }, [router]);

  return (
    <div
      className={`w-[459px] rounded-3xs bg-shades-white box-border h-[358px] flex flex-col items-start justify-start py-[7px] px-[15px] max-w-full max-h-full overflow-auto text-center text-3xl text-darkslategray-200 font-poppins border-[1px] border-solid border-gainsboro-100 ${className}`}
    >
      <button
        className="cursor-pointer [border:none] p-1 bg-[transparent] overflow-hidden flex flex-row items-start justify-start opacity-[0.4]"
        onClick={onClose}
      >
        <div className="relative text-xs leading-[150%] font-roboto text-black text-left">
          X
        </div>
      </button>
      <div className="self-stretch flex-1 rounded-xl bg-shades-white flex flex-col items-center justify-center py-7 px-[51px] gap-[33px]">
        <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-4">
          <div className="self-stretch h-[34px] relative leading-[34px] font-semibold inline-block">
            Confirm Order
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start py-0 px-[33px] gap-[10px]">
          <input
            className="[outline:none] font-roboto text-xs bg-shades-white self-stretch rounded overflow-hidden flex flex-row items-center justify-start py-2.5 px-3.5 text-gray-100 leading-[18px] border-[1px] border-solid border-studio-lightmode-midseparator-dee3eb"
            placeholder="Username or email address"
            type="text"
          />
          <input
            className="[outline:none] font-roboto text-xs bg-shades-white self-stretch rounded overflow-hidden flex flex-row items-center justify-start py-2.5 px-3.5 text-gray-100 leading-[18px] border-[1px] border-solid border-studio-lightmode-midseparator-dee3eb"
            placeholder="Password"
            type="password"
          />
        </div>
        <button
          className="cursor-pointer [border:none] py-2 px-4 bg-black w-[115px] rounded-[3px] flex flex-row items-center justify-center box-border hover:bg-lightseagreen"
          onClick={onButtonClick}
        >
          <b className="relative text-xs leading-[150%] font-roboto text-shades-white text-left">
            Download
          </b>
        </button>
      </div>
    </div>
  );
};

ConfirmOrder.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default ConfirmOrder;
