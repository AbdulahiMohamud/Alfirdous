import Footer from "./footer";
import Calander from "./calendar";
import Aboutus from "./aboutus";
import Nav from "./nav";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-100">
      {/* Hero Section */}
      <section className="relative w-full h-[500px]" style={{
        backgroundImage: 'url(/images/Alfirdous_bg.jpg)', // Assuming the image is in the public folder
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <Nav />
        <div className="absolute inset-0 bg-emerald-700 bg-opacity-60 flex items-center justify-center">
          <h1 className="text-5xl text-white font-bold">Explore the Wild with Alfidous Seattle</h1>
        </div>
      </section>

      {/* Introduction Section */}
      <Aboutus />

      {/* Events Section */}
      <Calander />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
