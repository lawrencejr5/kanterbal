import React from "react";
import { FaRegBookmark, FaExchangeAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import BackNav from "../../components/BackNav";
import Item from "../../components/reuse/Item";
import Footer from "@/app/components/Footer";

import { featured, items } from "../../data/items";

interface ItemsPageProps {
  params: {
    id: string;
  };
}

interface ItemType {
  id: string;
  name: string;
  location: string;
  img: string;
  user: string;
  userImg: string;
}

const ItemsPage: React.FC<ItemsPageProps> = async ({ params }) => {
  const id = (await params).id;

  const item = items.find((item) => item.id === id);

  return (
    <main className="items-page-container">
      <BackNav />
      <section className="items-page-layout">
        <img src={`/images/items/${item?.img}`} alt="" />
        <div className="r-layout">
          <div className="name">
            <p>{item?.name} </p> <FaRegBookmark className="icon" />
          </div>
          <div className="user-location">
            <button className="user">
              <img src={`/images/users/${item?.userImg}`} alt="" />
              &nbsp;
              <span>{item?.user}</span>
            </button>
            <button className="location">
              <FaLocationDot className="icon" />
              &nbsp;
              <span>{item?.location}</span>
            </button>
          </div>
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
      <section className="related">
        <h1>Related to this item</h1>
        <div className="items-container">
          {featured.slice(0, 4).map((item, i) => {
            return <Item key={i} data={item} />;
          })}
        </div>
      </section>
      <section className="related">
        <h1>Items by this user</h1>
      </section>
      <Footer />
    </main>
  );
};

export default ItemsPage;

// Adjusting the function to return the expected structure
// export async function generateStaticParams() {
//   // Define your static params
//   return [
//     { params: { id: "1" } },
//     { params: { id: "2" } },
//     // Add more parameters as needed
//   ];
// }
