import Image from "next/image";
import Navbar from "../../components/Navbar";
import Content from "../../components/Content";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <main>
      <Content />
    </main>
  );
  // return <h1>{t('title')}</h1>;
}
