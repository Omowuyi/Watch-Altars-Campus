import React from "react";
import topHeaderWrapper from "./TopHeader.style";

const TopHeader = () => {
  return (
    <div className="top-header-wrapper">
      <div className="top-header">
        {/* Left Section - Institutional Links */}
        <div className="flex flex-wrap gap-2">
          {[
            "WATCHERS GLOBAL",
            "WATCHERS INTERNATIONAL",
            "WATCHERS FOUNDATION",
            "WATCHERS ACADEMY",
            "WATCHERS INSTITUTE",
            "WATCHERS BANK",
          ].map((item) => (
            <button key={item}>{item}</button>
          ))}
        </div>

        {/* Right Section - Tools & User Actions */}
        <div className="flex flex-wrap gap-2 items-center">
          {[
            "SELECT A REGION",
            "LANGUAGE",
            "NEW TO THE FAITH?",
            "RECEIVE JESUS",
            "SUPPORT",
            "SOCIAL MEDIA",
            "STORE",
            "A.I. WORKSPACE",
          ].map((item) => (
            <button key={item}>{item}</button>
          ))}

          {/* Icons */}
          <button>🔍</button>
          <button>👤</button>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
