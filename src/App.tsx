import { useState } from "react";
import "./App.css";
import LoginButtom from "./Components/login-buttom/login-buttom";
import ProjectList from "./Components/projects-list/projects-list";
import TextEditor from "./Components/text-editor/text-editor";

interface CardData {
  id: number; // identificador único
  nome: string; // identificador único
  content: string; // se precisar armazenar texto inicial
}

export default function App() {
  const [cards, setCards] = useState<CardData[]>([]);

  const [nCardNome, setNCardNome] = useState("");

  const addCard = () => {
    const newCard: CardData = {
      id: Date.now(), // gera ID único
      nome: nCardNome, // gera ID único
      content: "",
    };
    setCards([...cards, newCard]);
    setNCardNome("");
  };

  const destroyDatailsCard = (id: number) => {
    const newCards = cards.filter((e) => e.id != id);
    setCards(newCards);
  };

  return (
    <div className="background">
      <LoginButtom />

      <div className="left-side">
        <ProjectList />
      </div>
      <div className="right-side">
        {/* Título */}
        <h1 style={{ color: "white", marginBottom: "10px" }}>RestauranteApp</h1>

        {/* Área do input + botão */}
        <div className="projects-datails-actions">
          <input
            value={nCardNome}
            onChange={(e) => setNCardNome(e.target.value)}
            placeholder="Nome da nova seção..."
            type="text"
            className="projects-search-input"
          />
          <div className="projects-add-buttom" onClick={addCard}>
            +
          </div>
        </div>

        {/* Cards */}
        <div className="projects-details">
          {cards.map((card) => (
            <div key={card.id} className="datail-card">
              <TextEditor
                id={card.id}
                nomeDoCard={card.nome}
                onDestroy={destroyDatailsCard}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
