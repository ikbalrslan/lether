import Image from "next/image";
import Navbar from "../../../components/Navbar";
import Content from "../../../components/Content";
import AboutUs from "../../../components/AboutUs";
import { useTranslations } from "next-intl";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main>
      <AboutUs />
    </main>
  );
}
