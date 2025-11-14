import { useEffect, useRef, useState } from "react";
import styles from "./create-community-modal-content.module.css";

interface CreateCommunityModalProps {
  onClose: () => void;
}

export const CreateCommunityModalContent: React.FC<
  CreateCommunityModalProps
> = ({ onClose }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  //   const [isPublic, setIsPublic] = useState(true);
  const [tags, setTags] = useState<string[]>([]);

  const allTags = [
    "Tecnologia",
    "Games",
    "Filmes",
    "Música",
    "Anime",
    "Memes",
    "Esportes",
    "Notícias",
  ];

  const toggleTag = (tag: string) => {
    setTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const handleSubmit = () => {
    const communityData = {
      name,
      description,
      //   isPublic,
      tags,
    };
    console.log("Criar comunidade:", communityData);
    onClose();
  };
  const handleCancel = () => {
    onClose();
  };

  return (
    <div className={styles.overlay}>
      <div ref={modalRef} className={styles.center_modal_container}>
        <div className={styles.modal_title}>Criar Comunidade</div>

        <div className={styles.modal_content}>
          {/* NOME */}
          <div className={styles.modal_option_column}>
            <label>Nome da Comunidade</label>
            <input
              type="text"
              className={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Digite o nome"
            />
          </div>

          {/* DESCRIÇÃO */}
          <div className={styles.modal_option_column}>
            <label>Descrição</label>
            <textarea
              className={styles.textarea}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Digite a descrição..."
            />
          </div>

          {/* PÚBLICA ou PRIVADA */}
          {/* <div className={styles.modal_option}>
            <label>Pública?</label>
            <div className={styles.toggle_switch}>
              <input
                type="checkbox"
                id="publicToggle"
                checked={isPublic}
                onChange={() => setIsPublic(!isPublic)}
              />
              <label htmlFor="publicToggle" className={styles.switch_label} />
            </div>
          </div> */}

          {/* TAGS */}
          <div className={styles.modal_option_column}>
            <label>Sobre</label>
            <div className={styles.tags_list}>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  className={`${styles.tag_item} ${
                    tags.includes(tag) ? styles.tag_selected : ""
                  }`}
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.modal_actions}>
          <button className={styles.modal_create_button} onClick={handleSubmit}>
            Criar
          </button>
          <button className={styles.modal_cancel_button} onClick={handleCancel}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};
