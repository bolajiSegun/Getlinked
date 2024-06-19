"use client";
import { clash_display } from "@/utils/fonts";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import BgStars from "../BgStars";

const Overview = () => {
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
    <>
      <section id="overview" className="border-b border-b-[#ffffff2d] relative">
        <BgStars />
        <div className="my-container flex gap-16 flex-col items-center justify-between md:flex-row pt-7 pb-12 md:pt-16 md:pb-20">
          <CustomDiv
            initial="hide"
            whileInView="show"
            viewport={{ once: true }}
            variants={slideInOnScroll}
            className="w-full max-w-[264px] md:max-w-[490px] imageSlideInRight"
          >
            <Image
              src={"/img/the-big-idea.png"}
              alt=""
              sizes="100vw"
              width={490}
              height={477}
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
              Introduction to getlinked <br />
              <span>tech Hackathon 1.0</span>
            </h3>
            <p className="section-desc">
              {
                " Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have   the chance to transform your ideas into reality. Solving   real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!"
              }
            </p>
          </CustomDiv>
        </div>
      </section>
      <section className="border-b border-b-[#ffffff2d] rules-guideliness relative">
        <BgStars />
        <div className="my-container flex gap-4 flex-col items-center justify-between md:flex-row-reverse pb-12">
          <CustomDiv
            initial="hide"
            whileInView="show"
            viewport={{ once: true }}
            variants={slideInOnScroll}
            className="w-full max-w-[294px] md:max-w-[664px] xl:w-[664px] imageSlideInLeft"
          >
            <Image
              src={"/img/lady-chair.png"}
              alt="lady-on-chair"
              sizes="100vw"
              width={664}
              height={664}
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
              Rules and
              <br />
              <span>Guidelines</span>
            </h3>
            <p className="section-desc">
              {
                " Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!"
              }
            </p>
          </CustomDiv>
        </div>
      </section>
      <section id="jud-crt" className="border-b border-b-[#ffffff2d] relative">
        <BgStars />
        <div className="my-container flex gap-4 flex-col items-center justify-between lg:flex-row pt-20 pb-14 lg:pb-44 lg:pt-24">
          <CustomDiv
            initial="hide"
            whileInView="show"
            viewport={{ once: true }}
            variants={slideInOnScroll}
            className="w-full max-w-[332px] lg:max-w-[710px] xl:min-w-[710px] imageSlideInRight"
          >
            <Image
              src={"/img/people.png"}
              alt="people"
              sizes="100vw"
              width={710}
              height={587}
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
            className="w-full lg:max-w-[535px] contentSlideInUp"
          >
            <h3 className={`${clash_display.className} section-title`}>
              Judging Criteria
              <br />
              <span>Key attributes</span>
            </h3>
            <div className="section-desc w-full flex flex-col md:flex-row gap-5 md:flex-wrap justify-between lg:flex-col lg:flex-nowrap">
              <p>
                <strong>Innovation and Creativity:&nbsp;</strong>
                Evaluate the uniqueness and creativity of the solution. Consider
                whether it addresses a real-world problem in a novel way or
                introduces innovative features.
              </p>
              <p>
                <strong>Functionality: &nbsp;</strong> Assess how well the
                solution works. Does it perform its intended functions
                effectively and without major issues? Judges would consider the
                completeness and robustness of the solution.
              </p>
              <p>
                <strong> Assess how Impact and Relevance: &nbsp;</strong>{" "}
                Determine the potential impact of the solution in the real
                world. Does it address a significant problem, and is it relevant
                to the target audience? Judges would assess the potential
                social, economic, or environmental benefits.
              </p>
              <p>
                <strong> Technical Complexity: &nbsp;</strong>
                Evaluate the technical sophistication of the solution. Judges
                would consider the complexity of the code, the use of advanced
                technologies or algorithms, and the scalability of the solution.
              </p>
              <p>
                <strong> Adherence to Hackathon Rules: &nbsp;</strong>
                Judges will Ensure that the team adhered to the rules and
                guidelines of the hackathon, including deadlines, use of
                specific technologies or APIs, and any other
                competition-specific requirements.
              </p>
            </div>
            <Link
              href={"/"}
              className="primary-btn mt-5 md:mt-14 h-[32px] w-[96px] md:h-[53px] md:w-[172px] mx-auto md:mx-0"
            >
              Read More
            </Link>
          </CustomDiv>
        </div>
      </section>
    </>
  );
};
export default Overview;
