import React from "react";
import style from "./style.module.scss";

import { Logo } from "../components/Icons";
import { Link } from "react-router-dom";
import FadeIn from "react-fade-in/lib/FadeIn";

const NotFound = () => {
  return (
    <div className={style.contentWrapper}>
      <div className={style.leftSide}>
        <Logo />

        <FadeIn className={style.leftSideContent}>
          <h1>404</h1>
          <p>Not Found Page</p>
        </FadeIn>
      </div>

      <FadeIn className={style.rightSide}>
        <strong>Entre e compartilhe sua mensagem</strong>
        <Link to="/login">Entra para começar</Link>
      </FadeIn>
    </div>
  );
};

export { NotFound };
