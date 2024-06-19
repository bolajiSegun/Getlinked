"use client";
import { CloseIcon, MenuIcon } from "@/utils/svgs";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    if (isOpen) {
      setIsOpen(false), document.body.classList.remove("active-menu");
    } else {
      setIsOpen(true), document.body.classList.add("active-menu");
    }
  };

  return (
    <div className="md:hidden">
      <span onClick={toggleMenu}>
        <MenuIcon />
      </span>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.3 } }}
          className="absolute w-screen min-h-screen backdrop-blur-md top-0 left-0 bg-[rgba(255,255,255,0.13)]"
          onClick={toggleMenu}
        >
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: 492,
              transition: { duration: 0.5, delay: 0.35 },
            }}
            className="absolute pt-10 h-[492px] px-12 top-0 left-0 bg-dark w-full backdrop-blur-[30px] z-50 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <span onClick={toggleMenu} className="ml-auto mb-14 block w-fit">
              <CloseIcon />
            </span>
            <ul className="flex flex-col gap-5 nav-links-hover">
              <li>
                <Link onClick={toggleMenu} href={"/#timeline"}>
                  Timeline
                </Link>
              </li>
              <li>
                <Link onClick={toggleMenu} href={"/#overveiw"}>
                  Overview
                </Link>
              </li>
              <li>
                <Link onClick={toggleMenu} href={"/#faq"}>
                  FAQs
                </Link>
              </li>
              <li>
                <Link onClick={toggleMenu} href={"/contact"}>
                  Contact
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  onClick={toggleMenu}
                  className="primary-btn h-[53px] w-[172px]"
                  href={"/register"}
                >
                  Register
                </Link>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Menu;
