import style from "./style.module.scss";

import { CheckButton } from "../../../components/CheckButton";

function FeedMessage() {
  return (
    <div className={style.messagensWrapper}>
      FeedMessage
      <CheckButton />
    </div>
  );
}

export { FeedMessage };
