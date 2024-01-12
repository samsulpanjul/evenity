import Navbar from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="max-w-[1219px] m-auto pt-[46px] pb-[80px]">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
