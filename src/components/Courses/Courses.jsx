import CardText from "../../partials/CardText/CardText";

export const Courses = function () {
  const Courses = [
    {
      title: "Front-end Fundamentals",
      date: "Jul.2020 - Mar.2021",
      category: "BEDU",
      description: "Beca Santander",
    },
    {
      title: "Vim, aumenta tu velocidad de desarrollo",
      date: "Abr.2021 - Abr.2021",
      category: "Udemy",
      description: "",
    },
    {
      title: "Desarrollo con React js.",
      date: "Oct.2022 - Ene.2023",
      category: "Udemy",
      description: "",
    },
    {
      title: "Desarrollo con Vue js.",
      date: "Nov.2022 - Ene.2023",
      category: "Udemy",
      description: "",
    },
  ];
  return (
    <div>
      <h3 className="mb-4">Cursos</h3>
      <CardText data={Courses} />
    </div>
  );
};
