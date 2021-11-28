import React, { useEffect, useState } from "react";
import style from "./header.module.scss";

import { RoundedButton } from "../../../components/RoundedButton";
import { UserAvatar } from "../../../components/UserAvatar";
import { Logo, VscSearch } from "../../../components/Icons";

interface HomeHeaderProps {
  avatar?: string;
  navigateToProfile?: () => void;
  navigateToCreateFeed?: () => void;
  onChanged?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

function HomeHeader({
  avatar,
  navigateToProfile,
  navigateToCreateFeed,
  onChanged,
}: HomeHeaderProps) {
  return (
    <header className={style.homeHeaderWrapper}>
      <section className={style.homeHeaderContent}>
        <div className={style.contentLeftSide}>
          <Logo />
          <div className={style.leftSideInputWrapper}>
            <input type="text" placeholder="Pesquisar" onChange={onChanged} />
            <VscSearch size={24} />
          </div>
        </div>

        <div className={style.contentRightSide}>
          {avatar && <UserAvatar src={avatar} onClick={navigateToProfile} />}
          <span></span>
          <RoundedButton
            label="Criar"
            width={140}
            height={48}
            onClick={navigateToCreateFeed}
          />
        </div>
      </section>
    </header>
  );
}

export { HomeHeader };
