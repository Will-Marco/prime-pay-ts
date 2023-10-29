import { clients } from "../util/constants";
import { styles } from "../util/style";
import { ClientCard } from "./";

const Clients = (): JSX.Element => {
  return (
    <div className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client, idx) => (
          <ClientCard key={idx} {...client} />
        ))}
      </div>
    </div>
  );
};

export default Clients;
