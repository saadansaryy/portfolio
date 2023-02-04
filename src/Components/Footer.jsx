import React from "react";
import heartLogo from "../assets/logo/footer_icons/heart.png";

function Footer() {
  return (
    <div className="text-center py-1 bg-zinc-900">
      <p className="font-mono font-bold text-[#45b08c] text-xs md:text-sm">
        "Handcrafted with{" "}
        <span>
          <img src={heartLogo} alt="" className="w-4 md:w-[1.2rem] inline-block mr-1" />
        </span>
        by Saad Ansari"
      </p>
    </div>
  );
}

export default Footer;
