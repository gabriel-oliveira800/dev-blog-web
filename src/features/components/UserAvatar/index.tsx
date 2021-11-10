import React from "react";
import style from "./style.module.scss";

interface UserAvatarProps {
  src: string;
  alt?: string;
  onClick?: () => void;
  width?: string | number;
  height?: string | number;
  padding?: string | number;
}

const UserAvatar: React.FC<UserAvatarProps> = ({
  src,
  alt,
  width = 48,
  height = 48,
  padding = 2,
  ...rest
}) => (
  <div
    {...rest}
    className={style.userAvatar}
    style={{ width, height, padding }}
  >
    <img src={src} alt={alt ?? "perfil"} />
  </div>
);

export { UserAvatar };
