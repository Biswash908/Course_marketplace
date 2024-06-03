import { useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const RegistrationForm = ({ className = "" }) => {
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    router.push("/complete-profile");
  }, [router]);

  return (
    <form
      className={`m-0 w-[518px] h-[418px] shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] rounded-xl bg-shades-white box-border flex flex-col items-center justify-center py-7 px-[51px] gap-[33px] max-w-[90%] border-[1px] border-solid border-whitesmoke-300 ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-4">
        <div className="self-stretch h-[34px] relative text-3xl leading-[34px] font-semibold font-poppins text-darkslategray-200 text-center inline-block">
          Sign up
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
        <input
          className="[outline:none] font-roboto text-xs bg-shades-white self-stretch rounded overflow-hidden flex flex-row items-center justify-start py-2.5 px-3.5 text-gray-100 leading-[18px] border-[1px] border-solid border-studio-lightmode-midseparator-dee3eb"
          placeholder="Password"
          type="password"
        />
      </div>
      <button
        className="cursor-pointer [border:none] py-2 px-4 bg-black rounded-lg flex flex-row items-center justify-center"
        onClick={onButtonClick}
      >
        <b className="relative text-xs leading-[150%] font-roboto text-shades-white text-left">
          Create Account
        </b>
      </button>
    </form>
  );
};

RegistrationForm.propTypes = {
  className: PropTypes.string,
};

export default RegistrationForm;
