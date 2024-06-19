"use client";
import { clash_display } from "@/utils/fonts";
import { CircleCheckMark } from "@/utils/svgs";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import BgStars from "../BgStars";

const Terms = () => {
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
    <section className="border-b border-b-[#ffffff2d] terms relative">
      <BgStars />
      <div className="my-container flex gap-12 flex-col-reverse items-center justify-between md:flex-row-reverse relative pt-16 pb-20 md:py-40">
        <CustomDiv
          initial="hide"
          whileInView="show"
          viewport={{ once: true }}
          variants={slideInOnScroll}
          className="w-full max-w-[273px] md:max-w-[583px] xl:min-w-[583px] imageSlideInLeft"
        >
          <Image
            src={"/img/boy-on-lock.png"}
            alt="lady-on-chair"
            sizes="100vw"
            width={583}
            height={952}
            quality={100}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </CustomDiv>
        <div className="w-full max-w-[535px]">
          <CustomDiv
            initial="hide"
            whileInView="show"
            viewport={{ once: true }}
            variants={slideInOnScroll}
            className="contentSlideInUp"
          >
            <h3 className={`${clash_display.className} section-title`}>
              Privacy Policy and
              <br />
              <span>Terms</span>
            </h3>
            <p className="text-xs md:text-sm text-center md:text-start mb-7">
              Last updated on September 12, 2023
            </p>
            <p className="section-desc">
              Below are our privacy & policy, which outline a lot of goodies.
              it’s our aim to always take of our participant
            </p>
          </CustomDiv>
          <CustomDiv
            initial="hide"
            whileInView="show"
            viewport={{ once: true }}
            variants={slideInOnScroll}
            className="rounded-md border mt-8 md:mt-16 py-10 px-4 border-light bg-[#d9d9d908] text-xs md:text-sm contentSlideInUp"
          >
            <p className="text-center md:text-start">
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>
            <div className="mt-6">
              <p className="text-light text-sm font-bold">Licensing Policy</p>
              <p className="font-bold">
                Here are terms of our Standard License:
              </p>
              <div className="flex gap-4 mt-6">
                <span>
                  <CircleCheckMark />
                </span>
                <p>
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event
                </p>
              </div>
              <div className="flex gap-4 mt-6">
                <span>
                  <CircleCheckMark />
                </span>
                <p>
                  You are licensed to use the item available at any free source
                  sites, for your project developement
                </p>
              </div>
              <Link
                href={"/"}
                className="primary-btn mt-6 h-[32px] w-[96px] md:h-[53px] md:w-[172px] mx-auto md:mx-0"
              >
                Read More
              </Link>
            </div>
          </CustomDiv>
        </div>
      </div>
    </section>
  );
};
export default Terms;
