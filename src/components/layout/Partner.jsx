import Button from "../Button";
import PartnerImage from "../PartnerImage";
import { useMediaQuery } from "react-responsive";

export default function Partner({ partners }) {
  return (
    <>
      <Desktop>
        <div className="mt-[148px] flex flex-col gap-[82px]">
          <p className="font-rubik text-[75px] font-medium text-center">Client Partner</p>
          <div className="grid grid-cols-4 gap-x-[92px] gap-y-[56px] place-items-center">
            {partners.map((partner) => (
              <PartnerImage key={partner.id} {...partner} />
            ))}
          </div>
          <Button classBtn={"block mx-auto"}>All Client Partner</Button>
        </div>
      </Desktop>
      <Mobile>
        <section>
          <p className="font-rubik text-[44px] font-semibold mt-16 text-center">Client Partner</p>
          <div className="grid grid-cols-2 gap-5">
            {partners.map((partner) => (
              <PartnerImage key={partner.id} {...partner} />
            ))}
          </div>
          <button type="button" className="font-rubik text-[18px] block mt-10 mx-auto bg-primary text-primary-content px-[35px] py-[15px] rounded-[14px]">
            All Client Partner
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
