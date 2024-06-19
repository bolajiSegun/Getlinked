"use client";
import { clash_display } from "@/utils/fonts";
import { motion } from "framer-motion";
import Image from "next/image";
import BgStars from "../BgStars";

const Sponsors = () => {
  const CustomDiv = motion("div");
  const slideInOnScroll = {
    hide: {
      opacity: 0,
      y: "var(--slideUp, 0)",
      x: "var(--slide-in-from-side, 0)",
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <section className="border-b border-b-[#ffffff2d] sponsors relative">
      <BgStars />
      <div className="my-container flex gap-12 flex-col items-center justify-between py-10 md:py-24">
        <CustomDiv
          initial="hide"
          whileInView="show"
          viewport={{ once: true }}
          variants={slideInOnScroll}
          className="contentSlideInUp"
        >
          <h3
            className={`${clash_display.className} section-title !text-center`}
          >
            Partners and Sponsors
          </h3>
          <p className="section-desc !text-center">
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
        </CustomDiv>
        <CustomDiv
          initial="hide"
          whileInView="show"
          viewport={{ once: true }}
          variants={slideInOnScroll}
          className="contentSlideInUp w-full md:w-5/6 max-w-[1255]"
        >
          <Image
            src={"/img/sponsors.png"}
            alt="Sponsors"
            width={1255}
            height={560}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </CustomDiv>
      </div>
    </section>
  );
};
export default Sponsors;
