import { clash_display } from "@/utils/fonts";
import {
  AddressIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  PhoneCallingIcon,
  XIcon,
} from "@/utils/svgs";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#100B20] pb-11 pt-14 md:pt-20">
      <div className="max-w-xs mx-auto md:max-w-3xl lg:max-w-7xl px-4 text-xs flex flex-col md:flex-row md:justify-between">
        <div className="max-w-[288px]">
          <h1
            className={`${clash_display.className} text-[15px] font-bold md:text-[30px] mb-3 md:mb-4`}
          >
            get<span className="text-light">linked</span>
          </h1>
          <p>
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </p>
          <p className="mt-10">
            Terms of Use<span className="border border-light mx-1"></span>
            Privacy Policy
          </p>
        </div>
        <div className="mt-8 md:mt-0">
          <h3 className="text-sm leading-[172.4%;] font-semibold text-light">
            Useful Links
          </h3>
          <ul className="flex flex-col gap-3 md:mt-3">
            <li>
              <Link href={"#overview"}> Overview </Link>
            </li>
            <li>
              <Link href={"#timeline"}> Timeline </Link>
            </li>
            <li>
              <Link href={"#faq"}> FAQs </Link>
            </li>

            <li>
              <Link href={"/register"}>Register</Link>
            </li>
            <li className="flex items-center gap-4">
              <span className="text-light">Follow us</span>
              <a href="https://www.instagram.com/" target="_blank">
                <InstagramIcon />
              </a>
              <a href="https://www.x.com/" target="_blank">
                <XIcon />
              </a>
              <a href="https://www.facebook.com/" target="_blank">
                <FacebookIcon />
              </a>
              <a href="https://www.linkedin.com/" target="_blank">
                <LinkedinIcon />
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-16 md:mt-0">
          <h3 className="text-sm leading-[172.4%;] font-semibold text-light">
            Contact Us
          </h3>
          <ul className="flex flex-col gap-3 md:mt-4">
            <li className="flex gap-4">
              <span>
                <PhoneCallingIcon />
              </span>
              <span>+234 6707653444</span>
            </li>
            <li className="flex gap-4">
              <span>
                <AddressIcon />
              </span>
              <span className="w-24">
                27,Alara Street Yaba 100012 Lagos State.
              </span>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-xs text-center mt-16">
        All rights reserved. © getlinked Ltd.
      </p>
    </footer>
  );
};
export default Footer;
