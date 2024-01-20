import { useMediaQuery } from "react-responsive";

export default function Timer() {
  return (
    <>
      <Desktop>
        <div className="flex flex-row font-inter justify-around mt-[121px]">
          <div className="text-center flex flex-col gap-[20px]">
            <p className="text-[72px] font-extrabold">23</p>
            <p className="text-[24px] font-extrabold text-grayl">DAYS</p>
          </div>
          <div className="text-center flex flex-col gap-[20px]">
            <p className="text-[72px] font-extrabold">09</p>
            <p className="text-[24px] font-extrabold text-grayl">HOURS</p>
          </div>
          <div className="text-center flex flex-col gap-[20px]">
            <p className="text-[72px] font-extrabold">17</p>
            <p className="text-[24px] font-extrabold text-grayl">MINUTES</p>
          </div>
          <div className="text-center flex flex-col gap-[20px]">
            <p className="text-[72px] font-extrabold">03</p>
            <p className="text-[24px] font-extrabold text-grayl">SECONDS</p>
          </div>
        </div>
      </Desktop>
      <Mobile>
        <section className="flex flex-row font-inter justify-around mt-10">
          <div className="text-center flex flex-col gap-[10px]">
            <p className="text-[36px] font-extrabold">23</p>
            <p className="text-[16px] font-extrabold text-grayl">DAYS</p>
          </div>
          <div className="text-center flex flex-col gap-[10px]">
            <p className="text-[36px] font-extrabold">09</p>
            <p className="text-[16px] font-extrabold text-grayl">HOURS</p>
          </div>
          <div className="text-center flex flex-col gap-[10px]">
            <p className="text-[36px] font-extrabold">17</p>
            <p className="text-[16px] font-extrabold text-grayl">MINUTES</p>
          </div>
          <div className="text-center flex flex-col gap-[10px]">
            <p className="text-[36px] font-extrabold">03</p>
            <p className="text-[16px] font-extrabold text-grayl">SECONDS</p>
          </div>
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
