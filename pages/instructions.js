import SectionForm from "../components/section-form";

const Instructions = () => {
  return (
    <div className="w-full relative h-[899.9px] text-left text-lg-7 text-studio-darkmode-explainertext-485269 font-roboto">
      <b className="absolute top-[439.4px] left-[0px] text-[56px] leading-[74.73px] text-darkslategray-100">
        Try out this Locofy.ai demo file!
      </b>
      <div className="absolute top-[519.4px] left-[5px] leading-[27.09px] inline-block w-[736.1px]">
        We designed a Course Marketplace in Figma and used Locofy.ai to turn it
        into responsive production-ready code. Check out the guide video on how
        we did it!
      </div>
      <SectionForm />
      <div className="absolute top-[665px] left-[8.4px] leading-[27.09px] font-semibold inline-block w-[668.6px]">
        To experience this demo:
      </div>
      <div className="absolute top-[871.9px] left-[8.4px] w-[705px] h-7">
        <div className="absolute top-[0px] left-[36.4px] leading-[27.09px] inline-block w-[668.6px]">
          Total time: 5 to 7 minutes
        </div>
        <img
          className="absolute top-[0.1px] left-[0px] w-[27.1px] h-[27.1px]"
          alt=""
          src="/group-767.svg"
        />
      </div>
      <img
        className="absolute top-[0px] left-[0px] w-[1183.1px] h-[371px]"
        alt=""
        src="/group-769.svg"
      />
      <img
        className="absolute top-[266.4px] left-[calc(50%_+_415.05px)] w-[178.3px] h-[162.7px]"
        alt=""
        src="/guide-guy.svg"
      />
      <div className="absolute top-[589.2px] left-[1.9px] w-[433px] h-[119.4px] flex flex-col items-start justify-start text-studio-darkmode-maincta-457eff">
        <div className="w-[704.3px] relative h-[31.1px]">
          <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-start gap-[9.1px]">
            <div className="w-[31.1px] relative h-[31.1px] overflow-hidden shrink-0">
              <img
                className="absolute h-[36.66%] w-[27.65%] top-[31.83%] right-[33.44%] bottom-[31.51%] left-[38.91%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/group.svg"
              />
              <div className="absolute h-[82.32%] w-[82.32%] top-[9.65%] right-[9%] bottom-[8.04%] left-[8.68%] rounded-[5.78px] box-border border-[1.4px] border-solid border-studio-darkmode-maincta-457eff" />
            </div>
            <b className="relative leading-[27.25px]">
              {`Watch video: `}
              <a
                className="text-[inherit]"
                href="https://www.youtube.com/watch?v=GnQhn0Dwttg"
                target="_blank"
              >
                <span className="[text-decoration:underline]">
                  Create a course marketplace with Locofy.ai, Figma, and
                  Supabase
                </span>
              </a>
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
