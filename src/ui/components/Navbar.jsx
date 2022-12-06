import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { BsSunFill } from "react-icons/all";

export const Navbar = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <nav
      className="navbar navbar-light navbar-expand-lg fixed-top text-uppercase"
      id="mainNav"
    >
      <div className="container">
        <button
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          className="navbar-toggler text-white bg-primary navbar-toggler-right text-uppercase rounded"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa fa-bars"></i>
        </button>

        <div className="navbar-brand">
          <Link className="navbar-brand" to="/">
            Cultura Griega&nbsp;
            <img
              className="navbar-brand"
              src="https://mihistoriauniversal.com/wp-content/uploads/poseidon-antigua-grecia.jpg"
              alt="bandera de grecia"
              style={{
                height: "50px",
                width: "50px",
                padding: "5px",
                borderRadius: "50%",
              }}
            />
          </Link>
        </div>

        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-0 mx-lg-1">
              <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#about">
                <span>Sobre Griega</span>
              </a>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#inf">
                <span>Información</span>
              </a>
            </li>
            <br />
            <li className="nav-item mx-0 mx-lg-1">
              <div className="container-switch">
                <span
                  style={{
                    cursor: "pointer",
                  }}
                >
                  Cambiar tema &nbsp;
                </span>
                <BsSunFill />
                &nbsp;
                <input
                  type="checkbox"
                  id="switch"
                  name="theme"
                  checked={theme === "dark"}
                  onChange={() =>
                    setTheme(theme === "light" ? "dark" : "light")
                  }
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
