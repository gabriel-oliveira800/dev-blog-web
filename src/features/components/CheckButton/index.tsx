import { useState } from "react";
import style from "./style.module.scss";

function CheckButton() {
  const [checked, setChecked] = useState(false);

  const handelChange = () => setChecked(!checked);

  return (
    <div className={style.checkButtonWrapper} onClick={handelChange}>
      <span style={{ opacity: checked ? 1 : 0 }}></span>
    </div>
  );
}

export { CheckButton };
