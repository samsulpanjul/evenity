import Button from "../Button";
import CardEvent from "../CardEvent";

export default function EventSchedule({ events }) {
  return (
    <div className="mt-[160px]">
      <p className="font-fredoka font-semibold text-[64px] text-center">EVENT SCHEDULE</p>
      <div className="mt-[57px] grid grid-cols-3 gap-y-[106px]">
        {events.map((event) => {
          return <CardEvent key={event.id} {...event} />;
        })}
      </div>
      <Button classBtn={"mt-[103px] block mx-auto"}>View More</Button>
    </div>
  );
}
