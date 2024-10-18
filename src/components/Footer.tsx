import { AcmeSVG } from "@/icons/acme";
import React from "react";

function Footer() {
  return (
    <footer className="flex-none h-auto max-w-[1080px] relative w-full mx-auto mt-[22px]">
      <div className="flex items-center flex-col flex-nowrap gap-[44px] min-h justify-center overflow-hidden pt-[54px] pb-[24px] relative">
        <div className="h-1 border-b border-[rgb(36,36,36)] w-full"></div>
        <AcmeSVG className="w-[74px] h-[35px]" />
        <div className="flex px-[30px] gap-[56px] flex-col md:flex-row">
          <div className="flex flex-col gap-[8px]">
            <h2 className="text-center text-white">Links</h2>
            <div className="flex gap-[16px] text-white">
              <p className="text-center font-thin text-sm">Link</p>
              <p className="text-center font-thin text-sm">Link</p>
              <p className="text-center font-thin text-sm">Link</p>
            </div>
          </div>
          <div className="flex flex-col gap-[8px]">
            <h2 className="text-center text-white">Socials</h2>
            <div className="flex gap-[16px] text-white">
              <p className="text-center font-thin text-sm">Link</p>
              <p className="text-center font-thin text-sm">Link</p>
              <p className="text-center font-thin text-sm">Link</p>
            </div>
          </div>
          <div className="flex flex-col gap-[8px]">
            <h2 className="text-center text-white">Legal</h2>
            <div className="flex gap-[16px] text-white">
              <p className="text-center font-thin text-sm">Link</p>
              <p className="text-center font-thin text-sm">Link</p>
              <p className="text-center font-thin text-sm">Link</p>
            </div>
          </div>
        </div>

        <p className="text-[rgb(105,105,105)] text-sm">
          All rights reserved &copy; Acme
        </p>
      </div>
    </footer>
  );
}

export default Footer;
