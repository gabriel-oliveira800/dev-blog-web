import { useState } from "react";
import style from "./create.module.scss";

import { useHistory } from "react-router-dom";
import { useAlert } from "react-alert";

import { api } from "../../core/services/api";
import { AppRoutes } from "../../core/values";
import { Helpers } from "../../core/helpers";

import { RoundedButton } from "../components/RoundedButton";
import { Background, Logo } from "../components/Icons";

import { FeedImages, FilesPreview } from "./components/FeedImages";
import { FeedMessage } from "./components/FeedMessage";

const CreateFeed = () => {
  const [message, setMessage] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [preview, setPreview] = useState<FilesPreview[]>([]);

  const navigation = useHistory();
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

  async function handleCreateNewFeed(data: FormData) {
    try {
      await api.post("/feed", data);
      navigation.push(AppRoutes.home);
    } catch (_) {
      handleShowError("Erro na criação do feed, por favor tente novamente");
    } finally {
      setLoading(false);
    }
  }

  const handleSubmit = async () => {
    setLoading(true);
    const isAllEmpty = Helpers.isEmpty(message) && Helpers.isEmpty(preview);
    if (isAllEmpty) {
      handleShowError("Por favor, preencha pelos um campo");
      setLoading(false);

      return;
    }

    const formData = new FormData();

    formData.append("message", message);
    formData.append("isVisible", checked.toString());

    preview.map((preview) => {
      formData.append("feed-pictures", preview.file, preview.name);
    });

    handleCreateNewFeed(formData);
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

        <FeedMessage
          message={message}
          checked={checked}
          onChange={setChecked}
          setMessage={setMessage}
        />

        <RoundedButton
          label="Publicar"
          isLoading={isLoading}
          onClick={handleSubmit}
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
function useNavigation() {
  throw new Error("Function not implemented.");
}
