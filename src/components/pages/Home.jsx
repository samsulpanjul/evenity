import About from "../layout/About";
import EventSchedule from "../layout/EventSchedule";
import Hero from "../layout/Hero";
import Partner from "../layout/Partner";
import Recap from "../layout/Recap";
import Timer from "../layout/Timer";
import Venue from "../layout/Venue";
import dataPartner from "../utils/dataPartner";
import dataevent from "../utils/dataEvent";
import Footer from "../layout/Footer";

export default function Home() {
  const partners = dataPartner;
  const events = dataevent;

  return (
    <>
      <Hero />
      <About />
      <Venue />
      <Recap />
      <Timer />
      <EventSchedule events={events} />
      <Partner partners={partners} />
      <Footer />
    </>
  );
}
