import CardText from "../../partials/CardText/CardText";
import "./styles.scss";
export const WorkExperience = function () {
  const WorkExperience = [
    {
      title: "Desarrollador Full Stack",
      date: "Jun.2019 - Actual",
      category: "Home Office",
      description:
        "Actualmente me encuentro como desarrollador Full Stack semi senior en proceso de crecimiento, en el ecosistema de desarrollo web.",
    },
    {
      title: "Desarrollador Full Stack Jr",
      date: "Dic.2019 - Jun.2020",
      category: "Finkok Sapi de CV - Morelia, Mic.",
      description:
        "Desarrollador Full Stack Jr en proyectos internos y externos de la empresa desarrollados con las tecnologías python y django framework.",
    },
    {
      title: "Desarrollador Full Stack Jr",
      date: "2012 - 2019",
      category: "CIIE- Ciudad Altamirano",
      description:
        "Servicio Social como desarrollador Jr en el Centro de Incubación e Innovación Tecnológica (CIIE). - Instituto Tecnológico de Ciudad Altamirano.",
    },
  ];

  return (
    <>
      <h3 className="mb-4">Experiencia laboral</h3>
      <CardText data={WorkExperience} />
    </>
  );
};
