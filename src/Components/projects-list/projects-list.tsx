import ProjectCard from "../project-card/project-card";
import "./projects-list.css";
export default function ProjectList() {
  return (
    <div className="projects">
      <ProjectCard nome={"RestauranteApp"} />
      <ProjectCard nome={"EncontreAgora"} />
      <ProjectCard nome={"JogoRPG"} />
      <ProjectCard nome={"API-Restful"} />
      <ProjectCard nome={"Porrifolium"} />
    </div>
  );
}
