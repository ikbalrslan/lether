"use client";
import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

interface Details {
  targetLink: string;
  routeLink: string;
  icon: string;
  optionText: string;
  color: string;
}
const SocialCard = (probs: Details) => {
  return (
    <>
      <Link target={probs.targetLink} href={probs.routeLink} className=" ">
        <div className="px-2 py-2 cursor-pointer hover:bg-neutral-200 rounded-md 0">
          <div className="flex gap-2 ml-0 text-sm font-medium text-slate-900">
            <Icon icon={probs.icon} style={{ fontSize: "20px", color:probs.color }} />
            {probs.optionText}
          </div>
        </div>
      </Link>
    </>
  );
};

export default SocialCard;
