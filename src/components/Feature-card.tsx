import { FunctionComponent } from "react";
import { features } from "../util/constants";
import { styles } from "../util/style";

interface Props {
  icon: JSX.Element;
  title: string;
  content: string;
  indx: number;
}

const FeatureCard: FunctionComponent<Props> = ({
  icon,
  title,
  content,
  indx,
}) => {
  return (
    <div
      className={`flex flex-row p-6 rounded-[20px] feature-card cursor-pointer ${
        indx === features.length - 1 ? "mb-0" : "mb-6"
      }`}
    >
      <div
        className={`w-[64px] h-[64px] ${styles.flexCenter} rounded-full bg-lightBlue`}
      >
        {icon}
      </div>

      <div className={`flex-1 flex flex-col ml-3`}>
        <h4
          className={`mb-1 font-montserrat font-semibold text-white text-[18px] leading-[23px]`}
        >
          {title}
        </h4>
        <p className="font-montserrat font-normal text-lightWhite text-[16px] leading-[24px]">
          {content}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
