import { clash_display } from "@/utils/fonts";
import Menu from "./Menu";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="h-[70px] flex items-center md:h-[100px] z-40 md:px-0 absolute left-0 top-0 w-full border-b border-b-[#ffffff2d]">
      <div className="my-container flex items-center justify-between w-full ">
        <h1
          className={`${clash_display.className} text-[15px] font-bold lg:text-[36px]`}
        >
          <Link href={"/"}>
            get<span className="text-light">linked</span>
          </Link>
        </h1>
        <ul className="hidden items-center gap-6 lg:gap-14 md:flex nav-links-hover">
          <li>
            <Link href={"/#timeline"}>Timeline</Link>
          </li>
          <li>
            <Link href={"/#overview"}>Overview</Link>
          </li>
          <li>
            <Link href={"/#faq"}>FAQs</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
          <li className="ml-2 lg:ml-16">
            <Link
              className="primary-btn  h-[53px] w-[172px]"
              href={"/register"}
            >
              Register
            </Link>
          </li>
        </ul>
        <Menu />
      </div>
    </nav>
  );
};
export default Navbar;

// color: #FFF;
// font-family: Clash Display;
// font-size: 15px;
// font-style: normal;
// font-weight: 700;
// line-height: normal;
