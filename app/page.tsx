import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Featured from "./components/Featured";
import WhyCard from "./components/WhyCard";
import { FaExchangeAlt, FaRecycle } from "react-icons/fa";
import { FaEarthAfrica, FaPeopleGroup, FaRotate } from "react-icons/fa6";
import FaqsCard from "./components/FaqsCard";
import Footer from "./components/Footer";

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
            text={"Trade items directly without money"}
            icon={<FaExchangeAlt />}
          />
          <WhyCard text={"Saving our mother earth"} icon={<FaEarthAfrica />} />
          <WhyCard text={"Promoting freecycle"} icon={<FaRotate />} />
          <WhyCard
            text={"Build Community Connections"}
            icon={<FaPeopleGroup />}
          />
          <WhyCard text={"Reduce waste responsibly"} icon={<FaRecycle />} />
        </div>
      </section>
      <section className="faqs">
        <h1>Faqs</h1>
        <div className="faqs-container">
          <FaqsCard />
          <FaqsCard />
          <FaqsCard />
          <FaqsCard />
        </div>
      </section>
      <Footer />
    </main>
  );
}
