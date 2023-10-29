import { FunctionComponent } from "react";

interface Props {
  styles?: string;
}

const Button: FunctionComponent<Props> = ({ styles }): JSX.Element => {
  return (
    <div
      className={`py-3 px-6 font-montserrat font-medium text-[18px] bg-blue-gradient 
        rounded-[10px] outline-none cursor-pointer transition-transform 
        duration-300 hover:translate-y-[-3px] ${styles}`}
    >
      Button
    </div>
  );
};

export default Button;
