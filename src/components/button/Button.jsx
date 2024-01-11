import { Children } from "react";

export function Button({ children }) {
  <>
    <button className="bg-primary py-[30px] px-[60px] rounded-[40px]">{Children}</button>
  </>;
}
