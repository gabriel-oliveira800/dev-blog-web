import React from "react";
import style from "./style.module.scss";

interface LoadingProps {
  width?: number;
  height?: number;
  color?: string;
  strokeWidth?: string;
}

const Loading: React.FC<LoadingProps> = ({
  width = 48,
  height = 48,
  strokeWidth = 4,
  color = "#ff008e",
}) => (
  <div className={style.loadingWrapper}>
    <svg
      width={width}
      height={height}
      viewBox="25 25 50 50"
      className={style.loadingContent}
    >
      <circle
        cx="50"
        cy="50"
        r="20"
        stroke={color}
        strokeWidth={strokeWidth}
      ></circle>
    </svg>
  </div>
);

export { Loading };
