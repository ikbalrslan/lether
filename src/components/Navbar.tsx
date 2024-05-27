import React from "react";
import SocialCard from "./social/SocialCard";
import Drawer from "./Drawer";
import { useTranslations } from "next-intl";

interface Details {
  title: string;
}
const Navbar = (probs: Details) => {
  const t = useTranslations("Navbar");
  return (
    <>
      <div className="flex">
        <Drawer />
        <div className="">
          <a href="/">
            <img src="/logo.png" alt="logo" className="w-12" />
          </a>
        </div>
      </div>
      <div className="px-2 py-2">
        <div className="font-medium text-slate-900">{probs.title}</div>
        <a href="/">
          <img src="/brand.png" alt="logo" className="w-24 -ml-0.5" />
        </a>
      </div>

      <div className="flex justify-between">
        <SocialCard
          optionText={t("bag")}
          icon="mdi:shopping-outline"
          targetLink=""
          routeLink=""
          color=""
        />
        {/* <SocialCard
            optionText="Social"
            icon="mdi:instagram"
            targetLink="_blank"
            routeLink="https://www.instagram.com/arslanleatherco/"
            color=""
          /> */}
      </div>
    </>
  );
};

export default Navbar;
