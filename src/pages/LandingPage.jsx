import Footer from "../components/footer/Footer";
import Home from "../components/home/Home";
import Navbar from "../components/navbar/Navbar";
import Team from "../components/team/Team";
import Spotlight from "../components/ui/Spotlight"

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="py-48 px-8 md:px-16 lg:px-32">
        <Home />
        <Team />
        <div className="">
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="h-[80vh] w-[50vw] top-10 left-full"
            fill="purple"
          />
          <Spotlight 
            className="left-80 top-28 h-[80vh] w-[50vw]" 
            fill="blue" 
          />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default LandingPage;
