import "./project-card.css";

interface Projeto {
  nome: string;
  dataAtt: string;
  link: string;
}

export default function ProjectCard(projeto: Projeto) {
  const date = new Date(projeto.dataAtt);
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };
  const handleClick = () => {
    window.open(projeto.link, "_blank"); // "_blank" abre em nova aba/janela
  };
  const formatado = date.toLocaleString("pt-BR", options);
  return (
    <div className="project-card" onClick={handleClick}>
      <div className="project-name">{projeto.nome}</div>
      <div className="project-datails">
        <span>{formatado}</span>
      </div>
      <div className="project-owner-pic">
        <img
          src="https://avatars.githubusercontent.com/u/161848302?v=4&size=64"
          alt="GitHub"
        />
      </div>
    </div>
  );
}
