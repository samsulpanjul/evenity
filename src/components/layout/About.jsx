import Button from "../Button";
import { useMediaQuery } from "react-responsive";

export default function About() {
  return (
    <>
      <Desktop>
        <div className="font-rubik mt-[222px] flex flex-row h-[630px] gap-[114px] justify-between">
          <div className="basis-1/2 relative">
            <div className="absolute top-[75px]">
              <p className="font-semibold text-[64px] mb-[36px]">About Evenity</p>
              <p className="text-[28px] mb-[97px]">Evenity is event management expertise that helps and facilitates Event Planners in achieving the goal of carrying out an event.</p>
              <Button>More About Us</Button>
            </div>
          </div>
          <div className="basis-1/2 relative">
            <img src="/images/Rectangle 3.png" alt="About" className="absolute" />
            <img src="/images/Rectangle 4.png" alt="About" className="absolute bottom-0 right-0" />
            <div className="absolute bottom-[77px] left-[57px] bg-primary-content py-[20px] px-[30px] rounded-[30px]">
              <div className="flex flex-col text-center">
                <p className="text-[64px] font-semibold">46+</p>
                <p className="text-[16px] font-medium text-gray">Events in the last year</p>
              </div>
            </div>
          </div>
        </div>
      </Desktop>
      <Mobile>
        <section className="font-rubik text-center">
          <p className="font-bold text-[44px] mb-[36px]">About Evenity</p>
          <p className="text-[16px] mb-[40px]">Evenity is event management expertise that helps and facilitates Event Planners in achieving the goal of carrying out an event.</p>
          <div className="relative h-[400px]">
            <img src="/images/Rectangle 3.png" alt="About" className="w-[200px] absolute" />
            <img src="/images/Rectangle 4.png" alt="About" className="w-[200px] absolute right-0 bottom-0" />
            <div className="absolute bottom-[77px] left-[57px] bg-primary-content py-[20px] px-[20px] rounded-[30px]">
              <div className="flex flex-col text-center">
                <p className="text-[42px] font-semibold">46+</p>
                <p className="text-[16px] font-medium text-gray">Events in the last year</p>
              </div>
            </div>
          </div>
          <button type="button" className="font-rubik mt-10 text-[18px] mx-auto bg-primary text-primary-content px-[35px] py-[15px] rounded-[14px]">
            About Us
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
