import Image from "next/image";
import Link from "next/link";

import Nav from "./components/Nav";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <main className="main">
      <Nav />
      <Banner />
    </main>
  );
}
