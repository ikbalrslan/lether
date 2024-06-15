import React from "react";
import SocialCard from "./social/SocialCard";
import Drawer from "./Drawer";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";

interface Details {
  title: string;
}
const Navbar = (probs: Details) => {
  const t = useTranslations("Navbar");
  return (
    <>
      <div className="flex w-44">
        <Drawer />
        <div className="">
          <a href="/">
            <img src="/logo.png" alt="logo" className="w-12" />
          </a>
        </div>
      </div>

      <a href="/">
        <img src="/brand.png" alt="logo" className="w-24" />
      </a>

      <div className="flex justify-between">
        <div className="mt-1 columns-[6rem]">
          <SocialCard
            optionText={t("bag")}
            icon="mdi:shopping-outline"
            targetLink=""
            routeLink=""
            color=""
          />
        </div>

        <LocaleSwitcher />
      </div>
    </>
  );
};

export default Navbar;
