import style from "./style.module.scss";

export interface CheckButtonProps {
  checked: boolean;
  onChange: (value: boolean) => void;
}

function CheckButton({ checked, onChange }: CheckButtonProps) {
  return (
    <div
      className={style.checkButtonWrapper}
      onClick={() => onChange(!checked)}
    >
      <span style={{ opacity: checked ? 1 : 0 }}></span>
    </div>
  );
}

export { CheckButton };
