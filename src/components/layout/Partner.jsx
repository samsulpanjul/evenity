import Button from "../Button";
import PartnerImage from "../PartnerImage";

export default function Partner({ partners }) {
  return (
    <div className="mt-[148px] flex flex-col gap-[82px]">
      <p className="font-rubik text-[75px] font-medium text-center">Client Partner</p>
      <div className="grid grid-cols-4 gap-x-[92px] gap-y-[56px] place-items-center">
        {partners.map((partner) => (
          <PartnerImage key={partner.id} {...partner} />
        ))}
      </div>
      <Button classBtn={"block mx-auto"}>All Client Partner</Button>
    </div>
  );
}
