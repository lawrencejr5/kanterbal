import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Featured from "./components/Featured";
import WhyCard from "./components/WhyCard";
import { FaExchangeAlt } from "react-icons/fa";
import { FaEarthAfrica, FaRotate } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="main">
      <Nav />
      <Banner />
      <Featured />
      <section className="banner2">
        <h1>Why should I use Kanterbal?</h1>
        <div className="card-container">
          <WhyCard
            text={"Exchange without any fees"}
            icon={<FaExchangeAlt />}
          />
          <WhyCard text={"Saving our mother earth"} icon={<FaEarthAfrica />} />
          <WhyCard text={"Seamless freecycle"} icon={<FaRotate />} />
        </div>
      </section>
    </main>
  );
}
