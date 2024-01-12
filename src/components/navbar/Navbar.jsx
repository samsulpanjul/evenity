import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between mb-[37px] font-fredoka">
      <div className="text-[28px] font-semibold">Eventity.</div>
      <div className="flex items-center gap-[98px]">
        <ul className="flex text-lg font-medium p-[10px] gap-[30px]">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "underline underline-offset-4" : "")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/pricing" className={({ isActive }) => (isActive ? "underline underline-offset-4" : "")}>
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink to="/resources" className={({ isActive }) => (isActive ? "underline underline-offset-4" : "")}>
              Resources
            </NavLink>
          </li>
          <li>
            <NavLink to="/helpdesk" className={({ isActive }) => (isActive ? "underline underline-offset-4" : "")}>
              Helpdesk
            </NavLink>
          </li>
        </ul>
        <div className="flex font-medium gap-[41px] place-items-center">
          <Link to="/login" className="font-medium">
            Login
          </Link>
          <Link to="/register" className="py-[18px] px-[40px] bg-primary rounded-[14px] text-primary-content">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}
