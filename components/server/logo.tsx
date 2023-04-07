import React from "react";
// import "server-only";

export const Logo: React.FC<{ className?: string; stroke?: string }> = ({
  className,
  stroke,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="40"
      height="40"
    >
      <polygon points="50 5, 95 30, 95 70, 50 95, 5 70, 5 30" fill="#ff4dbe" />
      <text
        x="37"
        y="65"
        fontFamily="Verdana"
        font-size="45"
        font-weight="bold"
        fill="white"
      >
        S
      </text>
    </svg>
  );
};
