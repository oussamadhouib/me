import React from "react";

function Footer() {
  return (
    <div className="text-center w-full mt-16">
      <p className="text-gray-600 mb-4">
        Made with{" "}
        <span role="img" aria-label="heart">
          💙
        </span>{" "}
        by{" "}
        <a
          className="text-blue-500 hover:underline"
          href="https://github.com/oussamadhouib"
        >
          Oussema Dhouib
        </a>
      </p>
    </div>
  );
}

export default Footer;
