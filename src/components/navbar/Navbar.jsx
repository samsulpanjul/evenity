export function Navbar() {
  return (
    <nav className="flex justify-between mb-[37px] font-fredoka">
      <div className="text-[28px] font-semibold">Eventity.</div>
      <div className="flex items-center gap-[98px]">
        <ul className="flex text-lg font-medium p-[10px] gap-[30px]">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Resouces</a>
          </li>
          <li>
            <a href="#">Helpdesk</a>
          </li>
        </ul>
        <div className="flex font-medium gap-[41px]">
          <button className="font-medium">Login</button>
          <button className="py-[18px] px-[40px] bg-primary rounded-[14px] text-primary-content">Register</button>
        </div>
      </div>
    </nav>
  );
}
