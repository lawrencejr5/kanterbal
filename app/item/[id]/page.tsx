import React from "react";
import { FaRegBookmark, FaExchangeAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import BackNav from "../../components/BackNav";

interface ItemsPageProps {
  params: {
    id: string;
  };
}

const ItemsPage: React.FC<ItemsPageProps> = async ({ params }) => {
  const id = (await params).id;

  return (
    <main className="items-page-container">
      <BackNav />
      <section className="items-page-layout">
        <img src="/images/items/stuggart-mercedes.jpg" alt="" />
        <div className="r-layout">
          <div className="name">
            <p>Stuggart Mercedes 1946 </p> <FaRegBookmark className="icon" />
          </div>
          <div className="user-location">
            <button className="user">
              <img src="/images/profile.jpg" alt="" />
              &nbsp;
              <span>lawrencejr</span>
            </button>
            <button className="location">
              <FaLocationDot className="icon" />
              &nbsp;
              <span>Asaba, Nigeria</span>
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
