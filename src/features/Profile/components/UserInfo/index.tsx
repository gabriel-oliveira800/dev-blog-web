import { useEffect, useState } from "react";
import style from "./info.module.scss";

import { VscGithubInverted } from "../../../components/Icons";
import { Follows, User } from "../../../../core/models";
import FadeIn from "react-fade-in";

interface UserInfoProps {
  user?: User;
  follows?: Follows[];
}

function UserInfo({ user, follows }: UserInfoProps) {
  const randomBanner = () =>
    `https://source.unsplash.com/random?sig=${Math.random()}`;

  return (
    <section className={style.userInfoWrapper}>
      <div className={style.userInfoContent}>
        <div className={style.userInfoBanner}>
          <img src={randomBanner()} alt="Background Banner" />
        </div>

        <div className={style.informationWrapper}>
          <FadeIn className={style.information}>
            <img src={user?.avatar_url} alt={user?.name} />

            <h1>{user?.name}</h1>
            <div className={style.repoUserCard}>
              <VscGithubInverted size={16} />
              {user?.login}
            </div>
          </FadeIn>
        </div>

        <div className={style.repoStatistics}>
          <FadeIn className={style.statisticsItem} delay={300}>
            <h3>Seguidores</h3>
            <span>{user?.followers}</span>
          </FadeIn>

          <FadeIn className={style.statisticsItem} delay={300}>
            <h3>Repositórios</h3>
            <span>{user?.public_repos}</span>
          </FadeIn>

          <FadeIn className={style.statisticsItem} delay={300}>
            <h3>Seguindo</h3>
            <span>{user?.following}</span>
          </FadeIn>
        </div>
      </div>

      <div className={style.followsWrapper}>
        <h1>Seguidores</h1>

        <ul className={style.followsList}>
          {follows ? (
            follows.map((follow) => {
              return (
                <li key={follow.user.id}>
                  <div className={style.followAvatar}>
                    <img src={follow.user.avatar_url} alt={follow.user.name} />
                  </div>

                  <div className={style.followUser}>
                    <h4>{follow.user.name}</h4>
                    <div className={style.followRepoUser}>
                      <VscGithubInverted size={16} />
                      {follow.user.login}
                    </div>
                  </div>
                </li>
              );
            })
          ) : (
            <li>Você não tem seguidores</li>
          )}
        </ul>
      </div>
    </section>
  );
}

export { UserInfo };
