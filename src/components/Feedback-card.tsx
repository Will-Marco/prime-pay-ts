import { FunctionComponent } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { feedbacks } from "../util/constants";

interface Props {
  id: number;
  title: string;
  name: string;
  content: string;
}

const FeedbackCard: FunctionComponent<Props> = ({
  id,
  title,
  name,
  content,
}) => {
  return (
    <div
      id="clients"
      className={`${
        id === feedbacks.length
          ? "md:mr-0 sm:mr-0 mr-0"
          : "md:mr-10 sm:mr-5 mr-0"
      } max-w-[350px] px-10 py-12 flex justify-between items-start flex-col rounded-[20px] cursor-pointer feedback-card`}
    >
      <FaQuoteRight className="w-[42px] h-[27px] object-contain icons" />
      <p className="my-10 font-montserrat font-normal text-[18px] leading-[32px] text-white">
        {content}
      </p>
      <div className="flex flex-row ">
        <div className="w-[60px] h-[60px] flex justify-center items-center bg-dark-gradient rounded-full ">
          <p className="text-[22px] font-semibold font-montserrat text-gradient ">
            {name
              .split(" ")
              .map((string) => string[0])
              .join(".")}
          </p>
        </div>
        <div className="flex flex-col ml-4">
          <h4 className="font-montserrat font-semibold text-[20px] leading-[32px] text-white">
            {name}
          </h4>
          <p className="font-montserrat font-normal text-[16px] leading-[24px] text-lightWhite">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
