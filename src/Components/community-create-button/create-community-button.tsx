import { useState } from "react";
import CenterScreenModal from "../Modals/CenterScreenModal/center-screen-modal";
import styles from "./create-community-button.module.css";
import { CreateCommunityModalContent } from "./create-community-modal-content";

export default function CreateCommunityButton() {
  const [isEnabled, setIsEnabled] = useState(false);

  const EnableModal = () => {
    setIsEnabled(true);
  };

  return (
    <div className={styles.comunitys_actions}>
      <button onClick={EnableModal} className={styles.createCommunityButton}>
        Criar comunidade
      </button>
      <>
        {isEnabled == true && (
          <CenterScreenModal>
            <CreateCommunityModalContent onClose={() => setIsEnabled(false)} />
          </CenterScreenModal>
        )}
      </>
    </div>
  );
}
