import { Link, NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function Navbar() {
  return (
    <>
      <Desktop>
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
      </Desktop>
      <Mobile>
        <nav className="mb-[37px] font-fredoka">
          <div className="flex justify-between items-center">
            <div className="text-[28px] font-semibold">Eventity.</div>
            <div className="w-[100px] font-semibold">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                    Menu
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-24 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                    <div className="px-1 py-1 bg-white">
                      <Menu.Item>
                        <NavLink to="/" className={({ isActive }) => (isActive ? "underline underline-offset-4" : "")}>
                          Home
                        </NavLink>
                      </Menu.Item>
                    </div>
                    <div className="px-1 py-1 ">
                      <Menu.Item>
                        <NavLink to="/pricing" className={({ isActive }) => (isActive ? "underline underline-offset-4" : "")}>
                          Pricing
                        </NavLink>
                      </Menu.Item>
                    </div>
                    <div className="px-1 py-1 ">
                      <Menu.Item>
                        <NavLink to="/resources" className={({ isActive }) => (isActive ? "underline underline-offset-4" : "")}>
                          Resources
                        </NavLink>
                      </Menu.Item>
                    </div>
                    <div className="px-1 py-1 ">
                      <Menu.Item>
                        <NavLink to="/helpdesk" className={({ isActive }) => (isActive ? "underline underline-offset-4" : "")}>
                          Helpdesk
                        </NavLink>
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
          <div className="flex font-medium gap-[41px] place-items-center justify-end mt-5">
            <Link to="/login" className="font-medium">
              Login
            </Link>
            <Link to="/register" className="py-[10px] px-[40px] bg-primary rounded-[14px] text-primary-content">
              Register
            </Link>
          </div>
        </nav>
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
