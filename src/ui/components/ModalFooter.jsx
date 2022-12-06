export const ModalFooter = () => {
  return (
    <div className="modal-footer pb-5">
      <a
        className="btn btn-primary btn-lg mx-auto rounded-pill portfolio-modal-dismiss"
        role="button"
        data-bs-dismiss="modal"
      >
        <i className="fa fa-close"></i>&nbsp;Cerrar Ventana
      </a>
    </div>
  );
};
