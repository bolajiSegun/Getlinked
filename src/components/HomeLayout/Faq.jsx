"use client";
import Image from "next/image";
import Questions from "./Questions";
import { motion } from "framer-motion";
import { clash_display } from "@/utils/fonts";
import BgStars from "../BgStars";

const Faq = () => {
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
    <section
      id="faq"
      className="border-b border-b-[#ffffff2d] pt-16 pb-12 lg:pb-16 relative"
    >
      <BgStars />
      <div className="my-container flex gap-4 flex-col-reverse items-center justify-between md:flex-row-reverse">
        <CustomDiv
          initial="hide"
          whileInView="show"
          viewport={{ once: true }}
          variants={slideInOnScroll}
          className="w-full max-w-[327px] md:max-w-[741px] xl:min-w-[741px] imageSlideInLeft"
        >
          <Image
            src={"/img/man-on-cloud.png"}
            alt="man-on-cloud"
            sizes="100vw"
            width={741}
            height={781}
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
          className="w-full max-w-[535px] contentSlideInUp"
        >
          <h3 className={`${clash_display.className} section-title`}>
            Frequently Ask
            <br />
            <span>Question</span>
          </h3>
          <p className="section-desc">
            We got answers to the questions that you might want to ask about
            getlinked Hackathon 1.0
          </p>
          <Questions />
        </CustomDiv>
      </div>
    </section>
  );
};
export default Faq;
