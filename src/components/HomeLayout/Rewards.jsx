"use client";
import { clash_display } from "@/utils/fonts";
import { motion } from "framer-motion";
import Image from "next/image";
import BgStars from "../BgStars";

const Rewards = () => {
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
    <section className="border-b border-b-[#ffffff2d] rewards relative">
      <BgStars />
      <div className="my-container flex gap-12 md:gap-5 flex-col items-center justify-between pt-20 pb-24">
        <CustomDiv
          initial="hide"
          whileInView="show"
          viewport={{ once: true }}
          variants={slideInOnScroll}
          className="w-full max-w-[335px] md:max-w-[435px]  md:self-end contentSlideInUp"
        >
          <h3 className={`${clash_display.className} section-title`}>
            Prizes and
            <br />
            <span>Rewards</span>
          </h3>
          <p className="text-xs md:text-sm text-center md:text-start mb-7">
            Highlight of the prizes or rewards for winners and for participants.
          </p>
        </CustomDiv>
        <div className="flex w-full flex-col md:gap-5 md:flex-row ">
          <CustomDiv
            initial="hide"
            whileInView="show"
            viewport={{ once: true }}
            variants={slideInOnScroll}
            className=" w-full max-w-[321px] md:max-w-[548px] xl:min-w-[548px] mx-auto imageSlideInRight"
          >
            <Image
              src={"/img/trophy.png"}
              alt="trophy"
              sizes="100vw"
              width={548}
              height={482}
              quality={100}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </CustomDiv>
          <CustomDiv
            initial="hide"
            whileInView="show"
            viewport={{ once: true }}
            variants={slideInOnScroll}
            className="w-full mx-auto mt-20 max-w-[550px] md:max-w-2xl imageSlideInLeft"
          >
            <Image
              src={"/img/Rewards.png"}
              alt="Rewards"
              width={691}
              height={494}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </CustomDiv>
        </div>
      </div>
    </section>
  );
};
export default Rewards;
