export default function CardEvent({ eventImage, eventName, eventDetail, eventDate, eventTime }) {
  return (
    <div className="card w-[370px] font-inter flex flex-col gap-[8px]">
      <div className="card-header flex flex-col gap-[14px]">
        <img src={eventImage} alt={eventName} />
        <div className="flex flex-row text-gray justify-between text-xs leading-4 font-medium">
          <p>{eventDate}</p>
          <p>{eventTime}</p>
        </div>
      </div>
      <div className="card-body flex flex-col gap-[8px]">
        <p className="text-xl leading-7 font-bold text-grayt">{eventName}</p>
        <p className="text-xs leading-4 text-gray">{eventDetail}</p>
      </div>
    </div>
  );
}
