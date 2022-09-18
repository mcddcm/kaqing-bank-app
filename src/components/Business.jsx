import { features } from "../constants";
import styles, { layout } from "../styles";
import Button from "./Button";

// ********************
// *** FEATURE CARD ***
// ********************
const FeatureCard = ({ icon, title, content, index }) => (
  // *****************
  // *** Container ***
  // *****************
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    {/* *********************** */}
    {/* *** Card Background *** */}
    {/* *********************** */}
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      {/* ************ */}
      {/* *** Icon *** */}
      {/* ************ */}
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    {/* ********************* */}
    {/* *** Title+Content *** */}
    {/* ********************* */}
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
);

// ********************
// *** MAIN SECTION ***
// ********************
const Business = () => (
  // ***************
  // *** WRAPPER ***
  // ***************
  <section id="features" className={layout.section}>
    {/* ********************** */}
    {/* *** LEFT CONTAINER *** */}
    {/* ********************** */}
    <div className={layout.sectionInfo}>
      {/* *************** */}
      {/* *** Heading *** */}
      {/* *************** */}
      <h2 className={styles.heading2}>
        You do the business, <br className="sm:block hidden" /> we'll handle the
        money.
      </h2>
      {/* *************** */}
      {/* *** Caption *** */}
      {/* *************** */}
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right credit card, you can imrpove your financial life by
        building credit, earning rewards and saving money. But with hundreds of
        credit cards on the market.
      </p>
      {/* ************** */}
      {/* *** Button *** */}
      {/* ************** */}
      <Button styles="mt-10" />
    </div>

    {/* *********************** */}
    {/* *** RIGHT CONTAINER *** */}
    {/* *********************** */}
    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
