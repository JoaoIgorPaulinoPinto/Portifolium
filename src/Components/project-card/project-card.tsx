import "./project-card.css";

interface Projeto {
  nome: string;
}

export default function ProjectCard(projeto: Projeto) {
  return (
    <div className="project-card">
      <div className="project-name">{projeto.nome}</div>
      <div className="project-owner-pic">
        <img
          src="https://avatars.githubusercontent.com/u/161848302?v=4&size=64"
          alt="GitHub"
        />
      </div>
    </div>
  );
}
