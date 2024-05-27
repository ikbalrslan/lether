import Image from "next/image";

import { useTranslations } from "next-intl";
import Content from "../components/Content";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <main>
      <Content />
    </main>
  );
  // return <h1>{t('title')}</h1>;
}
