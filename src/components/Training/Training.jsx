import Book from "../../assets/book.svg";
import "./styles.scss";
export const Training = function () {
  const Training = [
    {
      title: "Ingeniería en informática",
      date: "2015-2019",
      school: [
        "Nivel Superior",
        "Ciudad Altamirano, Gro",
        "Instituto Tecnológico de Ciudad Altamirano, Avenida Pungarabato Pte. S/N.",
      ],
    },
  ];

  return (
    <>
      <h3 className="mb-4">Formación</h3>
      {Training.map((element, index) => (
        <div
          className="Training__item mb-3"
          data-aos="fade-left"
          data-aos-duration="1500"
          key={index}
        >
          <p className="Training__item--date">{element.date}</p>
          <section className="px-3 Training__item--content">
            <p className="Training__item--title mb-2">
              <img
                src={Book}
                alt="Book"
                width={25}
                height={25}
                className="img-fluid me-2"
              />
              {element.title}
            </p>
            <ul className="m-0 px-0 pt-1 Training__item--info">
              {element.school.map((i, index) => (
                <li className="my-1" key={index}>
                  {i}
                </li>
              ))}
            </ul>
          </section>
        </div>
      ))}
    </>
  );
};
