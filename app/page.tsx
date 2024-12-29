import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Featured from "./components/Featured";
import WhyCard from "./components/WhyCard";
import FaqsCard from "./components/FaqsCard";
import Footer from "./components/Footer";
import Item from "./components/reuse/Item";

import { items, featured } from "./data/items";
import { faqsData } from "./data/faqs";
import { whyData } from "./data/why";

export default function Home() {
  return (
    <main className="main">
      <Nav />
      <Banner />
      <section className="featured-container">
        <h1>Featured today</h1>
        <div className="featured-item-container">
          {featured.map((item, i) => {
            return <Item key={i} data={item} />;
          })}
        </div>
      </section>
      <section className="new-container">
        <h1>Newest items</h1>
        <div className="items-container">
          {items.slice(0, 12).map((item, i) => {
            return <Item key={i} data={item} />;
          })}
        </div>
        <div className="btn-container">
          <button>View more&nbsp;&rarr;</button>
        </div>
      </section>
      <section className="why-card-banner">
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
