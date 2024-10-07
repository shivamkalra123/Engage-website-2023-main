import { React, useEffect } from "react";

const DevfolioButton = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="dev-btn">
      <div
        className="apply-button"
        data-hackathon-slug="engage-4"
        data-button-theme="dark"
        style={{ height: "40px", width: "212px" }}
      ></div>
    </div>
  );
};

export default DevfolioButton;
