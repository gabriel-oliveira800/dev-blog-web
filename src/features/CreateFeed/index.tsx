import { useState } from "react";
import style from "./create.module.scss";

import { useAlert } from "react-alert";

import { RoundedButton } from "../components/RoundedButton";
import { Background, Logo } from "../components/Icons";

import { FeedImages, FilesPreview } from "./components/FeedImages";
import { FeedMessage } from "./components/FeedMessage";

const CreateFeed = () => {
  const [preview, setPreview] = useState<FilesPreview[]>([]);

  const alert = useAlert();

  const handleShowError = (message: string) => {
    alert.show({ type: "error", message: message });
  };

  const handleUpdatePreview = (file: FilesPreview) => {
    const copy = preview;
    copy.push(file);
    setPreview([...copy]);
  };

  const handleRemovePreview = (index: number) => {
    preview.splice(index, 1);
    setPreview([...preview]);
  };

  return (
    <main className={style.createFeedWraper}>
      <div className={style.leftSide}>
        <Logo />

        <FeedImages
          preview={preview}
          showError={handleShowError}
          setPreview={handleUpdatePreview}
          removePreview={handleRemovePreview}
        />

        <FeedMessage />

        <RoundedButton
          label="Publicar"
          color="var(--white-color)"
          background="var(--pink-color)"
        />
      </div>

      <div className={style.rightSide}>
        <Background />
      </div>
    </main>
  );
};

export { CreateFeed };
