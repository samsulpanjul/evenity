import Button from "../Button";

export default function About() {
  return (
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
  );
}
