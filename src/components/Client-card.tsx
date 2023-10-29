import { FunctionComponent } from "react";
import { styles } from "../util/style";

interface Props {
  logo: JSX.Element;
  title: string;
}

const ClientCard: FunctionComponent<Props> = ({ logo, title }): JSX.Element => {
  return (
    <div
      className={`sm:min-w-[192px] min-w-[120px] m-5 ${styles.flexCenter} flex-1 cursor-pointer`}
    >
      {logo}
      <p className={`${styles.paragraph} font-semibold text-gradient`}>
        {title}
      </p>
    </div>
  );
};

export default ClientCard;
