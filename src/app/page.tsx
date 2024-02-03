import Hero from "@/components/Hero/Hero";
import NewArrivals from "@/components/arrivals/NewArrivals";
import Footer from "@/components/footer/Footer";
import Phones from "@/components/phones/Phones";

export default function Home() {
  return (
    <>
    {/* disabled */}
      <Hero />
      <div className="bg-bgColorWhite">
        <NewArrivals />
        <Phones/>
      </div>
      <Footer/>
    </>
  );
}
