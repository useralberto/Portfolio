import "./styles.scss";
import Award from "../../assets/award.svg";
export const AboutMe = function () {
  const Lists = [
    "🔭 Actualmente estoy trabajando en BizNet Hub y BizNet Connect (repositorios privados).",
    "🔭 Los plugins en los que he trabajado para Craft CMS son <a href='https://plugins.craftcms.com/base64-filters' target='_black' rel='noopener noreferrer'>Base64 filters</a> y <a href='https://github.com/Brand-Industry/Lead-scoring-system' target='_black' rel='noopener noreferrer'>Lead Scoring System</a>.",
    "🔭 Tengo un repositorio orientado a la <a href='https://github.com/useralberto/configVim' target='_black' rel='noopener noreferrer'>configuración de Neovim</a>.",
    "🌱 Actualmente estoy aprendiendo React Native, y en constante actualización en crear plugins y módulos en Craft CMS.",
    "💬 Pregúntame sobre Craft CMS, Vue, React js y Django Framework.",
  ];
  const Skills = [
    "Creatividad",
    "Facilidad para el trabajo en equipo",
    "Capacidad de adaptación a los cambios requeridos",
    "Autodidacta",
    "Honestidad e integridad",
  ];
  return (
    <>
      <h2 className="pt-2">Hola 👋, soy Lucas Alberto</h2>
      <p className="pt-1">
        Desarrollador Full Stack aficionado de proyectos de código abierto, y en
        constante actualización en diversas tecnologías.{" "}
      </p>
      <ul className="mx-0 p-0 AboutMe__list mt-4">
        {Lists.map((item, index) => (
          <li
            key={index}
            className="my-3 AboutMe__list--item"
            dangerouslySetInnerHTML={{ __html: item }}
          ></li>
        ))}
      </ul>
      <p className="pt-1">
        Me considero una persona honesta, responsable, creativo, abierto a todo
        tipo de conocimiento, orientado al trabajo en equipo, amable y con
        grandes deseos a salir adelante por mí y por mi familia.
      </p>

      <h4 className="pt-1 pb-2">Mis habilidades</h4>
      <ul className="p-0 m-0">
        {Skills.map((i, index) => (
          <li key={index} className="my-2">
            <img src={Award} alt="habilidad" className="img-fluid me-2" />
            {i}
          </li>
        ))}
      </ul>
    </>
  );
};
