import styles from "../styles";
import { arrowUp } from "../assets";

const GetStarted = () => (
  // **********************************
  // *** Blue Gradient Outer Circle ***
  // **********************************
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
  >
    {/* *********************************** */}
    {/* *** Black Gradient Inner Circle *** */}
    {/* *********************************** */}
    <div
      className={`group ${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full hover:-hue-rotate-15`}
    >
      {/* *************************** */}
      {/* *** Text+Icon Container *** */}
      {/* *************************** */}
      <div className={`${styles.flexStart} flex-row`}>
        {/* ************* */}
        {/* *** "Get" *** */}
        {/* ************* */}
        <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
          <span className="text-gradient">Get</span>
        </p>
        {/* ****************** */}
        {/* *** Arrow icon *** */}
        {/* ****************** */}
        <img
          src={arrowUp}
          className="group-hover:rotate-90 duration-50 w-[23px] h-p[23px] object-contain"
          alt="arrow icon"
        />
      </div>
      {/* ***************** */}
      {/* *** "Started" *** */}
      {/* ***************** */}
      <p className="font-poppins font-medium text-[18px] leading-[23px]">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
