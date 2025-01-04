import React from "react";
import { FaRegBookmark, FaExchangeAlt } from "react-icons/fa";

import BackNav from "../../components/BackNav";
import Item from "../../components/reuse/Item";
import Footer from "@/app/components/Footer";

import { featured, items } from "../../data/items";
import UserLocation from "@/app/components/UserLocation";

interface ItemsPageProps {
  params: Promise<{ id: string }>;
}

export const generateStaticParams = () => {
  // Define your static params
  return items.map((item) => {
    return { id: item.id };
  });
};

const ItemsPage: React.FC<ItemsPageProps> = async ({ params }) => {
  const { id } = await params;

  const item = items.find((item) => item.id === id);
  const userItems = items.filter((itm) => itm.user === item?.user);

  return (
    <main className="items-page-container">
      <BackNav />
      <section className="items-page-layout">
        <img src={`/images/items/${item?.img}`} alt="" />
        <div className="r-layout">
          <div className="name">
            <p>{item?.name} </p> <FaRegBookmark className="icon" />
          </div>
          <UserLocation item={item} />
          <div className="desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, ut
            fugit officia debitis error vitae, nam iste asperiores sapiente nemo
            suscipit ratione assumenda fuga quibusdam autem architecto quidem
            sint doloribus.
          </div>
          <div className="btn-holder">
            <button>
              Counter &nbsp;
              <FaExchangeAlt />
            </button>
          </div>
        </div>
      </section>
      <section className="featured-container">
        <h2>Related to this item</h2>
        <div className="featured-item-container">
          {featured.slice(0, 4).map((item, i) => {
            return <Item key={i} data={item} />;
          })}
        </div>
      </section>
      <section className="featured-container">
        <h2>Items by this user</h2>
        <div className="featured-item-container">
          {userItems.slice(0, 4).map((item, i) => {
            return <Item key={i} data={item} />;
          })}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default ItemsPage;

// Adjusting the function to return the expected structure
