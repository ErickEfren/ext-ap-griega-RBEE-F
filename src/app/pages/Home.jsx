import {
  Inf,
  Epocas,
  Vestimentas,
  Relatos,
  Construcciones,
} from "../components";

import { ModalFooter } from "../../ui";

export const HomePage = () => {
  return (
    <>
      <header
        className="text-center masthead"
        style={{
          margin: "0",
          padding: "150px 0 0 0",
        }}
      >
        <div className="container">
          <img
            className="img-fluid d-block mx-auto mb-5"
            src="assets/img/logo.jpg"
            alt="..."
            style={{
              borderRadius: "10%",
            }}
          />
          <h1>Cultura Griega</h1>
          <hr className="star-light" />
        </div>
      </header>
      <hr className="my-4" />
      <section
        className=" mb-0"
        id="about"
        style={{
          margin: "0",
          padding: "50px 0 0 0",
        }}
      >
        <div className="container">
          <h2 className="text-uppercase text-center text-white">
            Sobre la cultura griega
          </h2>
          <hr className="star-light mb-5" />
          <div className="row">
            <div className="col-lg-4 ms-auto">
              <p className="lead">
                Durante toda su historia, con sus inicios en las civilizaciones
                minoica y Civilización micénica continuando con la notable
                Grecia clásica, el surgir de la época helenística y por medio de
                la influencia del imperio romano y su sucesor, el imperio
                bizantino, en la Grecia oriental.
              </p>
            </div>
            <div className="col-lg-4 me-auto">
              <Inf />
            </div>
          </div>
          <div className="text-center mt-4"></div>
        </div>
      </section>
      <section id="inf" className="portfolio">
        <div className="container">
          <h2 className="text-uppercase text-center text-secondary">
            Informacion sobre la cultura griega
          </h2>
          <hr className="star-dark mb-5" />
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <a
                className="d-block mx-auto portfolio-item"
                href="#portfolio-modal-1"
                data-bs-toggle="modal"
              >
                <div className="d-flex portfolio-item-caption position-absolute h-100 w-100">
                  <div className="text-center text-white my-auto portfolio-item-caption-content w-100">
                    <i className="fa fa-search-plus fa-3x"></i>
                  </div>
                </div>
                <h1 className="text-center text-uppercase">Epocas</h1>
                <img
                  className="img-fluid"
                  src="assets/img/epocas.png"
                  alt="..."
                />
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a
                className="d-block mx-auto portfolio-item"
                href="#portfolio-modal-2"
                data-bs-toggle="modal"
              >
                <div className="d-flex portfolio-item-caption position-absolute h-100 w-100">
                  <div className="text-center text-white my-auto portfolio-item-caption-content w-100">
                    <i className="fa fa-search-plus fa-3x"></i>
                  </div>
                </div>
                <h1 className="text-center text-uppercase">Vestimenta</h1>
                <img
                  className="img-fluid"
                  src="assets/img/vestimentas.png"
                  alt="..."
                />
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a
                className="d-block mx-auto portfolio-item"
                href="#portfolio-modal-3"
                data-bs-toggle="modal"
              >
                <div className="d-flex portfolio-item-caption position-absolute h-100 w-100">
                  <div className="text-center text-white my-auto portfolio-item-caption-content w-100">
                    <i className="fa fa-search-plus fa-3x"></i>
                  </div>
                </div>
                <h1 className="text-center text-uppercase">Construcciones</h1>
                <img
                  className="img-fluid"
                  src="assets/img/construcciones.png"
                  alt="..."
                />
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a
                className="d-block mx-auto portfolio-item"
                href="#portfolio-modal-4"
                data-bs-toggle="modal"
              >
                <div className="d-flex portfolio-item-caption position-absolute h-100 w-100">
                  <div className="text-center text-white my-auto portfolio-item-caption-content w-100">
                    <i className="fa fa-search-plus fa-3x"></i>
                  </div>
                </div>
                <h1 className="text-center text-uppercase">Relatos</h1>
                <img
                  className="img-fluid"
                  src="assets/img/relatos.png"
                  alt="..."
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <br />

      {/*Modales*/}
      <div
        className="modal text-center"
        role="dialog"
        tabIndex="-1"
        id="portfolio-modal-1"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container text-center">
                <div className="row">
                  <div className="col-lg-8 mx-auto">
                    <h2 className="text-uppercase text-secondary mb-0">
                      Epocas
                    </h2>
                    <hr className="star-dark mb-2" />

                    <div
                      className="text-center mt-4 container"
                      style={{
                        overflowY: "scroll",
                        height: "calc(100vh - 50vh)",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Epocas />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ModalFooter />
          </div>
        </div>
      </div>
      <div
        className="modal text-center"
        role="dialog"
        tabIndex="-1"
        id="portfolio-modal-2"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container text-center">
                <div className="row">
                  <div className="col-lg-8 mx-auto">
                    <h2 className="text-uppercase text-secondary mb-0">
                      Vestimentas
                    </h2>
                    <hr className="star-dark mb-2" />
                    <div
                      className="text-center mt-4 container"
                      style={{
                        overflowY: "scroll",
                        height: "calc(100vh - 50vh)",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Vestimentas />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ModalFooter />
          </div>
        </div>
      </div>
      <div
        className="modal text-center"
        role="dialog"
        tabIndex="-1"
        id="portfolio-modal-3"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container text-center">
                <div className="row">
                  <div className="col-lg-8 mx-auto">
                    <h2 className="text-uppercase text-secondary mb-0">
                      Construcciones
                    </h2>
                    <hr className="star-dark mb-2" />
                    <div
                      className="text-center mt-4 container"
                      style={{
                        overflowY: "scroll",
                        height: "calc(100vh - 50vh)",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Construcciones />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ModalFooter />
          </div>
        </div>
      </div>
      <div
        className="modal text-center"
        role="dialog"
        tabIndex="-1"
        id="portfolio-modal-4"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container text-center">
                <div className="row">
                  <div className="col-lg-8 mx-auto">
                    <h2 className="text-uppercase text-secondary mb-0">
                      Relatos
                    </h2>
                    <hr className="star-dark mb-2" />
                    <div
                      style={{
                        overflowY: "scroll",
                        height: "calc(100vh - 50vh)",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Relatos />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ModalFooter />
          </div>
        </div>
      </div>
    </>
  );
};
