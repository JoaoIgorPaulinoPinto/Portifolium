import { useEffect, useRef } from "react";
import styles from "./modal.module.css";

type ModalPosition = {
  x: number;
  y: number;
};

interface ProfilePreferencesModalProps {
  position: ModalPosition | null;
  onClose: () => void;
}

export const ProfilePreferencesModal: React.FC<
  ProfilePreferencesModalProps
> = ({ position, onClose }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div className={styles.overlay}>
      <div
        ref={modalRef}
        className={styles.small_modal_container}
        style={{
          position: "absolute",
          top: position?.y ?? "50%",
          left: position?.x ?? "50%",
          transform: position ? "translate(0, 0)" : "translate(-50%, -50%)",
        }}
      >
        <div className={styles.modal_title}>Preferences</div>
        <div className={styles.modal_content}>
          <div className={styles.modal_options}>
            <div className={styles.modal_option}>
              <label>Theme</label>
              <select>
                <option>Light</option>
                <option>Dark</option>
                <option>System Default</option>
              </select>
            </div>
            <div className={styles.modal_option}>
              <label>Lenguege</label>
              <select>
                <option>🇧🇷 Portuguese</option>
                <option>🇺🇸 English</option>
                <option>🇪🇸 Español</option>
                <option>🇫🇷 Français</option>
                <option>🇩🇪 Deutsch</option>
              </select>
            </div>
            <div className={styles.modal_option}>
              <label>Notification</label>
              <div className={styles.toggle_switch}>
                <input type="checkbox" id="notificationToggle" />
                <label
                  htmlFor="notificationToggle"
                  className={styles.switch_label}
                ></label>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.modal_actions}>
          <button className={styles.modal_actions_button} onClick={onClose}>
            Aplicar
          </button>
        </div>
      </div>
    </div>
  );
};
