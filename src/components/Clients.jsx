import { clients } from "../constants";
import styles from "../styles";

const Clients = () => (
  // ***************
  // *** WRAPPER ***
  // ***************
  <section className={`${styles.flexCenter} my-4`}>
    {/* ***************** */}
    {/* *** Container *** */}
    {/* ***************** */}
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        // **********************
        // *** Logo Container ***
        // **********************
        <div
          key={client.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] py-6`}
        >
          {/* ************* */}
          {/* *** Logos *** */}
          {/* ************* */}
          <a href={client.link} target="_blank">
            <img
              src={client.logo}
              alt={client}
              className="sm:w-[192px] w-[100px] object-contain hover:brightness-200 cursor-pointer"
            />
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
