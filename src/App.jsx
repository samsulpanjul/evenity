import Navbar from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function App() {
  return (
    <>
      <Desktop>
        <div className="max-w-[1219px] m-auto pt-[46px] pb-[80px]">
          <Navbar />
          <Outlet />
        </div>
      </Desktop>
      <Mobile>
        <div className="max-w-[400px] m-auto px-2">
          <Navbar />
          <Outlet />
        </div>
      </Mobile>
    </>
  );
}

export default App;

function Desktop({ children }) {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  return isDesktop ? children : null;
}

function Mobile({ children }) {
  const isMobile = useMediaQuery({ query: "(max-width: 1023px)" });
  return isMobile ? children : null;
}
