import Button from "../Button";
import CardEvent from "../CardEvent";
import { useMediaQuery } from "react-responsive";

export default function EventSchedule({ events }) {
  return (
    <>
      <Desktop>
        <div className="mt-[160px]">
          <p className="font-fredoka font-semibold text-[64px] text-center">EVENT SCHEDULE</p>
          <div className="mt-[57px] grid grid-cols-3 gap-y-[106px] justify-self-center">
            {events.map((event) => {
              return <CardEvent key={event.id} {...event} />;
            })}
          </div>
          <Button classBtn={"mt-[103px] block mx-auto"}>View More</Button>
        </div>
      </Desktop>
      <Mobile>
        <section className="mt-16">
          <p className="font-fredoka font-semibold text-[44px] text-center">EVENT SCHEDULE</p>
          <div className="grid grid-cols-1 gap-10">
            {events.map((event) => {
              return <CardEvent key={event.id} {...event} />;
            })}
          </div>
          <button type="button" className="font-rubik block mt-10 text-[18px] mx-auto bg-primary text-primary-content px-[35px] py-[15px] rounded-[14px]">
            View More
          </button>
        </section>
      </Mobile>
    </>
  );
}

function Desktop({ children }) {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  return isDesktop ? children : null;
}

function Mobile({ children }) {
  const isMobile = useMediaQuery({ query: "(max-width: 1023px)" });
  return isMobile ? children : null;
}
