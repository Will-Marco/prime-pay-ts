import { CiDiscount1 } from "react-icons/ci";
import { styles } from "../util/style";
import { robot } from "../assets";
import { Button } from "./";

const Home = (): JSX.Element => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      {/* Animation image */}
      <div className={`md:my-0 my-10 flex-1 ${styles.flexStart}`}>
        <img src={robot} alt="robot" className="2-[100%] relative z-10" />
      </div>

      {/* Information */}
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:p-0 ${styles.paddingX} relative`}
      >
        {/* Discount information */}
        <div className="flex flex-row items-center mb-2 py-[6px] px-4 rounded-[10px] bg-slate-500 bg-discount-gradient">
          <CiDiscount1 className="mr-2 text-[30px] text-white" />
          <p className={`${styles.paragraph} capitalize`}>
            <span className="text-white">20%</span> chegirma{" "}
            <span className="text-white">1 oylik</span> xisob uchun
          </p>
        </div>

        {/* Titile */}
        <div className="w-full">
          <h1 className={`${styles.heading1}`}>
            Yangi Avlod <br />
            <span className="text-gradient">To`lov Usuli</span>
          </h1>
        </div>

        {/* Description */}
        <p className={`mt-5 ${styles.paragraph} max-w-[550px]`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          deserunt perferendis blanditiis et veniam ullam exercitationem quam
          eum, doloremque pariatur!
        </p>

        {/* Getting started */}
        <Button styles={"mt-2"} />

        {/* Gradient bg */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
        <div className="absolute z-[1] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
    </section>
  );
};

export default Home;
