import BgStars from "@/components/BgStars";
import RegisterForm from "@/components/forms/RegisterForm";
import { clash_display } from "@/utils/fonts";
import Image from "next/image";

const Register = () => {
  return (
    <main className="register relative">
      <BgStars />
      <div className=" flex flex-col items-center my-container lg:flex-row min-h-screen lg:py-20">
        <h2
          className={`${clash_display.className} w-full font-bold text-light md:hidden`}
        >
          Register
        </h2>
        <div className="w-[195px] lg:w-full lg:max-w-[717px]">
          <Image
            src={"/img/3d-graphic-designer.png"}
            alt="3d-graphic-designer"
            width={717}
            height={717}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="w-full px-10 md:rounded-xl md:py-20 md:bg-[rgba(255,255,255,0.03)]">
          <h2
            className={`${clash_display.className} w-full font-bold text-light text-[2rem] mb-10 hidden md:block`}
          >
            Register
          </h2>
          <div className="flex gap-2 items-end mb-1">
            <p className="text-xs md:text-sm">Be part of this movement! </p>
            <Image
              alt="movement"
              src={"/img/movement.png"}
              width={100}
              height={30}
            />
          </div>
          <p className="text-xl md:text-2xl mb-6">CREATE YOUR ACCOUNT</p>

          <RegisterForm />
        </div>
      </div>
    </main>
  );
};
export default Register;
