export default function PartnerImage({ partnerLogo, partnerName }) {
  return (
    <div className="px-[27px] py-[28px]">
      <img src={partnerLogo} alt={partnerName} />
    </div>
  );
}
