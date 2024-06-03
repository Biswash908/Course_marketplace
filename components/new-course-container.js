import { useCallback } from "react";
import { useRouter } from "next/router";
import RecCard2 from "./rec-card2";
import PropTypes from "prop-types";

const NewCourseContainer = ({ className = "" }) => {
  const router = useRouter();

  const onRecCard1Click = useCallback(() => {
    router.push("/student-course-page");
  }, [router]);

  const onRecCard2Click = useCallback(() => {
    router.push("/student-course-page");
  }, [router]);

  const onRecCard3Click = useCallback(() => {
    router.push("/student-course-page");
  }, [router]);

  return (
    <div
      className={`self-stretch flex-1 flex flex-col items-start justify-start py-2.5 px-[82px] gap-[10px] text-center text-5xl text-black font-inter ${className}`}
    >
      <div className="relative leading-[220.52%] font-semibold">
        New Courses
      </div>
      <div className="self-stretch grid flex-row items-center justify-start gap-[10px] grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))]">
        <RecCard2
          unsplash5MV818tzxeo="/unsplash5mv818tzxeo13@2x.png"
          powerBiForProfessionals="PowerBi for Professionals"
          price="$165"
          onRecCard1Click={onRecCard1Click}
        />
        <RecCard2
          unsplash5MV818tzxeo="/unsplash5mv818tzxeo14@2x.png"
          powerBiForProfessionals="Google Analytics for Beginners"
          price="$189"
          onRecCard1Click={onRecCard2Click}
        />
        <RecCard2
          unsplash5MV818tzxeo="/unsplash5mv818tzxeo15@2x.png"
          powerBiForProfessionals="Learn Kuberenetes"
          price="$120"
          onRecCard1Click={onRecCard3Click}
        />
      </div>
    </div>
  );
};

NewCourseContainer.propTypes = {
  className: PropTypes.string,
};

export default NewCourseContainer;
