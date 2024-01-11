import Map from "../icons/Map";
import Play from "../icons/Play";

export default function Recap() {
  return (
    <div className="mt-[127px]">
      <p className="font-fredoka font-semibold text-[64px] text-center">RECAP EVENT 2022</p>
      <div className="mt-[57px] relative w-[1219px] h-[597px]">
        <img src="/images/Rectangle 10.png" alt="" />
        <div className="absolute top-[100px] left-[61px] text-primary-content flex flex-col gap-[172px]">
          <div className="font-inter flex flex-col gap-[10px]">
            <p className="text-[60px] font-black leading-[60px]">Green Day</p>
            <div className="flex flex-row gap-[10px] place-items-center">
              <p className="text-[30px] font-medium leading-[36px]">California, USA</p>
              <Map />
            </div>
          </div>
          <div className="flex gap-[514px] place-items-center">
            <div className="flex gap-[33px] place-items-center">
              <Play />
              <p className="font-fredoka text-[36px] font-medium">START VIDEO</p>
            </div>
            <p className="font-inter text-[24px] font-medium leading-[32px]">February 29, 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}
