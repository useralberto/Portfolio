import photo from "../../assets/lalonso-v2.webp";
import File from "../../assets/file.svg";
import CV from "../../assets/Lucas-Alberto-Alonso-Cruz-CV.pdf";
import { useApp } from "../../hooks";
import { Contact, SocialMedia } from "./Links";

import "./styles.scss";

export const SideBar = function () {
  const { ThemeDark } = useApp();
  return (
    <div className={`SideBar p-3 p-lg-2 ${ThemeDark ? "SideBardark" : ""}`}>
      <div className={`SideBar__photo`}>
        <img
          src={photo}
          alt="Lucas Alberto"
          width={240}
          height={240}
          className="img-fluid"
        />
      </div>

      <div className="SideBar__body">
        <h1 className="SideBar__body--name mt-4">
          Lucas Alberto
          <span> Alonso Cruz</span>
        </h1>
        <a href={CV} download className="btn SideBar__body--cv my-3">
          <img src={File} alt="File" className="img-fluid me-2" />
          Descargar CV
        </a>
        <ul className="SideBar__body--links p-0 m-0">
          {Contact.map((link, index) => (
            <li key={index} className=" me-3 my-2">
              <a href={link.url} className="link">
                <img
                  src={link.icon}
                  alt={link.label}
                  className="img-fluid me-2"
                />
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-4 mb-2 SideBar__body--subtitle">Redes Sociales</p>
        <ul className="SideBar__body--links flex-column align-items-start m-0 p-0">
          {SocialMedia.map((link, index) => (
            <li key={index} className=" me-3 my-2">
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                <img
                  src={link.icon}
                  alt={link.label}
                  className="img-fluid me-2"
                />
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
