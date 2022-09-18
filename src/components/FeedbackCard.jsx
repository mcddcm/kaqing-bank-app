import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => (
  // ***************
  // *** Wrapper ***
  // ***************
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    {/* ************************* */}
    {/* *** Speechmarks Image *** */}
    {/* ************************* */}
    <img
      src={quotes}
      alt="quotation marks"
      className="w-[42px] h-[27px] object-contain"
    />
    {/* *************** */}
    {/* *** Content *** */}
    {/* *************** */}
    <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">
      {content}
    </p>
    {/* ********************************** */}
    {/* *** Image+Name+Title Container *** */}
    {/* ********************************** */}
    <div className="flex flex-row">
      {/* ************* */}
      {/* *** Image *** */}
      {/* ************* */}
      <img src={img} alt={name} className="w-[40px] h-[40px] rounded-full" />
      {/* **************************** */}
      {/* *** Name+Title Container *** */}
      {/* **************************** */}
      <div className="flex flex-col ml-4">
        {/* ************ */}
        {/* *** Name *** */}
        {/* ************ */}
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
        {/* ************* */}
        {/* *** Title *** */}
        {/* ************* */}
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
