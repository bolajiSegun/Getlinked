import Faq from "@/components/HomeLayout/Faq";
import Footer from "@/components/HomeLayout/Footer";
import Hero from "@/components/HomeLayout/Hero";
import Overview from "@/components/HomeLayout/Overview";
import Rewards from "@/components/HomeLayout/Rewards";
import Sponsors from "@/components/HomeLayout/Sponsors";
import Terms from "@/components/HomeLayout/Terms";
import Timeline from "@/components/HomeLayout/Timeline";
const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <Overview />
        <Faq />
        <Timeline />
        <Rewards />
        <Sponsors />
        <Terms />
        <Footer />
      </main>
    </>
  );
};
export default Home;
