import { useEffect, useRef, useState } from "react";
import style from "./repo.module.scss";

import FadeIn from "react-fade-in";

import {
  IoAdd,
  VscGithubInverted,
  IoChevronForwardOutline,
} from "../../../components/Icons";

interface RepoData {
  repoName: string;
  name: string;
}

const projects: RepoData[] = [
  {
    repoName: "Flutter Boot",
    name: "dennis_mante",
  },
  {
    repoName: "Ifood clone",
    name: "dany_matos",
  },
  {
    repoName: "Dog food",
    name: "dennis_mante",
  },
  {
    repoName: "Api Pokedex",
    name: "dennis_mante",
  },
];

function Repositories() {
  const [repos, setRepos] = useState<RepoData[]>(projects);
  const repoComponent = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const target = repoComponent.current;
    if (target === null) return;

    target.addEventListener("wheel", (e) => {
      handleNextRepo(e.deltaY > 0);
    });

    return () => {
      target.removeEventListener("wheel", (e) => {});
    };
  }, []);

  const handleNextRepo = (isRiftDirection: boolean = true) => {
    const target = repoComponent.current;
    if (target === null) return;

    if (isRiftDirection) {
      target.scrollLeft += target.offsetWidth;
    } else {
      target.scrollLeft -= target.offsetWidth;
    }
  };

  return (
    <div className={style.repoWrapper}>
      <header className={style.repoHeader}>
        <h2>Meus Projetos</h2>
        <div onClick={() => {}}>
          <IoAdd size={38} />
        </div>
      </header>

      <div className={style.repoWrapper}>
        <ul className={style.repoList} ref={repoComponent}>
          {repos.map((repo, index) => (
            <FadeIn key={index} className={style.repoItem}>
              <h1>{repo.repoName}</h1>
              <div className={style.repoInfo}>
                <VscGithubInverted size={16} />
                {repo.name}
              </div>
            </FadeIn>
          ))}
        </ul>

        {repos.length >= 3 && (
          <div className={style.repoListArrow} onClick={() => handleNextRepo()}>
            <IoChevronForwardOutline size={38} color="#fff" />
          </div>
        )}
      </div>
    </div>
  );
}

export { Repositories };
