import Project1 from "../../assets/project1.webp";
import Project2 from "../../assets/project2.webp";
import Project3 from "../../assets/project3.webp";
import Project4 from "../../assets/project4.webp";
import Project5 from "../../assets/project5.webp";
import Project6 from "../../assets/project6.webp";

import "./styles.scss";

export const Projects = function () {
  const Projects = [
    {
      name: "BizNet Connect",
      message: `© Alberto Alonso. Todos los derechos reservados`,
      image: Project2,
    },
    {
      name: "BizNet Hub",
      message: `© Alberto Alonso. Todos los derechos reservados`,
      image: Project4,
    },
    {
      name: "Stesso",
      message: `<a href="https://thebrandindustry.com/" target="_blank" rel="noopener noreferrer">© Brand Industry.</a> Todos los derechos reservados`,
      image: Project1,
    },
    {
      name: "Camas La Cruz",
      message: `<a href="https://thebrandindustry.com/" target="_blank" rel="noopener noreferrer">© Brand Industry.</a> Todos los derechos reservados`,
      image: Project3,
    },
    {
      name: "Ulbrich Shaped Wire",
      message: `<a href="https://thebrandindustry.com/" target="_blank" rel="noopener noreferrer">© Brand Industry.</a> Todos los derechos reservados`,
      image: Project5,
    },
    {
      name: "Gifan",
      message: `<a href="https://thebrandindustry.com/" target="_blank" rel="noopener noreferrer">© Brand Industry.</a> Todos los derechos reservados`,
      image: Project6,
    },
  ];
  return (
    <div className="mt-4 py-5 Projects">
      <h2 className="mb-5">Proyectos y colaboraciones</h2>
      <section className="row gy-3 gx-3">
        {Projects.map((project, index) => (
          <div className="col-12 col-md-4" key={index}>
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              className="Projects__item p-3"
            >
              <img src={project.image} alt="Stesso" className="img-fluid" />
              <h4 className="pt-4 Projects__item--title">{project.name}</h4>
              <p
                dangerouslySetInnerHTML={{ __html: project.message }}
                className="Projects__item--message"
              ></p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
