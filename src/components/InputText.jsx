export default function InputText({ text, type, id, htmlFor }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-footer-content">
        {text}
      </label>
      <input type={type} id={id} required className="w-full p-2 rounded-[10px] bg-primary text-primary-content border border-grayl focus:border-primary-content outline-none" />
    </div>
  );
}
