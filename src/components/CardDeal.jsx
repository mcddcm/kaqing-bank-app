import { card } from "../assets";
import styles, { layout } from "../styles";
import Button from "./Button";

const CardDeal = () => (
  // ***************
  // *** WRAPPER ***
  // ***************
  <section className={layout.section}>
    {/* ********************** */}
    {/* *** LEFT CONTAINER *** */}
    {/* ********************** */}
    <div className={layout.sectionInfo}>
      {/* *************** */}
      {/* *** Heading *** */}
      {/* *************** */}
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in a few easy
        steps.
      </h2>
      {/* *************** */}
      {/* *** Caption *** */}
      {/* *************** */}
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        excepturi veritatis sunt nobis accusamus consectetur velit magnam sit
        vero cumque.
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
      <img src={card} alt="credit card deal" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
