import Image from "next/image";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import AboutUs from "../components/AboutUs";

export default function Home() {
  return (
    <main data-theme="nord">
      <AboutUs />
    </main>
  );
}
