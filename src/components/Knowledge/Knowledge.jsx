import "./styles.scss";
export const Knowledge = function () {
  const Info = [
    {
      title: "Lenguajes de programación",
      description: "JavaScript, Python, PHP",
    },
    {
      title: "Librerías y Frameworks",
      description: "Jquery, Bootstrap, Django, Vue js, React js",
    },
    {
      title: "Sistemas Operativos",
      description: "Linux, Mac os, Windows",
    },
    {
      title: "Tecnologias Web",
      description: "CSS, HTML, Sass, Ajax, Scraper, Nginx.",
    },
    {
      title: "Website Deployment",
      description: "DigitalOcean, Google Cloud Platform.",
    },
    {
      title: "Gestores de base de datos",
      description: "Mysql, Postgresql",
    },
    {
      title: "CMS",
      description: "Craft CMS, WordPress",
    },
    {
      title: "Conocimientos adicionales",
      description:
        "Git, Gitlab, Github, Neovim, Adobe Photoshop, Zeplin, Slack.",
    },
  ];
  return (
    <>
      <h3 className="mb-4">Conocimientos</h3>
      <div className="row gy-3">
        {Info.map((info, index) => (
          <div
            className="col-12 col-md-4"
            data-aos="fade-up"
            data-aos-duration="1500"
            key={index}
          >
            <div className="Knowledge__item p-3" key={index}>
              <h5 className="mb-2 Knowledge__item--title">{info.title}</h5>
              <p className="Knowledge__item--description my-0">
                {info.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
