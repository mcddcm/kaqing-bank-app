import styles from "../styles";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => (
  // ***************
  // *** WRAPPER ***
  // ***************
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    {/* ********************** */}
    {/* *** LEFT CONTAINER *** */}
    {/* ********************** */}
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      {/* ******************************* */}
      {/* *** Icon+Subtitle Container *** */}
      {/* ******************************* */}
      <div className="flex flex-row items-center py-[6px] px-[4px] bg-discount-gradient rounded-[10px] mb-2 ">
        {/* ************ */}
        {/* *** Icon *** */}
        {/* ************ */}
        <img src={discount} alt="discount icon" className="w-[32px] h-[32px]" />
        {/* **************** */}
        {/* *** Subtitle *** */}
        {/* **************** */}
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20%</span> Discount For{" "}
          <span className="text-white">1 Month</span> Account
        </p>
      </div>
      {/* ******************************** */}
      {/* *** Heading+Button Container *** */}
      {/* ******************************** */}
      <div className="flex flex-row justify-between items-center w-full">
        {/* *************** */}
        {/* *** Heading *** */}
        {/* *************** */}
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          The Next <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Generation</span>
        </h1>
        {/* ************** */}
        {/* *** Button *** */}
        {/* ************** */}
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
          {/* TODO add hover animation TODO */}
        </div>
      </div>
      {/* ********************* */}
      {/* *** Heading cont. *** */}
      {/* ********************* */}
      <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
        Payment Method
      </h1>
      {/* ********************** */}
      {/* *** Bottom caption *** */}
      {/* ********************** */}
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our team of experts uses a methodology to identify the credits cards
        most likely to fit your needs. We examine annual percentage rates,
        annual fees.
      </p>
    </div>

    {/* *********************** */}
    {/* *** RIGHT CONTAINER *** */}
    {/* *********************** */}
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      {/* ************* */}
      {/* *** Image *** */}
      {/* ************* */}
      <img
        src={robot}
        alt="robotic hand"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      {/* ***************** */}
      {/* *** Gradients *** */}
      {/* ***************** */}
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>
    {/* ********************* */}
    {/* *** Mobile Button *** */}
    {/* ********************* */}
    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted /> {/* TODO add hover animation TODO */}
    </div>
  </section>
);

export default Hero;
