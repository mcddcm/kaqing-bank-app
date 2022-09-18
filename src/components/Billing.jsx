import { apple, bill, google } from "../assets";
import styles, { layout } from "../styles";

const Billing = () => (
  // ***************
  // *** WRAPPER ***
  // ***************
  <section id="product" className={layout.sectionReverse}>
    {/* ********************** */}
    {/* *** LEFT CONTAINER *** */}
    {/* ********************** */}
    <div className={`${layout.sectionImgReverse}`}>
      {/* ************* */}
      {/* *** Image *** */}
      {/* ************* */}
      <img
        src={bill}
        alt="billing screenshots"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      {/* ***************** */}
      {/* *** Gradients *** */}
      {/* ***************** */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>

    {/* *********************** */}
    {/* *** RIGHT CONTAINER *** */}
    {/* *********************** */}
    <div className={layout.sectionInfo}>
      {/* *************** */}
      {/* *** Heading *** */}
      {/* *************** */}
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing.
      </h2>
      {/* *************** */}
      {/* *** Caption *** */}
      {/* *************** */}
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi iure est
        doloremque dolores esse in, dolorem fuga necessitatibus id quod
        obcaecati explicabo.
      </p>

      {/* *************** */}
      {/* *** Buttons *** */}
      {/* *************** */}
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        {/* ************* */}
        {/* *** Apple *** */}
        {/* ************* */}
        <img
          src={apple}
          alt="apple store icon"
          className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
        />
        {/* ************** */}
        {/* *** Google *** */}
        {/* ************** */}
        <img
          src={google}
          alt="google play store icon"
          className="w-[128px] h-[42px] object-contain cursor-pointer"
        />
      </div>
    </div>
  </section>
);

export default Billing;
