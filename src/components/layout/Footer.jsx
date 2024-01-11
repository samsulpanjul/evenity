import AppStore from "../icons/AppStore";
import PlayStore from "../icons/PlayStore";
import Facebook from "../icons/Facebook";
import Instagram from "../icons/Instagram";
import Twitter from "../icons/Twitter";
import LinkedIn from "../icons/LinkedIn";
import Youtube from "../icons/Youtube";

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
            <AppStore />
            <PlayStore />
          </div>
        </div>
        <div className="flex gap-[98px]">
          <div className="flex flex-col gap-[2px]">
            <div className="p-[10px] font-fredoka text-[15px] font-semibold">EVENTNITY</div>
            <ul className="font-inter text-footer-content p-[10px] flex flex-col gap-[16px]">
              <li className="text-xs leading-4 font-medium">Start For Free</li>
              <li className="text-xs leading-4 font-medium">Login</li>
              <li className="text-xs leading-4 font-medium">Pricing</li>
            </ul>
          </div>
          <div className="flex flex-col gap-[2px]">
            <div className="p-[10px] font-fredoka text-[15px] font-semibold">FEATURES</div>
            <ul className="font-inter text-footer-content p-[10px] flex flex-col gap-[16px]">
              <li className="text-xs leading-4 font-medium">Payment Integration</li>
              <li className="text-xs leading-4 font-medium">Newstlatter</li>
              <li className="text-xs leading-4 font-medium">Email Marketing</li>
              <li className="text-xs leading-4 font-medium">QR Code Ticketing</li>
              <li className="text-xs leading-4 font-medium">Event Hosting</li>
              <li className="text-xs leading-4 font-medium">Promote</li>
              <li className="text-xs leading-4 font-medium">Advertising</li>
            </ul>
          </div>
          <div className="flex flex-col gap-[2px]">
            <div className="p-[10px] font-fredoka text-[15px] font-semibold">COMPANY</div>
            <ul className="font-inter text-footer-content p-[10px] flex flex-col gap-[16px]">
              <li className="text-xs leading-4 font-medium">For Bussines</li>
              <li className="text-xs leading-4 font-medium">About Us</li>
              <li className="text-xs leading-4 font-medium">Blog</li>
              <li className="text-xs leading-4 font-medium">Career</li>
              <li className="text-xs leading-4 font-medium">Event</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="font-inter flex justify-between place-items-center">
        <div className="flex gap-[21px]">
          <div className="flex gap-[20px]">
            <Facebook />
            <Instagram />
            <Twitter />
            <LinkedIn />
            <Youtube />
          </div>
          <div className="flex gap-[16px] p-[10px] text-xs leading-4 font-medium text-footer-content">
            <p>Terms of Service</p>
            <p>Privacy</p>
            <p>Return and Refund</p>
          </div>
        </div>
        <div className="text-footer-content text-xs font-medium leading-4 p-[10px]">Copyright © 2023</div>
      </div>
    </footer>
  );
}
