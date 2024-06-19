import BgStars from "@/components/BgStars";
import ContactForm from "@/components/forms/ContactForm";
import { clash_display } from "@/utils/fonts";
import { FacebookIcon, InstagramIcon, LinkedinIcon, XIcon } from "@/utils/svgs";

const Contact = () => {
  return (
    <main className="contact relative">
      <BgStars />
      <div className="my-container pt-10 md:py-20 min-h-screen gap-10">
        <div className="justify-between flex gap-10 w-full">
          <div className="flex-col self-center text-base gap-6 hidden md:flex xl:mx-auto">
            <p className={`${clash_display.className} text-light text-[2rem]`}>
              Get in touch
            </p>
            <p>Contact Information</p>
            <p className="w-32">27,Alara Street Yaba 100012 Lagos State</p>
            <p>Call Us : 07067981819</p>
            <p className="w-40">
              we are open from Monday-Friday 08:00am - 05:00pm
            </p>
            <p className="mt-10 text-light">Share on</p>
            <div className="flex items-center gap-2">
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
          </div>
          <div className="w-full md:w-2/3 max-w-[600px] md:rounded-xl md:bg-[rgba(255,255,255,0.03)] px-10 md:p-10 lg:p-20">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
};
export default Contact;
