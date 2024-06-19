import Image from "next/image";
import Link from "next/link";
import { clash_display } from "@/utils/fonts";
import { CurveLineDes, CurveLineMob } from "@/utils/svgs";
import Countdown from "./Countdown";
import BgStars from "../BgStars";

const Hero = () => {
  return (
    <header className="border-b border-b-[#ffffff2d]">
      <div className="my-container relative">
        <BgStars />
        <p className="relative text-sm font-bold italic w-fit mt-8 sm:text-base md:text-2xl lg:text-4xl mx-auto lg:mr-0 mb-10 lg:mb-24">
          Igniting a Revolution in HR Innovation
          <span className="ml-auto block w-fit">
            <CurveLineMob className="lg:hidden" />
            <CurveLineDes className="hidden lg:inline-block" />
          </span>
        </p>
        <div className="flex items-center flex-col lg:items-start">
          <div
            className={`${clash_display.className} flex items-center flex-col lg:items-start`}
          >
            <h2 className="relative">
              getlinked Tech
              <div className="w-[18px] absolute -top-3 right-4 sm:w-[27px] sm:-top-4 md:w-[35px] md:-top-6 lg:w-[53px] lg:-top-11 xl:right-8 xl:-top-8">
                <Image
                  src={"/img/creative.png"}
                  alt="creative"
                  sizes="75px"
                  width={53}
                  height={73}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
            </h2>
            <div className="flex items-center">
              <h2 className="relative">
                Hackathon <span className="text-light">1.0</span>
              </h2>
              <div className="relative w-[32.8px] lg:w-[86px] aspect-square">
                <Image
                  src={"/img/chain.png"}
                  alt="chain"
                  sizes="86px"
                  width={86}
                  height={86}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
              <div className="relative w-[22.1px] lg:w-[58px] aspect-square">
                <Image
                  src={"/img/blast.png"}
                  alt="blast"
                  sizes="58px"
                  width={58}
                  height={58}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
            </div>
          </div>
          <p className="text-center w-72 md:text-base md:w-[400px] lg:w-[500px] lg:text-start text-sm leading-6 lg:text-xl">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
          <Link
            className="mt-6 primary-btn h-[53px] w-[172px] lg:mt-10"
            href={"/register"}
          >
            Register
          </Link>
          <Countdown />
        </div>
      </div>
      <div className="lg:hidden">
        <div className="relative w-full mx-auto max-w-[640px] ">
          <Image
            src={"/img/hackathon-guy.png"}
            sizes="100vw"
            alt="hackathon-guy"
            quality={100}
            width={419.669}
            height={367.464}
            style={{
              objectFit: "contain",
              width: "100%",
              height: "auto",
              margin: "0 auto",
            }}
          />
        </div>
      </div>
    </header>
  );
};
export default Hero;
