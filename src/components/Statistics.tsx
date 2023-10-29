import { statistics } from "../util/constants";
import { styles } from "../util/style";

const Statistics = (): JSX.Element => {
  return (
    <div className={`sm:mb-20 mb-6${styles.flexStart} flex-row flex-wrap`}>
      {statistics.map((stat) => (
        <div
          key={stat.id}
          className={`m-3 flex justify-start items-center flex-1 flex-row`}
        >
          <h4 className="xs:text-[41px] text-[30px] xs:leading-[53px] leading-[43px] font-montserrat font-semibold text-white">
            {stat.value}
          </h4>
          <p className="ml-3 font-montserrat font-normal xs:text-[20px] text-[16px] xs:leading-[26px] leading-[20px] text-gradient uppercase">
            {stat.title}
          </p>
        </div>
      ))}
    </div>
  );
};
export default Statistics;
