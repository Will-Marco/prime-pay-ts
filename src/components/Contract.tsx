import { contractImg } from "../assets";
import { layout, styles } from "../util/style";
import { Button } from "./";

const Contract = (): JSX.Element => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Bir necha oson qadamda <br className="sm:block hidden" />
          kontrakt tuzish
        </h2>
        <p className={`max-w-[550px] mt-5 ${styles.paragraph}`}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
          unde magni in laudantium dolorum ipsum nisi dolorem enim consectetur
          nam!
        </p>
        <Button styles={"mt-10"} />
      </div>
      <div className={layout.sectionImage}>
        <img src={contractImg} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default Contract;
