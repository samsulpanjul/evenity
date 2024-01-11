import Button from "../Button";
import Ticket from "../icons/Ticket";

export default function Hero() {
  return (
    <div className="w-[1219px] h-[695px] relative m-auto font-inter">
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
          Not only can you purchase tickets to the hottest events in town, but you can also create your own custom tickets with our easy-to-use platform. Say goodbye to generic tickets and hello to personalized and professional-looking ones
          that will make your event stand out from the rest.
        </p>
      </div>
      <Button classBtn={"absolute z-20 -bottom-[45px] left-[485px]"}>Explore Event</Button>
    </div>
  );
}
