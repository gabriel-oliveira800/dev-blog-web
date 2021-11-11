import { Loading } from "../Loading";
import style from "./style.module.scss";

interface RoundedButtonProps {
  label: string;
  color?: string;
  background?: string;
  isLoading?: boolean;
  onClick?: () => void;
  width?: string | number;
  height?: string | number;
  fontSize?: string | number;
  borderRadius?: string | number;
}

const RoundedButton: React.FC<RoundedButtonProps> = ({
  onClick,
  children,
  label = "",
  width = 300,
  height = 56,
  fontSize = 14,
  borderRadius = 4,
  isLoading = false,
  color = "var(--black2-color)",
  background = "var(--yellow-color)",
  ...rest
}) => (
  <button
    {...rest}
    onClick={onClick}
    className={style.buttonWrapper}
    style={{ width, height, fontSize, borderRadius, color, background }}
  >
    {isLoading ? (
      <Loading />
    ) : (
      <>
        {children}
        {label}
      </>
    )}
  </button>
);

export { RoundedButton };
