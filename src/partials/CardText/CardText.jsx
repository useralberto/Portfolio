import "./styles.scss";
const CardText = function ({ data }) {
  if (!data.length > 0) return;
  return (
    <section className="row gy-4">
      {data.map((card, index) => (
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="col-12 col-md-4"
          key={index}
        >
          <div className="CardText__card px-3 py-4">
            <p className="date pb-2">
              <span className="p-2">{card.date}</span>
            </p>
            <p className="title mb-1">{card.title}</p>
            <p className="category mb-2 mt-0">{card.category}</p>
            <p className="pt-1 description">{card.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CardText;
