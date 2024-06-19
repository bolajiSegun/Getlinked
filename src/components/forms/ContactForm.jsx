"use client";
import { clash_display } from "@/utils/fonts";
import {
  BackIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  XIcon,
} from "@/utils/svgs";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ContactForm = () => {
  const router = useRouter();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    phone_number: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation (e.g., checking if the email is not empty)
    const values = Object.values(formData);
    const checkInput = values.some((value) => {
      if (value === "") {
        setError(true);
        return true;
      }
      return false;
    });
    if (!checkInput) {
      setSuccess(true);
      // Clear the form fields
      setFormData({
        first_name: "",
        phone_number: "",
        email: "",
        message: "",
      });
    }
  };
  return (
    <>
      <div
        onClick={() => router.back()}
        className="md:hidden my-6 cursor-pointer"
      >
        <BackIcon />
      </div>
      <p className={`${clash_display.className} text-light text-xl md:w-80`}>
        {" "}
        Questions or need assistance? Let us know about it
      </p>
      <p className="text-xs md:text-sm my-6 md:w-80">
        Email us below to any question related to our event
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="first_name"
          placeholder="Name"
          value={formData.first_name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone_number"
          placeholder="Phone Number"
          value={formData.phone_number}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Message"
          id="message"
          cols="10"
          rows="5"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        {error && (
          <p className="italic text-red-500">
            {
              " **Please all fields are required (You can't leave any field blank)** "
            }
          </p>
        )}

        <button
          className="primary-btn w-[172px] h-[53px] md:w-full"
          type="submit"
        >
          Submit
        </button>
      </form>
      <p className="text-xs md:text-sm text-center mt-10 text-light md:hidden">
        Share on
      </p>
      <div className="flex md:hidden items-center justify-center gap-2">
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
      </div>
      {success && <SuccessMessage />}
    </>
  );
};
export default ContactForm;

const SuccessMessage = () => {
  return (
    <div className="fixed top-0 left-0 w-screen min-h-screen h-full flex justify-center items-center px-10 bg-[rgba(21,14,40,0.93)] z-50">
      <div className="w-full max-w-sm md:max-w-lg rounded-xl  border border-light p-10 bg-[rgba(255,255,255,0.03)]">
        <div className="max-w-[150px] md:max-w-[250px] mx-auto">
          <Image
            src={"/img/congratulation.png"}
            width={427}
            height={321}
            alt="done"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        <div className="text-center font-semibold">
          <p className="md:text-[2rem]">Message sent successfully!</p>
          <p className="text-xs font-medium md:font-semibold md:text-sm">
            check your mail box for response
          </p>
          <Link className="primary-btn h-[53px] mt-10" href={"/"}>
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};
