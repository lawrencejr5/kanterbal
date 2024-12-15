import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Featured from "./components/Featured";
import WhyCard from "./components/WhyCard";
import FaqsCard from "./components/FaqsCard";
import Footer from "./components/Footer";

import { faqsData } from "./data/faqs";
import { whyData } from "./data/why";

export default function Home() {
  return (
    <main className="main">
      <Nav />
      <Banner />
      <Featured />
      <section className="banner2">
        <h1>Why should I use Kanterbal?</h1>
        <div className="card-container">
          {whyData.map((data, i) => {
            return <WhyCard key={i} text={data.reason} icon={data.icon} />;
          })}
        </div>
      </section>
      <section className="faqs">
        <h1>Faqs</h1>
        <div className="faqs-container">
          {faqsData.map((faq, i) => {
            return (
              <FaqsCard key={i} question={faq.question} answer={faq.answer} />
            );
          })}
        </div>
      </section>
      <Footer />
    </main>
  );
}
