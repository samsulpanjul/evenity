import AppStore from "../icons/AppStore";
import PlayStore from "../icons/PlayStore";
import Facebook from "../icons/Facebook";
import Instagram from "../icons/Instagram";
import Twitter from "../icons/Twitter";
import LinkedIn from "../icons/LinkedIn";
import Youtube from "../icons/Youtube";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-footer mt-[115px] text-primary-content px-[155px] py-[84px] flex flex-col gap-[100px] rounded-[40px]">
      <div className="flex flex-row justify-between">
        <div className="font-fredoka flex flex-col gap-[42px]">
          <div className="flex flex-col gap-[8px]">
            <p className="text-[32px] font-semibold">Eventnity.</p>
            <p className="text-[15px] font-medium">Ease of being together</p>
          </div>
          <div className="flex flex-col gap-[15px]">
            <button>
              <AppStore />
            </button>
            <button>
              <PlayStore />
            </button>
          </div>
        </div>
        <div className="flex gap-[98px]">
          <div className="flex flex-col gap-[2px]">
            <div className="p-[10px] font-fredoka text-[15px] font-semibold">EVENTNITY</div>
            <Row>
              <RowList to="/register">Start For Free</RowList>
              <RowList to="/login">Login</RowList>
              <RowList to="/pricing">Pricing</RowList>
            </Row>
          </div>
          <div className="flex flex-col gap-[2px]">
            <div className="p-[10px] font-fredoka text-[15px] font-semibold">FEATURES</div>
            <Row>
              <RowList>Payment Integration</RowList>
              <RowList>Newstlatter</RowList>
              <RowList>Email Marketing</RowList>
              <RowList>QR Code Ticketing</RowList>
              <RowList>Event Hosting</RowList>
              <RowList>Promote</RowList>
              <RowList>Advertising</RowList>
            </Row>
          </div>
          <div className="flex flex-col gap-[2px]">
            <div className="p-[10px] font-fredoka text-[15px] font-semibold">COMPANY</div>
            <Row>
              <RowList>For Bussines</RowList>
              <RowList>About Us</RowList>
              <RowList>Blog</RowList>
              <RowList>Career</RowList>
              <RowList>Event</RowList>
            </Row>
          </div>
        </div>
      </div>
      <div className="font-inter flex justify-between place-items-center">
        <div className="flex gap-[21px]">
          <div className="flex gap-[20px]">
            <button>
              <Facebook />
            </button>
            <button>
              <Instagram />
            </button>
            <button>
              <Twitter />
            </button>
            <button>
              <LinkedIn />
            </button>
            <button>
              <Youtube />
            </button>
          </div>
          <div className="flex gap-[16px] p-[10px] text-xs leading-4 font-medium text-footer-content">
            <a href="" className="hover:underline">
              Terms of Service
            </a>
            <a href="" className="hover:underline">
              Privacy
            </a>
            <a href="" className="hover:underline">
              Return and Refund
            </a>
          </div>
        </div>
        <div className="text-footer-content text-xs font-medium leading-4 p-[10px]">Copyright © 2023</div>
      </div>
    </footer>
  );
}

function Row({ children }) {
  return <ul className="font-inter text-footer-content p-[10px] flex flex-col gap-[16px]">{children}</ul>;
}

function RowList({ children, to }) {
  return (
    <li className="text-xs leading-4 font-medium hover:underline">
      <Link to={to}>{children}</Link>
    </li>
  );
}
