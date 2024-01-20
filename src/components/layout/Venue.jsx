import Map from "../icons/Map";
import { useMediaQuery } from "react-responsive";

export default function Venue() {
  return (
    <>
      <Desktop>
        <div className="font-rubik mt-[109px] flex flex-row gap-[257px] relative min-h-[1160px]">
          <div className="basis-1/2 flex flex-col gap-[14px]">
            <p className="text-8xl font-semibold leading-[144px]">Explore Beautiful Venues</p>
            <img src="/images/Rectangle 6.png" alt="Venue" className="max-w-min" />
          </div>
          <div className="basis-1/2 flex flex-col gap-[66px] absolute right-0 bottom-0">
            <img src="/images/Rectangle 7.png" alt="Venue" className="max-w-min" />
            <p className="font-inter text-[28px] leading-[39px] max-w-[438px]">Explore new ideas at astoundingly beautiful venues. Attend Tech Startup Conferences and meet new brilliant minds from all over the world.</p>
          </div>
          <div className="bg-primary-content px-[40px] py-[31px] rounded-[30px] absolute z-20 top-[318px] right-[330px]">
            <div className="flex flex-col gap-[28px]">
              <div className="flex flex-col gap-[21px]">
                <p className="text-[20px] text-grayl font-semibold">Venue : 1</p>
                <p className="text-[24px] leading-[35px]">
                  REGAELE
                  <br />
                  CONVENTION HALL
                </p>
              </div>
              <div className="flex place-items-center gap-[12px]">
                <p className="text-[14px] leading-[20px] text-grayl">North Sumatera, Indonesia</p>
                <div className="relative">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="20" r="20" fill="#070148" />
                  </svg>
                  <Map classMap={"absolute top-[6px] left-[6px]"} />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-primary-content px-[40px] py-[31px] rounded-[30px] absolute z-20 bottom-[127px] left-[318px]">
            <div className="flex flex-col gap-[28px]">
              <div className="flex flex-col gap-[21px]">
                <p className="text-[20px] text-grayl font-semibold">Venue : 2</p>
                <p className="text-[24px] leading-[35px]">
                  KEMPINSKI
                  <br />
                  HOTEL INDONESIA
                </p>
              </div>
              <div className="flex place-items-center gap-[12px]">
                <p className="text-[14px] leading-[20px] text-grayl">Jakarta, Indonesia</p>
                <div className="relative">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="20" r="20" fill="#070148" />
                  </svg>
                  <Map classMap={"absolute top-[6px] left-[6px]"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Desktop>
      <Mobile>
        <section className="mt-16 text-center font-rubik">
          <p className="text-[44px] font-semibold">Explore Beautiful Venues</p>
          <p className="text-[18px] mt-10">Explore new ideas at astoundingly beautiful venues. Attend Tech Startup Conferences and meet new brilliant minds from all over the world.</p>
          <div className="relative">
            <img src="/images/Rectangle 6.png" alt="Venue" className="w-[200px]" />
            <div className="bg-primary-content px-[20px] py-[15px] rounded-[30px] absolute top-16 right-0">
              <div className="flex flex-col gap-1">
                <div className="flex flex-col gap-[12px]">
                  <p className="text-[14px] text-grayl font-semibold">Venue : 1</p>
                  <p className="text-[18px] leading-[35px]">
                    REGAELE
                    <br />
                    CONVENTION HALL
                  </p>
                </div>
                <div className="flex place-items-center gap-[12px]">
                  <p className="text-[12px] leading-[20px] text-grayl">Jakarta, Indonesia</p>
                  <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="none">
                      <circle cx="20" cy="20" r="20" fill="#070148" />
                    </svg>
                    <Map classMap={"absolute top-[6px] left-[6px]"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[308px] -mt-10">
            <img src="/images/Rectangle 7.png" alt="Venue" className="w-[200px] absolute right-0" />
            <div className="bg-primary-content px-[20px] py-[15px] rounded-[30px] absolute bottom-16 left-0">
              <div className="flex flex-col gap-1">
                <div className="flex flex-col gap-[12px]">
                  <p className="text-[14px] text-grayl font-semibold">Venue : 2</p>
                  <p className="text-[18px] leading-[35px]">
                    KEMPINSKI
                    <br />
                    HOTEL INDONESIA
                  </p>
                </div>
                <div className="flex place-items-center gap-[12px]">
                  <p className="text-[12px] leading-[20px] text-grayl">North Sumatera, Indonesia</p>
                  <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="none">
                      <circle cx="20" cy="20" r="20" fill="#070148" />
                    </svg>
                    <Map classMap={"absolute top-[6px] left-[6px]"} />
                  </div>
                </div>
              </div>
            </div>
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
