import { features } from "../util/constants";
import { layout, styles } from "../util/style";
import { Button, FeatureCard } from "./";

const Business = (): JSX.Element => {
  return (
    <section id="product" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Biznes rivojlantiring, <br className="sm:block hidden" /> pulni hal
          qilamiz.
        </h2>
        <p className={`max-w-[550px] mt-5 ${styles.paragraph}`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quos
          quod obcaecati magnam mollitia modi laudantium sit repudiandae
          exercitationem eum.
        </p>
        <Button styles={"mt-10"} />
      </div>
      <div className={`${layout.sectionImage} flex-col`}>
        {features.map((feature, idx) => (
          <FeatureCard key={feature.id} {...feature} indx={idx} />
        ))}
      </div>
    </section>
  );
};

export default Business;
