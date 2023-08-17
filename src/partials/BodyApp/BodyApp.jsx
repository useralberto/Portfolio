import {
  SideBar,
  AboutMe,
  WorkExperience,
  Training,
  Knowledge,
  Courses,
  Projects,
} from "../../components";
import { useApp } from "../../hooks";
import Dark from "../../assets/theme-dark.svg";
import Light from "../../assets/theme-white.svg";

const BodyApp = function () {
  const { ThemeDark, setThemeDark } = useApp();
  const Components = [
    {
      class: "",
      component: <AboutMe />,
    },
    {
      class: "",
      component: <WorkExperience />,
    },
    {
      class: "Training",
      component: <Training />,
    },
    {
      class: "Knowledge",
      component: <Knowledge />,
    },
    {
      class: "Courses",
      component: <Courses />,
    },
  ];

  return (
    <div className={`body ${ThemeDark ? "ThemeDarkActive" : ""}`}>
      <section className="container my-4">
        <div className="d-flex justify-content-end align-items-center">
          <button
            className="btn selectedTheme"
            onClick={() => setThemeDark(!ThemeDark)}
          >
            <img
              src={ThemeDark ? Light : Dark}
              alt="Theme"
              width={20}
              height={20}
              className="img-fluid me-2"
            />
            {ThemeDark ? "Light" : "Dark"}
          </button>
        </div>
        <div className="row gx-3">
          <section className=" col-12 col-lg-3">
            <SideBar />
          </section>
          <section className="col-12 col-lg-9 pt-5">
            {Components.map((item, index) => (
              <div key={index} className={`block ${item.class}`}>
                {item.component}
              </div>
            ))}
          </section>
        </div>
        <Projects />
        <p className="text-end">© 2023 Alberto Alonso</p>
      </section>
    </div>
  );
};

export default BodyApp;
