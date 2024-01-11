import About from "./components/layout/About";
import EventSchedule from "./components/layout/EventSchedule";
import Hero from "./components/layout/Hero";
import Partner from "./components/layout/Partner";
import Recap from "./components/layout/Recap";
import Timer from "./components/layout/Timer";
import Venue from "./components/layout/Venue";
import Navbar from "./components/navbar/Navbar";
import dataPartner from "./components/utils/dataPartner";
import dataevent from "./components/utils/dataEvent";
import Footer from "./components/layout/Footer";

function App() {
  const partners = dataPartner;
  const events = dataevent;

  return (
    <div className="max-w-[1219px] m-auto pt-[46px] pb-[80px]">
      <Navbar />
      <Hero />
      <About />
      <Venue />
      <Recap />
      <Timer />
      <EventSchedule events={events} />
      <Partner partners={partners} />
      <Footer />
    </div>
  );
}

export default App;
