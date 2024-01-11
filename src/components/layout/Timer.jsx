export default function Timer() {
  return (
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
  );
}
