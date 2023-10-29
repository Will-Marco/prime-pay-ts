import {
  Navbar,
  Home,
  Statistics,
  Contract,
  Billing,
  Business,
  Cta,
  Testimonials,
  Clients,
  Footer,
} from "./components";
import { styles } from "./util/style";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      {/*Navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.container}`}>
          <Navbar />
        </div>
      </div>

      {/* Hero section */}
      <div className={styles.flexStart}>
        <div className={styles.container}>
          <Home />
        </div>
      </div>

      {/* Hero section */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={styles.container}>
          <Statistics />
          <Contract />
          <Billing />
          <Business />
          <Testimonials />
          <Clients />
          <Cta />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
