export default function Button({ classBtn, children }) {
  return (
    <button type="button" className={`font-rubik text-[24px] bg-primary text-primary-content px-[70px] py-[30px] rounded-[14px] ${classBtn}`}>
      {children}
    </button>
  );
}
