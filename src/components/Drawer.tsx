import React from "react";
import LogoButton from "./buttons/LogoButton";
import MenuButton from "./buttons/MenuButton";
import { useTranslations } from "next-intl";

const Drawer = () => {
  const t = useTranslations("Drawer");
  return (
    <>
      <div className="drawer w-14">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="">
          {/* Page content here */}
          <label
            htmlFor="my-drawer"
            className="hover:bg-neutral-200 btn-circle swap swap-rotate"
          >
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" />

            {/* hamburger icon */}
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>

            {/* close icon */}
            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-64 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <LogoButton />
            <div className="h-4"></div>
            <div className="">
              <ul>
                <li>
                  <MenuButton
                    optionText={t("category")}
                    icon="iconamoon:category"
                    targetLink=""
                    routeLink="/"
                    color=""
                  />
                </li>
                <li>
                  <MenuButton
                    optionText={t("bag")}
                    icon="mdi:shopping-outline"
                    targetLink=""
                    routeLink=""
                    color=""
                  />
                </li>
                <li>
                  <MenuButton
                    optionText={t("aboutUs")}
                    icon="mdi:shopping-outline"
                    targetLink=""
                    routeLink="/about"
                    color=""
                  />
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Drawer;
