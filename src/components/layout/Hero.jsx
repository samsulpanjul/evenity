import Button from "../Button";
import Ticket from "../icons/Ticket";
import { useMediaQuery } from "react-responsive";

export default function Hero() {
  return (
    <>
      <Desktop>
        <div className="h-[695px] relative m-auto font-inter">
          <img src="/images/hero.png" alt="Hero" className="bg-cover rounded-[40px] absolute" width={1219} height={695} />
          <div className="z-20 absolute top-[120px] left-[52px] flex flex-col gap-[34px] text-primary-content w-[667px]">
            <div className="flex gap-2.5 font-medium leading-7">
              <p className="text-[20px]">Welcome to our ticketing website! </p>
              <Ticket />
            </div>
            <p className="text-[72px] leading-[72px] font-black">
              Where Your <span className="text-[#6D28D9]">Event</span> Dreams Come to Life!
            </p>
            <p className="text-lg font-semibold leading-[28px]">
              Not only can you purchase tickets to the hottest events in town, but you can also create your own custom tickets with our easy-to-use platform. Say goodbye to generic tickets and hello to personalized and professional-looking
              ones that will make your event stand out from the rest.
            </p>
          </div>
          <Button classBtn={"absolute z-20 -bottom-[45px] left-[485px]"}>Explore Event</Button>
        </div>
      </Desktop>
      <Mobile>
        <section className="flex flex-col justify-center gap-5 mb-16">
          <div className="bg-cover h-[225px] flex flex-col justify-evenly items-center bg-center rounded-xl text-white" style={{ backgroundImage: "url(/images/hero.png)" }}>
            <div className="flex gap-2 items-center">
              <p className="text-[20px]">Welcome to our ticketing website!</p>
              <Ticket />
            </div>
            <p className="text-[28px] font-black text-center">
              Where Your <span className="text-[#6D28D9]">Event</span> Dreams Come to Life!
            </p>
          </div>
          <p className="text-md font-semibold leading-[28px] text-center">
            Not only can you purchase tickets to the hottest events in town, but you can also create your own custom tickets with our easy-to-use platform. Say goodbye to generic tickets and hello to personalized and professional-looking
            ones that will make your event stand out from the rest.
          </p>
          <button type="button" className="font-rubik text-[18px] mx-auto bg-primary text-primary-content px-[35px] py-[15px] rounded-[14px]">
            Explore Event
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
