"use client";

import { clash_display } from "@/utils/fonts";
import { motion } from "framer-motion";
import BgStars from "../BgStars";
const timeline = [
  {
    id: 1,
    title: "Hackathon Announcement",
    desc: "The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register ",
    date: "November 18, 2023",
  },
  {
    id: 2,
    title: "Teams Registration begins",
    desc: "Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register",
    date: "November 18, 2023",
  },
  {
    id: 3,
    title: "Teams Registration ends",
    desc: "Interested Participants are no longer Allowed to  register",
    date: "November 18, 2023",
  },
  {
    id: 4,
    title: "Announcement of the accepted teams and ideas",
    desc: "All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced",
    date: "November 18, 2023",
  },
  {
    id: 5,
    title: "Getlinked Hackathon 1.0 Offically Begins",
    desc: "Accepted teams can now proceed to build their ground breaking skill driven solutions",
    date: "November 18, 2023",
  },
  {
    id: 6,
    title: "Demo Day",
    desc: "Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day ",
    date: "November 18, 2023",
  },
];

const Timeline = () => {
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
  const GrowOnScroll = {
    hide: {
      height: 0,
    },
    show: {
      height: "var(--height)",
      transition: {
        duration: 1.6,
      },
    },
  };
  return (
    <section id="timeline" className="border-b border-b-[#ffffff2d] relative">
      <BgStars />
      <div className="my-container flex gap-12 flex-col items-center justify-between py-10 lg:py-24">
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
            Timeline
          </h3>
          <p className="section-desc !text-center">
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </p>
        </CustomDiv>
        <div className="w-full">
          <ul className="text-xs text-light font-bold md:text-2xl">
            {timeline.map((tm) => (
              <li key={tm.id} className="mb-4 lg:mb-0 timeline">
                <motion.span
                  initial="hide"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={GrowOnScroll}
                  className="hidden border-[4px] w-0 mx-auto -mb-6 [--height:95px] lg:block border-light"
                ></motion.span>
                <div className="lg:h-28 lg:flex items-center lg:text-end">
                  <div className="flex mb-2 gap-4 lg:w-2/5">
                    <span className="flex-none flex justify-center w-5 md:w-14 lg:hidden">
                      <motion.span
                        initial="hide"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={GrowOnScroll}
                        className="border-2 border-light [--height:77px]"
                      ></motion.span>
                    </span>
                    <CustomDiv
                      initial="hide"
                      whileInView="show"
                      viewport={{ once: true }}
                      variants={slideInOnScroll}
                      className="timelineDetails"
                    >
                      <p>{tm.title}</p>
                      <p className="text-white font-normal md:text-sm">
                        {tm.desc}
                      </p>
                    </CustomDiv>
                  </div>

                  <span className="text-white hidden lg:flex justify-center items-center rounded-full aspect-square w-5 lg:w-14 mx-auto bg-light">
                    {tm.id}
                  </span>

                  <div className="flex gap-4 items-center lg:w-2/5">
                    <span className="text-white flex flex-none justify-center items-center rounded-full aspect-square w-5 md:w-14 lg:hidden bg-light">
                      {tm.id}
                    </span>
                    <motion.p
                      initial="hide"
                      whileInView="show"
                      viewport={{ once: true }}
                      variants={slideInOnScroll}
                      className="lg:w-full text-start timeline-date"
                    >
                      {tm.date}
                    </motion.p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Timeline;
