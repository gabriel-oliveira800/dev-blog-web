import style from "./style.module.scss";

import { CheckButton, CheckButtonProps } from "../../../components/CheckButton";

interface FeedMessageProps extends CheckButtonProps {
  message: string;
  setMessage: (value: string) => void;
}

function FeedMessage({
  message,
  checked,
  onChange,
  setMessage,
}: FeedMessageProps) {
  return (
    <div className={style.messagensWrapper}>
      <div className={style.messagenContent}>
        <div className={style.contentHeader}>Mensagem</div>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="O que você deseja escrever para seus leitores?"
        ></textarea>
      </div>
      <div className={style.checkBoxWrapper}>
        <CheckButton checked={checked} onChange={onChange} />
        <p> Marca que seu post será listado em páginas não autenticadas</p>
      </div>
    </div>
  );
}

export { FeedMessage };
